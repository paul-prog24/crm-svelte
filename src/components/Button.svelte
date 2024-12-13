<script>
    export let label = "Button";
    export let onClick = () => {};
  </script>
  
  <button on:click={onClick}>
    {label}
  </button>
  
  <style>
    button {
      padding: 0.5rem 1rem;
      border: none;
      background-color: #007acc;
      color: white;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
  