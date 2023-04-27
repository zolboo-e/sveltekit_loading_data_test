<script lang="ts">
  import { page } from "$app/stores";
  import clsx from "clsx";
  import ThemeChanger from "./theme_changer.svelte";
</script>

<div class="flex items-center border-b">
  <div class="container mx-auto">
    <div class="flex justify-between">
      <ThemeChanger />
      {$page.data.user.email}
      <form action={`/logout`} method="POST">
        <button type="submit">Log out</button>
      </form>
    </div>
  </div>
</div>
