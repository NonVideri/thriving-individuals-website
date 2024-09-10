<script lang="ts">
	import type { SubmitFunction } from '@sveltejs/kit';
	import { enhance } from '$app/forms';

	import { setAlert } from './alert.store';
	import Paragraph from './Paragraph.svelte';
	import Input from './Input.svelte';
	import Link from './Link.svelte';

	const handleSubmit: SubmitFunction = ({ formData, cancel }) => {
		if (!formData.get('accepted')) {
			setAlert('Please accept the terms & conditions', 'warning');
			cancel();
			return;
		}

		return ({ result, update }) => {
			if (result.type === 'success') {
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
</script>

<form
	class="flex flex-col space-y-8 w-3/5 max-w-md my-10"
	method="POST"
	action="?/subscribe"
	use:enhance={handleSubmit}
>
	<Input type="text" name="name" placeholder="Name *" required />
	<Input type="email" name="email" placeholder="Email *" required />

	<div class="checkbox-container">
		<Paragraph>
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
</form>
<Paragraph type="small">
	We only send occasional newsletters with the most important updates. We will never spam you.
</Paragraph>
