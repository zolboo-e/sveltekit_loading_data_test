<script lang="ts">
  import { enhance } from "$app/forms";
  import { queryParam } from "sveltekit-search-params";
  import type { PageData } from "./$types";

  export let data: PageData;

  const keywords = queryParam("keywords");

  import { cubicIn, cubicOut } from "svelte/easing";
  import { fly } from "svelte/transition";

  const duration = 300;
  const delay = duration + 100;
  const y = 10;

  const transitionIn = { easing: cubicOut, y, duration, delay };
  const transitionOut = { easing: cubicIn, y: -y, duration };
</script>

<h1>USERS</h1>
<form method="POST" use:enhance data-sveltekit-keepfocus>
  <input aria-label="keywords" id="keywords" name="keywords" value={$keywords} />
</form>

{#key data.searchParams}
  <table in:fly={transitionIn} out:fly={transitionOut}>
    {#each data.employees as employee}
      <tr>
        <td>{employee.name}</td>
        <td>{employee.current_contract_status}</td>
      </tr>
    {/each}
  </table>
{/key}
