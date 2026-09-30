<script lang="ts">
	import '../app.css';
	import { localeConfig } from '$lib/config/site';
	import { currentLang } from '$lib/data/content';

	let { children } = $props();

	// The server sets <html lang>; keep it in sync on client-side FR/EN navigation.
	$effect(() => {
		document.documentElement.lang = localeConfig[currentLang()].htmlLang;
	});
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="icon" type="image/png" sizes="64x64" href="/favicon.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</svelte:head>

{@render children()}
