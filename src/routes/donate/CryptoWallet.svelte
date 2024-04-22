<script lang="ts">
	import { qrcode } from 'svelte-qrcode-action';

	import Header from '../../lib/Header.svelte';
	import Paragraph from '../../lib/Paragraph.svelte';
	import { twMerge } from 'tailwind-merge';
	import { SECTION_CLASSES } from '../../lib/types';

	export let name: string;
	export let address: string;
	export let logo: string;
</script>

<div class={twMerge(SECTION_CLASSES, "my-8")}>
	<Header type="h4">{name}</Header>
	<Paragraph>{address}</Paragraph>
	<div use:qrcode={{ data: address, image: logo }} />
</div>
