<script lang="ts">
	import { Cta, Section } from 'flowbite-svelte-blocks';
	import {
		Badge,
		Button,
		Checkbox,
		CloseButton, Drawer,
		Input,
		Label,
		SpeedDial,
		SpeedDialButton, Textarea,
		Toast,
		Toggle
	} from 'flowbite-svelte';
	import {CircleMinusSolid, CirclePlusSolid, EditSolid, TrashBinSolid, QrCodeOutline, CloseCircleSolid} from 'flowbite-svelte-icons';
	import { BadgeCheckSolid } from 'flowbite-svelte-icons';
	import { sineIn } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let { data, form } = $props();

	let topped = $state(data.myAttempt?.topped);
	let attemptCount = $state(data.myAttempt?.count);
	let hidden = $state(true);
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
	const handleCancel = () => {
		hidden=false;
	};

	let location = $state(null);
	onMount(() =>{
		location = window.location.href;
	})
</script>

{#if form?.success === 'attempt'}
	<Toast class="fixed bottom-2 end-2 bg-white z-10 border-1 rounded-2xl border-green-300" color="green">
		<BadgeCheckSolid slot="icon" class="w-6 h-6 text-green-600 bg-green-100" />
		Pokusy zapsány!
	</Toast>
{/if}
{#if form?.error === 'competition-not-enabled'}
	<Toast class="fixed bottom-2 end-2 bg-white z-10 border-1 rounded-2xl border-red-300" color="red">
		<CloseCircleSolid slot="icon" class="w-6 h-6 text-red-600 bg-red-100" />
		Nyní nelze zapisovat pokusy!
	</Toast>
{/if}


<Section name="ctawithimg">
	<Cta ctatype="image">
		<svelte:fragment slot="img">
			<img src={data.boulder.image} alt="obrázek boulderu" />
		</svelte:fragment>
		<svelte:fragment slot="h2">
			{data.boulder.name} <Badge color="yellow">{data.boulder.rating}</Badge>
		</svelte:fragment>
		<p class="pl-4 font-light text-gray-500 md:text-lg">
			{data.boulder.description}
		</p>
		{#if data.myAttempt}
			<div class="flex flex-col items-center pt-5 space-y-6">
				<h4 class="text-2xl">Tvoje pokusy:</h4>
				<form class="flex flex-col space-y-4" method="POST" action="?/attempt">
					<Label class="space-y-2">
						<span>Počet pokusů</span>
						<div class="flex flex-row space-x-2 items-center">
							<button onclick={() => attemptCount = Math.max(attemptCount - 1, 0)} type="button">
								<CircleMinusSolid size="xl"/>
							</button>
							<Input type="number" min="0" class="w-20 text-right" bind:value={attemptCount} name="count"></Input>
							<button onclick={() => attemptCount++} type="button">
								<CirclePlusSolid size="xl"/>
							</button>
						</div>
					</Label>
					<Label class="space-y-2">
						<Toggle bind:checked={topped}>Topnul jsi to?</Toggle>
						<Checkbox class="hidden" name="topped" bind:checked={topped}></Checkbox>
					</Label>
					<Input type="text" value={data.myAttempt.id} name="id" disabled class="hidden"></Input>
					<Button type="submit" class="w-full">Zapsat pokusy</Button>
				</form>
			</div>
		{/if}
	</Cta>
</Section>

<Section sectionClass="">
	<Drawer transitionType="fly" {transitionParams} bind:hidden id="sidebar4">
		<div class="flex items-center">
			<h5 id="drawer-label" class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Upravit</h5>
			<CloseButton on:click={() => (hidden = true)} class="mb-4 dark:text-white" />
		</div>
		<form action="?/delete" class="mb-6" method="POST">
			<Button type="submit" color="red" class="w-full"><TrashBinSolid class="w-6 h-6"/>Smazat boulder</Button>
		</form>
		<form action="?/edit" class="mb-6" method="POST" enctype="multipart/form-data">
			<div class="mb-6">
				<Label class="space-y-2">Název boulderu</Label>
				<Input type="text" name="name" required value={data.boulder.name}></Input>
			</div>
			<div class="mb-6">
				<Label class="space-y-2">Popis boulderu</Label>
				<Textarea name="description" rows={10} required value={data.boulder.description}></Textarea>
			</div>
			<div class="mb-6">
				<Label class="space-y-2">Rating boulderu</Label>
				<Input type="text" name="rating" required value={data.boulder.rating}></Input>
			</div>

			<div class="flex justify-center pb-4 space-x-4">
				<Button type="submit" class="w-full">Uložit</Button>
			</div>
		</form>
		<form action="?/image" class="mb-6" method="POST" enctype="multipart/form-data">
			<div class="mb-6">
				<Label class="space-y-2">Fotka boulderu</Label>
				<Input type="file" id="image" name="image" accept=".jpg, .jpeg, .png" required></Input>
			</div>
			<div class="flex justify-center pb-4 space-x-4">
				<Button type="submit" class="w-full">Uložit</Button>
			</div>
		</form>
	</Drawer>
</Section>


{#if data.user?.isAdmin}
	<SpeedDial defaultClass="absolute end-6 bottom-6 fixed">
		<SpeedDialButton name="upravit" onclick={() => {hidden=false;}}>
			<EditSolid class="w-6 h-6" />
		</SpeedDialButton>
		<SpeedDialButton name="qr kód" onclick={()=> {window.location.href=`https://api.qrserver.com/v1/create-qr-code/?size=640x640&data=${location}`}}>
			<QrCodeOutline class="w-6 h-6" />
		</SpeedDialButton>
	</SpeedDial>
{/if}
