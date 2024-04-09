<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import pb from '../../lib/pocketbase';
	import Loading from '../../lib/Loading.svelte';
	import Announcement from '../../lib/Announcement.svelte';
	import Paragraph from '../../lib/Paragraph.svelte';
	import Link from '../../lib/Link.svelte';
	import { PUBLIC_FORUM_URL } from '$env/static/public';

	let loading = true;
	let successful = false;

	onMount(async () => {
		const id = $page.url.searchParams.get('id');
		if (!id) {
			loading = false;
			return;
		}
		const result = await pb.collection('subscribers').update(id, { confirmed: true });
		loading = false;
		if (result.ok) {
			successful = true;
		}
	});
</script>

{#if loading}
	<Loading />
{:else if successful}
	<Announcement title="Subscription Confirmed" message="Thank you for joining us!">
		<Paragraph
			>You are invited to join our community at the&nbsp; <Link href={PUBLIC_FORUM_URL}
				>Thriving Individuals Forums</Link
			>.</Paragraph
		>
	</Announcement>
{:else}
	<Announcement
		title="Something went wrong"
		message="You might already be verified, or the verification link might be invalid. Please try again later."
	/>
{/if}
