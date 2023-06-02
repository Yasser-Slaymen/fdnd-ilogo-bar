<script lang="ts">
  export let stories: { title: string, id: number }[] = [];

</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><img src="/assets/images/logo-ilojo-bar.webp"
        alt="Logo Ilojo Bar"
        class="header__link__image"
        width="128"
        height="45"
        loading="lazy"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Stories
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              {#each stories as story}
              <li>
                <a href={`/stories/${story.id}`} class="dropdown-item" data-sveltekit-reload>
                  {story.title}
                </a>
              </li>
            {/each}
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about">About</a>
          </li>

          
          <li class="nav-item">
            <a class="nav-link" href="storypage">Help</a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link" href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  <style>
   /* Style the dropdown menu */
.dropdown-menu {
  background-color: black; /* Set the background color */
  border: none; /* Remove the border */
}

/* Style the dropdown items */
.dropdown-item {
  color: #fff; /* Set the text color */
}

/* Style the dropdown item when it's hovered */
.dropdown-item:hover {
  background-color: #555; /* Set the background color */
}

  </style>
  
  
 