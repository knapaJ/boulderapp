<script lang="ts">
	import { EditSolid } from "flowbite-svelte-icons";
	import {
		Button,
		Checkbox,
		CloseButton,
		Drawer,
		Input,
		Label,
		SpeedDial,
		SpeedDialButton,
		Textarea, Toggle
	} from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';
	import { Section } from 'flowbite-svelte-blocks';
	import Markdown from '@magidoc/plugin-svelte-marked';

	let { data } = $props();
	let compEn = $state(data.rules.competition_enabled)


	let hidden = $state(true);
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
	const handleCancel = () => {
		hidden=false;
	};
</script>

<div class="flex flex-col items-center">
	{#if !data.rules.competition_enabled}
		<h2 class="text-2xl font-bold text-center text-primary-700">Soutěž ještě nebyla spuštěna!</h2>
		<p class="text-sm text-gray-500">Zatím si třeba prohlédni bouldery!</p>
	{/if}
	<a href={data.rules.image}>
		<img src={data.rules.image} alt="plánek soutěže" class="max-w-full lg:max-w-xl" />
	</a>
	<h2 class="text-2xl font-bold text-center">Pravidla a popis soutěže</h2>
	<div class="max-w-3xl">
		<Markdown  source={data.rules.rules}></Markdown>
	</div>

	{#if data.user?.isAdmin}
		<SpeedDial defaultClass="absolute end-6 bottom-6 fixed">
			<SpeedDialButton name="Editovat" onclick={() => {hidden=false;}}>
				<EditSolid class="w-6 h-6" />
			</SpeedDialButton>
		</SpeedDial>
	{/if}
</div>

<Section sectionClass="h-96">
	<Drawer transitionType="fly" {transitionParams} bind:hidden id="sidebar4">
		<div class="flex items-center">
			<h5 id="drawer-label" class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">UPDATE USER</h5>
			<CloseButton on:click={() => (hidden = true)} class="mb-4 dark:text-white" />
		</div>
		<form action="/rules" class="mb-6" method="POST" enctype="multipart/form-data">
			<div class="mb-6">
				<Toggle bind:checked={compEn}>
					Soutěž spuštěna
				</Toggle>
				<Checkbox class="hidden" name="competition_enabled" bind:checked={compEn}></Checkbox>
			</div>
			<div class="mb-6">
				<Label for="name" class="block mb-2">Plánek soutěže</Label>
				<Input type="file" id="image" name="image" accept=".jpg, .jpeg, .png"></Input>
			</div>
			<div class="mb-6">
				<Label for="name" class="block mb-2">Pravidla</Label>
				<Textarea id="rules" name="rules" rows={20} value={data.rules.rules}></Textarea>
			</div>
			<div class="bottom-0 left-0 flex justify-center w-full pb-4 space-x-4 md:px-4 md:absolute">
				<Button type="submit" class="w-full">Uložit</Button>
				<Button class="w-full" outline color="red" on:click={handleCancel}>Zrušit</Button>
			</div>
		</form>
	</Drawer>
</Section>