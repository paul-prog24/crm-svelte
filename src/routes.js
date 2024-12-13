import Dashboard from './pages/Dashboard.svelte';
import Contacts from './pages/Contacts.svelte';
import Tasks from './pages/Tasks.svelte';

export const routes = {
  '/': Dashboard,
  '/contacts': Contacts,
  '/tasks': Tasks,
};
