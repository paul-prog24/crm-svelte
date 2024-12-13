<script>
    import { onMount } from 'svelte';
  
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    let newContact = { id: null, name: '', email: '', phone: '' };
    let isEditing = false;
  
    const saveContacts = () => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    };
  
    const addContact = () => {
      if (newContact.name && newContact.email) {
        if (isEditing) {
          contacts = contacts.map(contact =>
            contact.id === newContact.id ? newContact : contact
          );
        } else {
          newContact.id = Date.now();
          contacts = [...contacts, newContact];
        }
        newContact = { id: null, name: '', email: '', phone: '' };
        isEditing = false;
        saveContacts();
      }
    };
  
    const editContact = (contact) => {
      newContact = { ...contact };
      isEditing = true;
    };
  
    const deleteContact = (id) => {
      contacts = contacts.filter(contact => contact.id !== id);
      saveContacts();
    };
  </script>
  
  <h1>Contacts</h1>
  
  <form on:submit|preventDefault={addContact}>
    <input type="text" placeholder="Name" bind:value={newContact.name} required />
    <input type="email" placeholder="Email" bind:value={newContact.email} required />
    <input type="text" placeholder="Phone" bind:value={newContact.phone} />
    <button type="submit">{isEditing ? 'Update' : 'Add'} Contact</button>
  </form>
  
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each contacts as contact}
        <tr>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
          <td>
            <button on:click={() => editContact(contact)}>Edit</button>
            <button on:click={() => deleteContact(contact.id)}>Delete</button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  
  <style>
    form {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 0.5rem;
      text-align: left;
    }
  </style>
  
  