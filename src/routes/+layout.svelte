<script>
  import "../app.css";

  import LoaderOverlay from "$lib/components/loader_overlay.svelte";
</script>

<svelte:head>
  <title>SVELTEKIT</title>
  <meta name="description" content="SVELTEKIT" />
</svelte:head>

<slot />

<LoaderOverlay>
  <span>Loading</span>
</LoaderOverlay>
