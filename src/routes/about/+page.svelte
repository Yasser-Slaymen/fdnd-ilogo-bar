<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>
    <section class="titlestory">
      {#each data.stories as story}
      <a data-sveltekit-reload href="/stories/{story.id}" class="nav-link">{story.title}</a>
      {/each}
    </section>
    
  <style>
    .titlestory{
      height: 90vh;
      margin: 3em;
    }
    /* .parallax{
      height: 5vh;
      width: 100vw;
      background-color: blue;
    } */
  </style>








<!-- <script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;

  </script>

    <section>
        {#each data.stories as story}
           <h1> {story.title}</h1>      
        {/each}
    </section> -->
