<script>
	import { PUBLIC_FORUM_URL } from '$env/static/public';
	import SubscribeForm from '$lib/SubscribeForm.svelte';
	import Header from '../../lib/Header.svelte';
	import Paragraph from '../../lib/Paragraph.svelte';
	import Section from '../../lib/Section.svelte';
</script>

<Section>
	<Header>1. Join our newsletter:</Header>
	<SubscribeForm />
</Section>

<Section>
	<Header>2. Join our private community:</Header>
	<Paragraph>
		Join our forums to interact with ambitious free people from all around the world:
	</Paragraph>
	<a class="block mt-4" href={PUBLIC_FORUM_URL} target="_blank" rel="noopener noreferrer">
		<img
			id="home"
			src="/logo-forum.png"
			alt="Thriving Individuals Community Logo"
			class="mx-auto mt-2 md:mt-3 lg:mt-4 rounded-lg hover:opacity-75 transition-opacity duration-200"
		/>
	</a>
</Section>
