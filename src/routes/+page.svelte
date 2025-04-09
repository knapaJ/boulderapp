<script lang="ts">
	import { Cta, Section } from 'flowbite-svelte-blocks';

	let { data } = $props();
</script>

<Section name="ctawithimg">
	<Cta ctatype="image">
		<svelte:fragment slot="img">
			<img src="/images/arealy3_640.jpg" alt="dashboard" />
		</svelte:fragment>
		<svelte:fragment slot="h2">Soutěžní lezení na pokusy?<br>Trochu jsem to zkusil zpohodlnit.</svelte:fragment>
		<p class="pl-4 font-light text-gray-500 md:text-lg">
			Kdo se chce tahat s kusem papíru po stěně, ještě to někde ztratíš. Mobil ti jenom někdo rozsedne, nebo na něj spadneš.
		</p>
		<p class="mb-6 font-light text-gray-500 md:text-lg text-right">
			- Jan Knapovský
		</p>
		{#if !data.user}
			<a href="/register" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
				Jdeme na to!
			</a>
			<a href="/login" class="inline-flex items-center text-primary-700 bg-white hover:bg-primary-200 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 border-2 border-primary-300">
				Přihlas se
			</a>
		{:else}
			<a href="/boulders" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
				Jdeme lézt!
			</a>
			<a href="/rules" class="inline-flex items-center text-primary-700 bg-white hover:bg-primary-200 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 border-2 border-primary-300">
				Přehled soutěže
			</a>
		{/if}
	</Cta>
</Section>
