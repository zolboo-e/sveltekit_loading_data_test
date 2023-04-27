<script lang="ts">
  import MainLayout from "$lib/components/main_layout.svelte";

  export let data;

  import { cubicIn, cubicOut } from "svelte/easing";
  import { fly } from "svelte/transition";

  const duration = 300;
  const delay = duration + 100;
  const y = 10;

  const transitionIn = { easing: cubicOut, y, duration, delay };
  const transitionOut = { easing: cubicIn, y: -y, duration };
</script>

<MainLayout>
  {#key data.pathname}
    <div in:fly={transitionIn} out:fly={transitionOut}>
      <slot />
    </div>
  {/key}
</MainLayout>
