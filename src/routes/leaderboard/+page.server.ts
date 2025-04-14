import type { PageServerLoad } from './$types';
import { getLoggedInUser } from '$lib/auth';
import { userCollection } from '$lib/user';

async function boardBy(filter){
	const pipeline = [];


	pipeline.push({
		$match: {
			hiddenFromLeaderboard: false,
		}
	});

	pipeline.push(filter);

	pipeline.push(
		{
			$lookup: {
				from: "attempts",
				localField: "_id",
				foreignField: "userId",
				pipeline:[
					{
						$match:{
							topped:true,
						}
					},
					{
						$lookup:{
							from:"boulders",
							localField:"boulderId",
							foreignField:"_id",
							as: "temp",
						}
					},
					{
						$set:{
							temp: { $first: "$temp"}
						}
					},
					{
						$set: {
							boulderName: "$temp.name"
						}
					},
					{
						$unset: ["temp"]
					}
				],
				as: "attempts"
			}
		}
	)


	const results = await userCollection.aggregate(pipeline).toArray()

	let board = results.map((user) => {
		return {
			id: user._id.toString(),
			username: user.username,
			firstName: user.firstName,
			lastName: user.lastName,
			faculty: user.faculty,
			attempts: user.attempts.map((attempt) => {
				return {
					id: attempt._id.toString(),
					boulderId: attempt.boulderId.toString(),
					boulderName: attempt.boulderName,
					count: attempt.count,
				}
			}),
			toppedBoulders: user.attempts.length,
			totalAttempts: user.attempts.reduce((acc, attempt) => {
				return acc + attempt.count;
			}, 0),
		}
	});

	board = board.filter((user)=>{
		return user.toppedBoulders>0;
	})

	board.sort((a,b) => {
		if(a.toppedBoulders>b.toppedBoulders) return -1;
		if(a.toppedBoulders<b.toppedBoulders) return 1;
		if(a.totalAttempts<b.toppedBoulders) return -1;
		if(a.totalAttempts>b.toppedBoulders) return 1;
		return 0;
	});

	board.forEach((row,index) =>{
		row.rank = index+1;
	})

	return board;
}


export const load: PageServerLoad = async ({cookies}) => {

	const currentUser = await getLoggedInUser(cookies);


	const levels = ["beginner", "advanced"];
	const sexes = ["F","M"];

	const boards = [];

	for (const sexesKey of sexes) {
		for (const levelsKey of levels) {
			boards.push({
				sex: sexesKey,
				level: levelsKey,
				board: await boardBy({
					$match:{
						sex: sexesKey,
						level: levelsKey,
					}
				})
			})
		}
	}


	return {
		boards:boards,
	};
};