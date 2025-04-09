<script lang="ts">
	import { Avatar, Button, Checkbox, Helper, Input, Label, Select, Span } from 'flowbite-svelte';
	import type { PageData }  from './$types';
	import { Page404, Section } from 'flowbite-svelte-blocks';

	let { data, form }: {data: PageData} = $props();

	let faculties = [
		{ name: "Fakulta strojního inženýrství", value: "FSI" },
		{ name: "Fakulta elektrotechniky a komunikačních technologií", value: "FEKT" },
		{ name: "Fakulta informačních technologií", value: "FIT" },
		{ name: "Fakulta podnikatelská", value: "FP" },
		{ name: "Fakulta chemická", value: "FCH" },
		{ name: "Fakulta stavební", value: "FAST"},
		{ name: "Fakulta výtvarných umění", value: "FAVU"},
		{ name: "Jiná", value: "other"}
	];
	let sexes = [
		{ name: "Žena", value: "F"},
		{ name: "Muž", value: "M"},
	];
	let levels = [
		{ name: "Začátečník", value: "beginner"},
		{ name: "Pokročilý", value: "advanced"},
	];
</script>

{#if data.user}
<div class="flex flex-col md:flex-row justify-center items-center">
	<div class="flex flex-col items-center justify-center gap-5">
		<Avatar size="xl"/>
		<form method="POST" action="/user?/logout">
			<Button type="submit">Odhlásit se</Button>
		</form>
	</div>
	<form class="flex flex-col p-6 space-y-4 md:space-y-6 sm:p-8" method="POST" action="/user?/edit">
		<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">
			{#if !data.user.isAdmin}
				Vítej, uživateli {data.user.username}
			{:else }
				K službám šéfe! Víš o tom, že jsi admin, že jo?
			{/if}
		</h3>
		{#if form?.error === "failed-update"}
			<Label color="red">Něco se nepovedlo při aktualizování údajů!</Label>
		{/if}
		{#if form?.success}
			<Label color="green">Aktualizováno!</Label>
		{/if}
		<Label class="space-y-2">
			<span>Přezdívka</span>
			<Input type="text" name="username" placeholder="VelkejLezec420" required value={data.user.username} disabled="true"/>
		</Label>
		<Label class="space-y-2">
					<span>
						Jméno
					</span>
			<Input type="text" name="firstName" placeholder="Janko" required value={data.user.firstName}/>
		</Label>
		<Label class="space-y-2">
					<span>
						Příjmení
					</span>
			<Input type="text" name="lastName" placeholder="Dvořák" required value={data.user.lastName}/>
		</Label>
		<Label class="space-y-2">
			<span>Fakulta</span>
			<Select name="faculty" class="mt-2" items={faculties} placeholder="Vyber fakultu..." required value={data.user.faculty}></Select>
		</Label>
		<Label class="space-y-2">
			<span>Pohlaví</span>
			<Select name="sex" class="mt-2" items={sexes} required placeholder="Vyber svoje pohlaví" value={data.user.sex}></Select>
		</Label>
		<Label class="space-y-2">
			<span>Úroveň</span>
			<Select name="level" class="mt-2" items={levels} required placeholder="Vyber svoji úroveň" value={data.user.level}></Select>
		</Label>
		{#if data.user.isAdmin}
			<Checkbox name="hiddenFromLeaderboard" checked={data.user.hiddenFromLeaderboard} color="red">
				<span class="text-primary-600">
					Skrýt mě z žebříčků a hodnocení!
				</span>
			</Checkbox>
		{/if}
		<Button type="submit" class="w-full">Změnit údaje</Button>
	</form>
	<form class="flex flex-col p-6 space-y-4 md:space-y-6 sm:p-8 md:w-fit w-full" method="POST" action="/user?/passwd">
		<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Změnit heslo</h3>
		{#if form?.error === "failed-update"}
			<Label color="red">Něco se nepovedlo při aktualizování hesla!</Label>
		{/if}
		{#if form?.passwd}
			<Label color="green">Heslo změněno!</Label>
		{/if}
		<Label class="space-y-2">
			<span>Stávající heslo</span>
			<Input type="password" name="password" placeholder="•••••" required />
			{#if form?.error === 'wrong-password'}
				<Helper class="mt-2" color="red">Špatné heslo!</Helper>
			{/if}
		</Label>
		<Label class="space-y-2">
			<span>Nové heslo</span>
			<Input type="password" name="new-password" placeholder="•••••" required />
		</Label>
		<Label class="space-y-2">
			<span>Nové heslo znovu</span>
			<Input type="password" name="confirm-new-password" placeholder="•••••" required />
			{#if form?.error === 'passwd-nomatch'}
				<Helper class="mt-2" color="red">Hesla se neshodují!</Helper>
			{/if}
		</Label>
		<Button type="submit" class="w-full">Změnit heslo</Button>
	</form>
</div>
{:else}
	<Section name="page404">
		<Page404>
			<svelte:fragment slot="h1">:(</svelte:fragment>
			<svelte:fragment slot="paragraph">
				<p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Uh oh. Tebe neznám.</p>
				<p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Vypadá to, že ještě nemáš účet, nebo alespoň nejsi přihlášený/á. Nevím, jak ses sem dostal/a. Zkus zapracovat na tom účtu a pak se vrať.</p>
				<Button href="/register" size="lg" color="red">Zaregistruj se!</Button>
				<Button href="/login" size="lg" color="green">Přihlaš se!</Button>
			</svelte:fragment>
		</Page404>
	</Section>
{/if}