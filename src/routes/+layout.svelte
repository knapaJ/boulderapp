<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';

	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Avatar, Badge } from 'flowbite-svelte';

	let activeUrl = $derived(page.url.pathname);

	let { children, data } = $props();



</script>


	<Navbar class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b">
		<NavBrand href="/">
			<img src="/images/climbing-svgrepo-com.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Boulder</span>
		</NavBrand>
		<div class="flex md:order-2">
			{#if !data.user}
				<Button size="sm" href="/register">Jdeme na to!</Button>
			{:else}
				<Button size="sm" color="alternative" href="/user">
					<div class="flex flex-row items-center justify-center gap-2">
						<Avatar src={data.user.avatar} size="xs"></Avatar>
						{data.user.username}
						{#if data.user.isAdmin}
								<Badge rounded>Admin</Badge>
						{/if}
					</div>
				</Button>
			{/if}
			<NavHamburger />
		</div >
		<NavUl activeUrl={activeUrl}>
			<NavLi href="/">Domů</NavLi>
			<NavLi href="/rules">Pravidla soutěže</NavLi>
			<NavLi href="/about">O aplikaci</NavLi>
		</NavUl>
	</Navbar>

<div class="w-full pt-20">
		{@render children()}
</div>