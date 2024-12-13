<script>
	import Dashboard from "./pages/Dashboard.svelte";
	import Contacts from "./pages/Contacts.svelte";
	import Tasks from "./pages/Tasks.svelte";
  
	let currentPage = "dashboard";
  
	function navigate(page) {
	  currentPage = page;
	}
  </script>
  
  <nav>
	<button on:click={() => navigate("dashboard")}>Dashboard</button>
	<button on:click={() => navigate("contacts")}>Contacts</button>
	<button on:click={() => navigate("tasks")}>Tasks</button>
  </nav>
  
  {#if currentPage === "dashboard"}
	<Dashboard />
  {:else if currentPage === "contacts"}
	<Contacts />
  {:else if currentPage === "tasks"}
	<Tasks />
  {/if}
  