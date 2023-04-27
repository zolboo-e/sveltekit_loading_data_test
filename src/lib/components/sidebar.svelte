<script lang="ts">
  import clsx from "clsx";

  //
  import { navItems as items } from "./nav_items";
</script>

<div class={clsx("row-span-2 hidden", "md:block")}>
  <ul class="h-full border-r">
    {#each items as { href, icon, text }, index}
      <li>
        <a {href}>
          <div class={clsx("aspect-square", "hover:bg-neutral-focus", index === 0 && "bg-neutral")}>
            <div class="flex h-full flex-col items-center justify-center">
              <svelte:component this={icon} />
              {text}
            </div>
          </div>
        </a>
      </li>
    {/each}
  </ul>
</div>
