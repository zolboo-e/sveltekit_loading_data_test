<script lang="ts">
  import { enhance } from "$app/forms";
  import { queryParam } from "sveltekit-search-params";
  import type { PageData } from "./$types";

  export let data: PageData;

  const keywords = queryParam("keywords");
</script>

<h1>USERS</h1>
<form method="POST" use:enhance data-sveltekit-keepfocus>
  <input aria-label="keywords" id="keywords" name="keywords" value={$keywords} />
</form>

<table>
  {#each data.employees as employee}
    <tr>
      <td>{employee.name}</td>
      <td>{employee.current_contract_status}</td>
    </tr>
  {/each}
</table>
