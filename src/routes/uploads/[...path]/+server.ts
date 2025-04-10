import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs/promises';


export const GET: RequestHandler = async ({ params }) => {

	const filepath = "./uploads/" + params.path.toString();

	try {
		const imageBuffer = await fs.readFile(filepath);


		return new Response(imageBuffer);
	}
	catch (e){
		return new Response("image not found", {status: 404})
	}

}