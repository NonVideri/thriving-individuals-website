<script lang="ts">
	import type { SubmitFunction } from '@sveltejs/kit';
	import { enhance } from '$app/forms';

	import { setAlert } from './alert.store';
	import Paragraph from './Paragraph.svelte';
	import Input from './Input.svelte';
	import Link from './Link.svelte';
	import Header from './Header.svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	const handleSubmit: SubmitFunction = ({ formData, cancel }) => {
		if (!formData.get('accepted')) {
			setAlert('Please accept the terms & conditions', 'warning');
			cancel();
			return;
		}

		return ({ result, update }) => {
			if (result.type === 'success') {
				localStorage.setItem('subscribed', 'true');
				modalStore.close();
				setAlert('Almost there! Please check your email to confirm the subscription.', 'success');
				return update();
			}

			if (result.type === 'failure') {
				setAlert(
					`An error occurred${
						result.data ? `: ${result.data.message}` : '.'
					} Please try again later.`
				);
				cancel();
			}
		};
	};

	const handleClose = () => {
		modalStore.close();
		localStorage.setItem('subscribed', 'true');
	};
</script>

<form
	class="absolute flex flex-col space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8 pt-8 pb-10 px-32 max-w-2xl rounded-xl bg-primary-600"
	method="POST"
	action="?/subscribe"
	use:enhance={handleSubmit}
>
	<button
		type="button"
		class="absolute top-2 right-5 text-3xl text-black cursor-pointer"
		on:click={handleClose}
	>
		&times;
	</button>
	<Header type="h4" class="self-center">Join our elite mailing list</Header>
	<Input type="text" name="name" placeholder="Name *" required />
	<Input type="email" name="email" placeholder="Email *" required />

	<div class="checkbox-container">
		<Paragraph class="my-0 py-0">
			<label class="flex items-center">
				<input type="checkbox" name="accepted" class="w-5 h-5 mr-4" />
				Accept&nbsp;<Link href="/terms-and-conditions">Terms & Conditions</Link>
			</label>
		</Paragraph>
	</div>

	<button
		type="submit"
		class="px-6 py-4 text-lg border-none rounded-md bg-surface-800 text-white cursor-pointer font-bold hover:bg-surface-700 transition-all duration-200"
	>
		Subscribe
	</button>
	<Paragraph type="small">
		We only send occasional emails with the most important updates. We will never spam you.
	</Paragraph>
</form>
