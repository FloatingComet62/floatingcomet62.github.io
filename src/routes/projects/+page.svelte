<script lang="ts">
  import Project from "../../lib/Project.svelte";
  import { projects } from "../../stuff";
</script>

<main class="projects">
  <header>My Projects</header>
  <ul>
    {#each projects as prj}
      <Project {...prj} />
    {/each}
  </ul>
</main>

<style>
  .projects {
    margin-top: 2rem;
  }
  .projects > ul {
    text-align: center;
    display: grid;
    gap: 2rem;
    grid-template-columns: auto auto auto;
  }
  .projects > header {
    text-align: center;
    font-size: 5rem;
    margin-bottom: 1rem;
  }
</style>
