<script lang="ts">
  import clsx from "clsx";

  //
  import { navItems as items } from "./nav_items";
</script>

<div class={clsx("md:hidden")}>
  <ul class="flex h-full border-t">
    {#each items as { href, icon, text }, index}
      <li class="group flex-1">
        <a {href}>
          <div
            class={clsx(
              "h-full border-r group-last:border-r-0",
              "hover:bg-black/10",
              index === 0 && "bg-black/5"
            )}
          >
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
