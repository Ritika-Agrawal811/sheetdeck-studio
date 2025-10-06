<script lang="ts">
  export let type: string = 'text';
  export let label: string = 'Name'
  export let id: string = "username"
  export let placeholder: string = '';
  export let value: string = '';  // Add this for two-way binding
</script>

<div class="input-container">
    <label for={id}>{label}</label>
    <input 
      {type} 
      {placeholder}
      {value}
      on:input
      on:focus
      on:blur
      {id}
    />

</div>

<style>

.input-container {
    margin: 2em 0;
}

label {
    font-size: 1.15rem;
    margin-bottom: 1rem;
    width: fit-content;
}

input {
    width: 100%;
    padding: 0.75rem 0.5rem;
    font-size: 1.15rem;
    outline: none;
    border: none;
    border-bottom: 2px solid #3b82f6;
    background: transparent;
}

input::placeholder {
    color: #64748b;
}

/* Focus styles */
input:focus {
    border-bottom-color: #f59e0b;
}

/* Disabled state */
input:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>