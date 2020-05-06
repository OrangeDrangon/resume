<style>
  header {
    display: flex;
    flex-flow: row;
    align-items: center;
    background-color: #575757;
  }

  img {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    margin: 1rem;
  }

  h1 {
    font-size: 2rem;
    margin: 0;
    color: white;
  }

  .fill {
    flex: 1 0 0;
  }

  a {
    margin-right: 1rem;
  }

  a img {
    height: 3rem;
    width: 3rem;
    margin: 0;
  }

  @media only screen and (max-width: 425px) {
    .last {
      display: none;
    }
  }
</style>

<header>
  <img src="/img/neptune.jpg" alt="Neptune" />
  <h1><span class="first">Kyle</span> <span class="last">Rosenberg</span></h1>
  <div class="fill" />
  <a href="https://github.com/OrangeDrangon">
    <img src="/img/github.svg" alt="Github" />
  </a>
</header>
