<script lang="ts">
	import {
		getModalStore,
		initializeStores,
		Modal,
		type ModalComponent,
	} from '@skeletonlabs/skeleton';
	import '../app.pcss';
	import SubscribeForm from '$lib/SubscribeForm.svelte';
	import Alert from './Alert.svelte';
	import NavBar from './NavBar.svelte';
	import { onMount } from 'svelte';

	const modalComponent: ModalComponent = { ref: SubscribeForm };

	initializeStores();

	const modalStore = getModalStore();

	onMount(() => {
		if (!localStorage.getItem('subscribed')) {
			modalStore.trigger({
				type: 'component',
				component: modalComponent,
			});
		}
	});
</script>

<NavBar />
<Alert />
<Modal />
<div
	class="flex flex-col items-center w-full mt-12 sm:mt-[50px] md:mt-[52px] lg:mt-[60px] xl:mt-20"
>
	<slot />
</div>
<footer class="flex flex-col items-center w-full py-4 md:py-6 xl:py-8 text-sm bg-primary-600">
	<p>© 2023 Thriving Individuals Foundation</p>
	<p>All rights reserved.</p>
</footer>
