<script>
    import Navbar from "../components/Navbar.svelte";
  
    const navItems = [
      { name: "Dashboard", link: "/" },
      { name: "Contacts", link: "/contacts" },
      { name: "Tasks", link: "/tasks" }
    ];
  </script>
  
  <Navbar items={navItems} />
  
  <h1>Dashboard</h1>
  <p>Bienvenido al CRM. Selecciona una opción del menú para empezar.</p>
  
  <style>
    h1 {
      color: #007acc;
    }
  </style>
  