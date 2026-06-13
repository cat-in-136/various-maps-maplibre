<script lang="ts">
	import { onMount } from 'svelte';
	import type { Component } from 'svelte';

	let MapComponent: Component | undefined;

	onMount(async () => {
		const { default: Map } = await import('./Map.svelte');
		MapComponent = Map;
	});
</script>

<svelte:head>
	<title>Various Maps Vector Edition</title>
</svelte:head>

{#if MapComponent}
	<svelte:component this={MapComponent} />
{/if}

<style>
</style>
