<script lang="ts">
  //
  import clsx from "clsx";
  //
  import Header from "./header.svelte";
  import Bottombar from "./bottombar.svelte";
  import Sidebar from "./sidebar.svelte";
  import Breadcrumbs from "./breadcrumbs.svelte";
</script>

<div
  class={clsx(
    "grid h-screen w-screen grid-rows-[60px,1fr,60px]",
    "md:grid-cols-[80px,1fr] md:grid-rows-[60px,1fr]"
  )}
>
  <Sidebar />
  <Header />
  <div class="overflow-auto">
    <div class="container mx-auto">
      <Breadcrumbs />
      <slot />
    </div>
  </div>
  <Bottombar />
</div>
