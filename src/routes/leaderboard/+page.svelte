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
	<h1 class="text-center text-primary-700 m-0.5">Vím o chybě v řazení žebříčků, aktuálně pracuji na její nápravě. Berte, prosím, zde generované žebříčky za předběžné. Při vyhlášení výsledků budou kontrolovány a zpracovávány ručně.</h1>
	{#each data.boards as board}
		<h2 class="text-2xl">{levels[board.level]} - {pohlavi[board.sex]}</h2>
		<div class="flex-col md:max-w-3xl max-w-full overflow-x-scroll">
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
