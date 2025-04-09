<script lang="ts">
	import {
		Badge,
		Button,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell, Toast
	} from 'flowbite-svelte';
	import { BadgeCheckSolid } from 'flowbite-svelte-icons';
	import type { ActionResult } from '@sveltejs/kit';
	import { applyAction, deserialize } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

	let { data, form } = $props();

	async function promoteUser(username:string){
		const data = new FormData()

		data.append('username', username);

		const response = await fetch('?/promote', {
			method: 'POST',
			body: data
		});
		const result:ActionResult = deserialize(await response.text())
		await invalidateAll();

		await applyAction(result);
	}

	async function demoteUser(username:string){
		const data = new FormData()

		data.append('username', username);

		const response = await fetch('?/demote', {
			method: 'POST',
			body: data
		});
		const result:ActionResult = deserialize(await response.text())
		await invalidateAll();

		await applyAction(result);
	}
</script>

{#if form?.success}
	<Toast class="fixed bottom-2 end-2 bg-white z-10 border-1 rounded-2xl border-green-300" color="green">
		<BadgeCheckSolid slot="icon" class="w-6 h-6 text-green-600 bg-green-100" />
		Provedeno!
	</Toast>
{/if}

<div class="flex flex-col w-full justify-center">
	<div class="flex flex-col items-center">
		<h1 class="text-3xl font-bold">Uživatelé</h1>
		<Table>
			<TableHead>
				<TableHeadCell>Přezdívka</TableHeadCell>
				<TableHeadCell>Jméno</TableHeadCell>
				<TableHeadCell>Příjmení</TableHeadCell>
				<TableHeadCell>Fakulta</TableHeadCell>
				<TableHeadCell>Heslo</TableHeadCell>
				<TableHeadCell>Možnosti</TableHeadCell>
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				{#each data.users as user}
					<TableBodyRow>
						<TableBodyCell>{user.username}
							{#if user.isAdmin}
								<Badge color="green" rounded>Admin</Badge>
							{/if}
						</TableBodyCell>
						<TableBodyCell>{user.firstName}</TableBodyCell>
						<TableBodyCell>{user.lastName}</TableBodyCell>
						<TableBodyCell>{user.faculty}</TableBodyCell>
						<TableBodyCell>{user.password}</TableBodyCell>
						<TableBodyCell>
							{#if user.isAdmin}
								{#if user.username !== data.user.username}
									<Button color="red" size="xs" onclick={() => demoteUser(user.username)}>Degradovat</Button>
								{:else}
									<Button color="dark" size="xs" disabled >Degradovat
									</Button>
								{/if}
							{:else}
								<Button color="red" size="xs" onclick={() => promoteUser(user.username)}>Povýšit</Button>
							{/if}
						</TableBodyCell>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	</div>
</div>