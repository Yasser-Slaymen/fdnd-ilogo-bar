<script lang="ts">
    export let stories: { title: string, id: number }[] = [];
    import 'bootstrap/dist/css/bootstrap.min.css';
  </script>
  
  <nav class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"><img src="/assets/images/logo-ilojo-barR.webp"
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
              <a class="nav-link" href="/">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Help</a>
            </li>
           
            <li class="nav-item">
              <a class="nav-link" href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <style>
        nav{
            padding: .2em 3em;
            /* padding: 0 4em 0 4em; */
            font-weight: 600;
            font-size: 1.2em;
        }
        .navbar-dark .navbar-nav .nav-link{
            color: #f8f9fa;           
            &:hover {
                color: #00090b;  
                /* color: #00C6FF;   */
            }
            
        }
 .navbar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.3); /* Adjust the alpha value to control transparency */
  backdrop-filter: blur(10px); /* Adjust the pixel value as desired */
  z-index: -1;
}
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
    
    
   