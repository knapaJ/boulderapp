<script lang="ts">
	import {
		Badge,
		Button, Card,
		Checkbox,
		CloseButton, Drawer,
		Input,
		Label,
		SpeedDial,
		SpeedDialButton,
		Textarea, Toast,
		Toggle
	} from 'flowbite-svelte';
	import { CirclePlusSolid, CheckCircleSolid } from 'flowbite-svelte-icons';
	import { Section } from 'flowbite-svelte-blocks';
	import { sineIn } from 'svelte/easing';
	import { BadgeCheckSolid, ArrowRightOutline } from 'flowbite-svelte-icons';

	let { data, form } = $props();

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

{#if form?.success}
	<Toast class="absolute top-0 end-0" color="green">
		<BadgeCheckSolid slot="icon" class="w-6 h-6 text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200" />
		Boulder vytvořen!
	</Toast>
{/if}

{#if data.user?.isAdmin}
	<SpeedDial defaultClass="absolute end-6 bottom-6 fixed">
		<SpeedDialButton name="Přidat nový" onclick={() => {hidden=false;}}>
			<CirclePlusSolid class="w-6 h-6" />
		</SpeedDialButton>
	</SpeedDial>
{/if}

<div class="flex flex-col items-center">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:grid-flow-row content-center justify-center">
		{#each data.boulders as boulder (boulder.id)}
			<Card img={boulder.image} href="/boulders/{boulder.id}">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{boulder.name}<Badge color="yellow">{boulder.rating}</Badge>
				</h5>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
					{boulder.description.length < 100 ? boulder.description : boulder.description.slice(0, 100) + '...'}
				</p>
				<div class="flex flex-row gap-4">
					<Button>
						Vzhůru k výškám <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
					</Button>
					{#if boulder.topped}
						<CheckCircleSolid class="w-10 h-10 text-green-500" />
					{:else if boulder.count > 0}
						<Badge color="purple" class="text-purple-500 h-fit">
							{boulder.count}
						</Badge>
					{/if}
				</div>
			</Card>
		{/each}
	</div>
</div>

<Section sectionClass="">
	<Drawer transitionType="fly" {transitionParams} bind:hidden id="sidebar4">
		<div class="flex items-center">
			<h5 id="drawer-label" class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Přidat boulder</h5>
			<CloseButton on:click={() => (hidden = true)} class="mb-4 dark:text-white" />
		</div>
		<form action="/boulders" class="mb-6" method="POST" enctype="multipart/form-data">
			<div class="mb-6">
				<Label for="name" class="block mb-2">Název boulderu</Label>
				<Input type="text" name="name" required></Input>
			</div>
			<div class="mb-6">
				<Label for="name" class="block mb-2">Popis boulderu</Label>
				<Textarea name="description" rows={10} required></Textarea>
			</div>
			<div class="mb-6">
				<Label class="block mb-2">Rating boulderu</Label>
				<Input type="text" name="rating" required></Input>
			</div>
			<div class="mb-6">
				<Label for="name" class="block mb-2">Fotka boulderu</Label>
				<Input type="file" id="image" name="image" accept=".jpg, .jpeg, .png" required></Input>
			</div>
			<div class="bottom-0 left-0 flex justify-center w-full pb-4 space-x-4 md:px-4 md:absolute">
				<Button type="submit" class="w-full">Uložit</Button>
				<Button class="w-full" outline color="red" on:click={handleCancel}>Zrušit</Button>
			</div>
		</form>
	</Drawer>
</Section>