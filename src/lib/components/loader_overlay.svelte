<script lang="ts">
  import clsx from "clsx";

  import { navigating } from "$app/stores";
  import SpinnerIcon from "$lib/assets/icons/spinner_icon.svelte";
</script>

<div class={clsx("visible transition-all delay-75", !$navigating && "invisible opacity-0")}>
  <div class="toast-end toast">
    <div class="alert">
      <div class="animate-spin">
        <SpinnerIcon />
      </div>
      <slot />
    </div>
  </div>
</div>
