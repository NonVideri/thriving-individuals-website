<script lang="ts">
	import Paragraph from '../lib/Paragraph.svelte';
	import { alert } from '../lib/alert.store';

	let dialog: HTMLDialogElement;

	alert.subscribe((value) => {
		if (value) {
			dialog.show();
		}
		if (!value) {
			dialog.close();
		}
	});
</script>

<dialog
	class="fixed bg-red-600 text-white top-[1.875rem] left-[1.25rem]"
	bind:this={dialog}
	on:close={() => alert.set(null)}
>
	<Paragraph>
		{$alert?.message}
	</Paragraph>
</dialog>
