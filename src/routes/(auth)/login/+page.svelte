<script lang="ts">
  import { enhance, type SubmitFunction } from "$app/forms";
  import clsx from "clsx";
  import type { ActionData } from "./$types";

  export let form: ActionData;

  let isSubmitting = false;
  const onSubmit: SubmitFunction = () => {
    isSubmitting = true;

    return async ({ update }) => {
      isSubmitting = false;
      await update();
    };
  };
</script>

<div class="h-screen w-screen">
  <div class="flex h-full w-full items-center justify-center">
    <div class="rounded-md border bg-white px-5 py-10">
      <form method="POST" use:enhance={onSubmit}>
        <fieldset class="flex flex-col gap-y-2.5" disabled={isSubmitting}>
          <div>
            <label for="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Type here"
              required
              class={clsx("input-bordered input w-full max-w-xs")}
              value="y.miwa+its@gtn.co.jp"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label for="password">Password</label>
            <input
              id="password"
              name="password"
              type="text"
              placeholder="Type here"
              required
              class={clsx("input-bordered input w-full max-w-xs")}
              value="11111111"
              disabled={isSubmitting}
            />
          </div>

          {#if form?.invalid}
            <p class="error">Username and password is required.</p>
          {/if}

          {#if form?.credentials}
            <p class="error">You have entered the wrong credentials.</p>
          {/if}

          <button class="btn" disabled={isSubmitting}>Login</button>
        </fieldset>
      </form>
    </div>
  </div>
</div>
