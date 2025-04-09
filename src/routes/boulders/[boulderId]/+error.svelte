<script lang="ts">

	import { Page404, Section } from 'flowbite-svelte-blocks';
	import { Button } from 'flowbite-svelte';
</script>

<Section name="page404">
	<Page404>
		<svelte:fragment slot="h1">404</svelte:fragment>
		<svelte:fragment slot="paragraph">
			<p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Tak tenhle boulder neznám :(</p>
			<p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Jestli ses sem dostal/a nějakým normálním způsobem, tak je něco hodně špatně. Jestli ti někdo tenhle odkaz poslal, tak to bylo asi dávno.</p>
			<Button href="/boulders" size="lg" color="red">Zpátky k boulderům</Button>
		</svelte:fragment>
	</Page404>
</Section>