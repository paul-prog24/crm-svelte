<script>
    export let items = [];
  </script>
  
  <nav>
    <ul>
      {#each items as item}
        <li><a href={item.link}>{item.name}</a></li>
      {/each}
    </ul>
  </nav>
  
  <style>
    nav ul {
      display: flex;
      gap: 1rem;
      list-style: none;
    }
    nav ul li a {
      text-decoration: none;
      color: #007acc;
      font-weight: bold;
    }
  </style>
  