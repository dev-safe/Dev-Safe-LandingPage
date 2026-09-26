<script lang="ts">
	import favicon from '$lib/assets/DevSafe_logo.jpg';
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
	<link rel="icon" type="image/jpeg" href={favicon} />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</svelte:head>

{@render children()}
