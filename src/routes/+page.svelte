<script lang="ts">
  import Socials from "$lib/Socials.svelte";
  import Project from "$lib/Project.svelte";
  import { projects } from "../stuff";
  import { onMount } from "svelte";

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let name: any;
  let msg = "Aargh Rai";
  let i = 0;

  let show_stuff = false;
  function afterAnimation() {
    show_stuff = true;
    pageScroll();
  }

  let x = 0;
  let scroller: number;
  function pageScroll() {
    if (x > window.outerHeight / 3.5 - 2) {
      clearTimeout(scroller);
      i = 0;
      return;
    }
    x++;
    window.scrollBy(0, 4);
    scroller = setTimeout(pageScroll, 1);
  }

  onMount(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      try {
        name.innerText = msg
          .split("")
          .map((_: string, index: number) => {
            if (index < iteration) {
              return msg[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= msg.length) {
          clearInterval(interval);
          afterAnimation();
        }
      } catch {}

      iteration += 1 / 5;
    }, 30);
  });

  let project = projects[i];
</script>

<main id="body">
  <div class="title" bind:this={name} />
</main>
{#if show_stuff}
  <main class="project">
    <Project {...project} />
  </main>
  <Socials />
{/if}

<style>
  #body {
    background-color: #050505;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    font-size: 15vw;
  }
  .project {
    margin-top: 10rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
