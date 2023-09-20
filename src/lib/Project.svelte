<script lang="ts">
  import { onMount } from "svelte";

  export let name: string;
  export let icon: string;
  export let description: string;
  export let repo: string;
  export let color: string;

  let prj: any;

  onMount(() => {
    prj.style.setProperty("--prj-color", color);
  });
</script>

<main class="prj" bind:this={prj}>
  <section>
    <img src={`/Projects/${icon}`} alt={name} width="300vw" height="300vh" />
    <main>
      <div class="name">{name}</div>
      <div class="desc">{description}</div>
    </main>
  </section>
</main>

<style>
  .prj {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: linear-gradient(90deg, var(--prj-color), #050505);
    color: #ffffff;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
  }
  .prj > section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50vh;
    border-color: #fff;
    border-width: 1rem;
    border-radius: 1rem;
  }
  .name {
    font-size: 1.8rem;
  }
  .desc {
    opacity: 80%;
  }
</style>
