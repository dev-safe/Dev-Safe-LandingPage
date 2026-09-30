<script lang="ts">
	import '@fontsource-variable/inter';
	import '@fontsource-variable/jetbrains-mono';
	import '@fontsource/ibm-plex-serif/400.css';
	import '@fontsource/ibm-plex-serif/500.css';
	import '@fontsource/ibm-plex-serif/500-italic.css';
	import interLatin from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url';
	import plexSerifLatin from '@fontsource/ibm-plex-serif/files/ibm-plex-serif-latin-500-normal.woff2?url';
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
	<!-- Body text and headings are above the fold on every page; fetch them with the HTML. -->
	<link rel="preload" href={interLatin} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={plexSerifLatin} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="icon" type="image/png" sizes="64x64" href="/favicon.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</svelte:head>

{@render children()}
