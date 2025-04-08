<script lang="ts">
	import { Cta, Section } from 'flowbite-svelte-blocks';
	import { Button, Helper, Input, Label } from 'flowbite-svelte';
	import { enhance } from '$app/forms';

	let { data, form } = $props();
</script>

<Section name="ctawithimg">
	<Cta ctatype="image">
		<svelte:fragment slot="img">
			<img class="w-full" src="/images/Hello_there.jpg" alt="Hello there"/>
		</svelte:fragment>
		<svelte:fragment slot="h2">Zdravíčko, kdopak jsi ty?</svelte:fragment>
		<form class="flex flex-col space-y-6" method="POST">
			{#if form?.error}
				<Helper color="red">
					Něco nezafungovalo! Asi špatné heslo nebo přezdívka!
				</Helper>
			{/if}
			<Label class="space-y-2">
				Přezdívka
				<Input type="text" name="username" placeholder="VelkejLezec420" required value={form?.username}/>
			</Label>
			<Label class="space-y-2">
				Heslo
				<Input type="password" name="password" placeholder="•••••" required />
			</Label>
			<Button type="submit" class="w-full">Přihlásit se</Button>
		</form>
	</Cta>
</Section>