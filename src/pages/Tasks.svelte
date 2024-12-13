<script>
    import { onMount } from 'svelte';
  
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    let newTask = { id: null, title: '', dueDate: '', contactId: '' };
    let isEditing = false;
  
    const saveTasks = () => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };
  
    const addTask = () => {
      if (newTask.title && newTask.dueDate) {
        if (isEditing) {
          tasks = tasks.map(task =>
            task.id === newTask.id ? newTask : task
          );
        } else {
          newTask.id = Date.now();
          tasks = [...tasks, newTask];
        }
        newTask = { id: null, title: '', dueDate: '', contactId: '' };
        isEditing = false;
        saveTasks();
      }
    };
  
    const editTask = (task) => {
      newTask = { ...task };
      isEditing = true;
    };
  
    const deleteTask = (id) => {
      tasks = tasks.filter(task => task.id !== id);
      saveTasks();
    };
  </script>
  
  <h1>Tasks</h1>
  
  <form on:submit|preventDefault={addTask}>
    <input type="text" placeholder="Task Title" bind:value={newTask.title} required />
    <input type="date" bind:value={newTask.dueDate} required />
    <select bind:value={newTask.contactId}>
      <option value="">Select Contact</option>
      {#each contacts as contact}
        <option value={contact.id}>{contact.name}</option>
      {/each}
    </select>
    <button type="submit">{isEditing ? 'Update' : 'Add'} Task</button>
  </form>
  
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Due Date</th>
        <th>Contact</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each tasks as task}
        <tr>
          <td>{task.title}</td>
          <td>{task.dueDate}</td>
          <td>{contacts.find(c => c.id === task.contactId)?.name || 'N/A'}</td>
          <td>
            <button on:click={() => editTask(task)}>Edit</button>
            <button on:click={() => deleteTask(task.id)}>Delete</button>
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
  
  