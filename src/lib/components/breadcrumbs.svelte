<script lang="ts">
  import { page } from "$app/stores";

  $: segments =
    $page.route.id?.split("/").map((segment) => {
      return {
        key: segment === "" ? "Home" : segment,
        href: segment === "" ? "/" : segment,
        text: segment === "" ? "Home" : segment,
      };
    }) ?? [];
</script>

<div class="breadcrumbs text-sm">
  <ul>
    {#each segments as { href, text }, index}
      {#if index !== segments.length - 1}
        <li>
          <a {href}>{text}</a>
        </li>
      {:else}
        <li>{text}</li>
      {/if}
    {/each}
  </ul>
</div>
