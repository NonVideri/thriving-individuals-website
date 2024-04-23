<script lang="ts">
	import Paragraph from '../lib/Paragraph.svelte';
	import { alert } from '../lib/alert.store';
	import { cn } from '../lib/utils';

	let dialog: HTMLDialogElement;

	alert.subscribe((value) => {
		if (value && dialog) {
			dialog.show();
		}
		if (!value && dialog) {
			dialog.close();
		}
	});

	const ALERT_STYLES = {
		error: 'bg-alert-error',
		success: 'bg-alert-success',
		info: 'bg-alert-info',
		warning: 'bg-alert-warning',
	};
</script>

<dialog
	class={cn(
		'fixed bottom-[7vh] left-[5vw] z-10 m-0 px-8 py-2 rounded-md cursor-pointer text-white',
		ALERT_STYLES[$alert?.type ?? 'error']
	)}
	bind:this={dialog}
	on:click={() => alert.set(null)}
	on:keydown={(e) => e.key === 'Escape' && alert.set(null)}>
	<Paragraph type="small">
		{$alert?.message}
	</Paragraph>
</dialog>
