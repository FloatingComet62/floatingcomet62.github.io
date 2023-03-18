<script lang="ts">
  export let name: string;
  export let icon: string;
  export let description: string;
</script>

<a href={`/projects/${name}`} class="prj">
  <img src={`/Projects/${icon}`} alt={name} width="120" height="120" />
  <div class="name">{name}</div>
  <div class="desc">{description}</div>
</a>

<style>
  .prj {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    background-color: #202020;
    color: #ffffff;
    width: 200px;

    padding: 1rem;
  }
  .name {
    font-size: 1.8rem;
  }
  .desc {
    opacity: 80%;
  }
</style>
