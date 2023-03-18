<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<main>
  <img
    src={`/Projects/${data.icon}`}
    alt={data.name}
    width="400"
    height="400"
  />
  <div class="title">{data.name}</div>
  <div class="desc">{data.description}</div>
  <div class="stuff">
    <a href={data.repo}><img src="/icons/code.svg" alt="Code" /></a>
    <a href={data.repo + "/blob/master/LICENSE"}
      ><img src="/icons/license.svg" alt="License" /></a
    >
    <a href={data.repo + "#readme"}
      ><img src="/icons/readme.svg" alt="ReadMe" /></a
    >
    <a href={data.repo + "/releases"}
      ><img src="/icons/release.svg" alt="Release" /></a
    >
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    font-size: 5rem;
  }
  .desc {
    font-size: 2rem;
    opacity: 80%;
  }
  .stuff {
    margin-top: 3rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  .stuff > * {
    padding: 0.5rem;
    background-color: #5ad15a;
    display: grid;
    place-items: center;
  }
</style>
