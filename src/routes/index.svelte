<script context="module">
  export async function preload() {
    const res = await this.fetch("/projects.json");
    const json = await res.json();
    const projects = json.data;
    return { projects };
  }
</script>

<script>
  import Card from "../components/Card";

  export let projects;
</script>

<style>
  div {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    vertical-align: center;
  }

  .github {
    text-align: center;
    vertical-align: center;
  }

  .github img {
    width: 2rem;
  }
</style>

<svelte:head>
  <title>Kyle Rosenberg</title>
</svelte:head>

<div>
  {#each projects as project}
    <Card>
      {#if project.url != null}
        <h2>
          <a href={project.url} target="_blank">{project.name}</a>
          {#if project.github != null}
            <a href={project.github} target="_blank" class="github">
              <img src="/img/github-black.svg" alt="Github" />
            </a>
          {/if}
        </h2>
      {:else}
        <h2>{project.name}</h2>
      {/if}
      {@html project.summary}
    </Card>
  {/each}
</div>
