<script lang="ts">
	//import Header from './Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

<style>
</style>
