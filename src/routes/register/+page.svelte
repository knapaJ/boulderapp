<script lang="ts">
	import { Section, Register } from "flowbite-svelte-blocks";
	import { Button, Checkbox, Label, Input, Popover, Modal, Select, Helper } from 'flowbite-svelte';
	import { QuestionCircleOutline } from 'flowbite-svelte-icons';
  import type ActionData from './$types'

	let showTnC = $state(false);

	let faculties = [
		{ name: "Fakulta strojního inženýrství", value: "FSI" },
		{ name: "Fakulta elektrotechniky a komunikačních technologií", value: "FEKT" },
		{ name: "Fakulta informačních technologií", value: "FIT" },
		{ name: "Fakulta podnikatelská", value: "FP" },
		{ name: "Fakulta chemická", value: "FCH" },
		{ name: "Fakulta stavební", value: "FAST"},
		{ name: "Fakulta výtvarných umění", value: "FAVU"},
		{ name: "Centrum sportovních aktivit", value: "CESA"},
		{ name: "Jiná", value: "other"}
	];

	let sexes = [
		{ name: "Žena", value: "F"},
		{ name: "Muž", value: "M"},
	]
	let levels = [
		{ name: "Začátečník", value: "beginner"},
		{ name: "Pokročilý", value: "advanced"},
	]

	let { form } : {form: ActionData } = $props();

</script>

<Section name="register">
	<Register href="/">
		<svelte:fragment slot="top">
			<img class="w-8 h-8 mr-2" src="/images/climbing-svgrepo-com.svg" alt="logo" />
			Boulder
		</svelte:fragment>
		<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
			<form class="flex flex-col space-y-6" method="POST" >
				<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Založit účet</h3>
				<Label class="space-y-2">
					<span>Přezdívka</span>
					<Input type="text" name="username" placeholder="VelkejLezec420" required value={form?.username ?? ''}/>
					{#if form?.error === 'user-exists'}
						<Helper class="mt-2" color="red">Toto uživatelské jméno je obsazené!</Helper>
					{/if}
				</Label>
				<Label class="space-y-2">
					<span>
						Jméno
					</span>
					<Input type="text" name="firstName" placeholder="Janko" required value={form?.firstName ?? ''}/>
				</Label>
				<Label class="space-y-2">
					<span>
						Příjmení
					</span>
					<Input type="text" name="lastName" placeholder="Dvořák" required value={form?.lastName ?? ''}/>
				</Label>
				<Label class="space-y-2">
					<span>Fakulta</span>
					<Select name="faculty" class="mt-2" items={faculties} placeholder="Vyber fakultu..." required value={form?.faculty ?? ''}></Select>
				</Label>
				<Label class="space-y-2">
					<span>Pohlaví</span>
					<Select name="sex" class="mt-2" items={sexes} required placeholder="Vyber svoje pohlaví"></Select>
				</Label>
				<Label class="space-y-2">
					<span>Úroveň</span>
					<Select name="level" class="mt-2" items={levels} required placeholder="Vyber svoji úroveň"></Select>
				</Label>
				<Label class="space-y-2">
					<span>Heslo</span>
					<Input type="password" name="password" placeholder="•••••" required />
					<Helper class="mt-2" color="red">Heslo je viditelné administrátorům!</Helper>
				</Label>
				<Label class="space-y-2">
					<span>Heslo znovu</span>
					<Input type="password" name="confirm-password" placeholder="•••••" required />
					{#if form?.error === 'passwd-nomatch'}
						<Helper class="mt-2" color="red">Hesla se neshodují!</Helper>
					{/if}
				</Label>
				{#if form?.error === 'tnc-not-accepted'}
					<Helper class="" color="red">Seznam se, prosím, s podmínkami použití!</Helper>
				{/if}
				<div class="flex items-start">
					<Checkbox name="tnc" checked={form?.tnc ?? false}>Souhlasím s <button type="button" class="font-medium text-primary-600 hover:underline dark:text-primary-500" onclick={() => {showTnC = true}}>Podmínkami použití</button></Checkbox>
					<Modal title="Podmínky použití" bind:open={showTnC} autoclose>
						<p class="text-base leading-relaxed text-gray-500">
							Tato aplikace vznikla jako projekt jednoho nadšeného programátora. Nezabýval jsem se <b>žádným</b> zabezpečením! Nepoužívej tu heslo které používáš jinde.
							Pokud ti vadí nedostatek zabezpečení, tak ji nepoužívej a domluv se individuálně s organizátorem.
						</p>
						<p class="text-base leading-relaxed text-gray-500">
							TLDR: <b>NEZADÁVEJ SEM HESLO K TVÉMU DISCORDU!</b>
						</p>
					</Modal>
				</div>
				<Button type="submit" class="w-full">Vytvořit účet</Button>
				<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
					Už máš tady účet? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Přihlas se</a>
				</div>
			</form>
		</div>
	</Register>
</Section>