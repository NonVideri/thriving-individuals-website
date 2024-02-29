<script>
	import { onMount } from 'svelte';
	import NavBarLink from './NavBarLink.svelte';

	let lastScroll = 0;
	let showMenu = true;

	onMount(() => {
		window.addEventListener('scroll', () => {
			const currentScroll = window.scrollY;
			if (currentScroll <= 0) {
				showMenu = true;
			} else if (currentScroll > lastScroll) {
				showMenu = false;
			} else {
				showMenu = true;
			}
			lastScroll = currentScroll;
		});
	});
</script>

<nav
	class="z-10 fixed top-0 left-0 right-0 flex justify-around transition-transform duration-300 ease-in-out {!showMenu &&
		'transform -translate-y-full'}"
>
	<NavBarLink href="#home">Join Us</NavBarLink>
	<NavBarLink href="#about">About</NavBarLink>
	<NavBarLink href="#team">Our Team</NavBarLink>
	<NavBarLink href="https://forum.thrivingindividuals.org">Forum</NavBarLink>
</nav>
