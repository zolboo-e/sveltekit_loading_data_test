<script>
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";

  onMount(() => themeChange(false));
</script>

<input
  aria-label="theme-toggle"
  type="checkbox"
  class="toggle"
  id="theme-toggle"
  data-toggle-theme="dark,light"
  data-act-class="ACTIVECLASS"
/>
