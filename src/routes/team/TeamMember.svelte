<script lang="ts">
	import Header from "../../lib/Header.svelte";
	import Paragraph from "../../lib/Paragraph.svelte";

  export let photo: string;
  export let name: string;
  export let originalName: string | null = null;
  export let role: string;
  export let description: string;
</script>

<div class="flex flex-col items-center w-[33vw] xl:w-[25vw]">
  <img src={photo} alt={name} class="rounded-full w-32 h-32 mx-auto my-3" />
  <Header type="h3" className="mb-0">{name}</Header>
  {#if originalName}
    <Paragraph type="small" className="mt-px">({originalName})</Paragraph>
  {/if}
  <Paragraph type="small" className="mt-0.5">{role}</Paragraph>
  <Paragraph className="text-center">{description}</Paragraph>
</div>