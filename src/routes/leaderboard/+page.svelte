<script lang="ts">
	import { Button, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

	let { data } = $props();

	let pohlavi = {
		"F": "Ženy",
		"M": "Muži"
	}

	let levels = {
		"beginner": "Začátečníci",
		"advanced": "Pokročilí"
	}

	let showCSV = $state(false);

</script>

<div class="flex flex-col items-center w-full">
	{#each data.boards as board}
		<h2 class="text-2xl">{levels[board.level]} - {pohlavi[board.sex]}</h2>
		<div class="flex-col max-w-3xl overflow-x-scroll">
			<Table>
				<TableHead>
					<TableHeadCell>Pořadí</TableHeadCell>
					<TableHeadCell>Přezdívka</TableHeadCell>
					<TableHeadCell>Jméno</TableHeadCell>
					<TableHeadCell>Příjmení</TableHeadCell>
					<TableHeadCell>Fakulta</TableHeadCell>
					<TableHeadCell>Počet topnutých boulderů</TableHeadCell>
					<TableHeadCell>Počet pokusů</TableHeadCell>
				</TableHead>
				<TableBody>
					{#each board.board as user}
						<TableBodyRow>
							<TableBodyCell>{user.rank}</TableBodyCell>
							<TableBodyCell>{user.username}</TableBodyCell>
							<TableBodyCell>{user.firstName}</TableBodyCell>
							<TableBodyCell>{user.lastName}</TableBodyCell>
							<TableBodyCell>{user.faculty}</TableBodyCell>
							<TableBodyCell>{user.toppedBoulders}</TableBodyCell>
							<TableBodyCell>{user.totalAttempts}</TableBodyCell>
						</TableBodyRow>
					{/each}
				</TableBody>
			</Table>
			{#if data.user?.isAdmin}
				<Button onclick={()=> {showCSV = !showCSV}}>CSV</Button>
			{/if}
		</div>

		{#if showCSV}
			<p class="text-left">
				Pořadí, Přezdívka, Jméno, Příjmení, Fakulta, Počet topnutých boulderů, Počet pokusů
			</p>
			{#each board.board as user}
				<p class="text-left">
					{user.rank}, {user.username}, {user.firstName}, {user.lastName}, {user.faculty}, {user.toppedBoulders}, {user.totalAttempts}
				</p>
			{/each}
		{/if}

	{/each}
</div>
