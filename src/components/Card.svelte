<script>
    export let title;
    export let description;
  </script>
  
  <div class="card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
  
  <style>
    .card {
      border: 1px solid #ddd;
      padding: 1rem;
      border-radius: 8px;
      margin: 1rem 0;
    }
    .card h3 {
      margin: 0;
      color: #007acc;
    }
  </style>
  