<script lang="ts">
  import Project from "../lib/Project.svelte";
  import { langs, projects } from "../stuff";
</script>

<main id="body">
  <main class="info">
    <header>Aargh Rai</header>
    Aargh Rai is a programmer from India who has been in the field since 2017
  </main>
  <section class="langs">
    <header>Languages I have experienced</header>
    <ul>
      {#each langs as lang}
        <li style={`background-color: ${lang.color}`}>
          <a href={lang.link}>{lang.name}</a>
        </li>
      {/each}
    </ul>
  </section>
  <section class="projects">
    <header>My Projects</header>
    <ul>
      {#each projects as prj}
        <Project {...prj} />
      {/each}
    </ul>
  </section>
</main>

<style>
  #body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    margin-top: 1rem;
    align-items: center;
  }
  main > main > header {
    font-size: 5rem;
  }
  main > * {
    text-align: center;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 5rem;
    margin-bottom: 2rem;
  }
  .langs {
    display: flex;
    flex-direction: column;
  }
  .langs > ul {
    list-style-type: none;
    display: flex;
    gap: 1rem;
  }
  .langs > ul > li {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .langs > ul > li:hover {
    cursor: pointer;
  }
  .langs > ul > li > a {
    color: #ffffff;
  }
  .langs > header {
    font-size: 2rem;
  }
  .projects > ul {
    display: grid;
    gap: 2rem;
    grid-template-columns: auto auto auto;
  }
  .projects > header {
    font-size: 2rem;
  }
</style>
