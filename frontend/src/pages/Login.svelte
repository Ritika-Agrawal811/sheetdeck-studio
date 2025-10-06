<script lang="ts">
  import Input from "../components/Input.svelte"
  import Button from "../components/Button.svelte"
  import { Fingerprint } from 'lucide-svelte';

  import { AuthenticateWithTouchID, IsMacOS } from '../../wailsjs/go/main/App';
  import { onMount } from "svelte";

  /* ----- Variables ------- */

  let email = '';
  let password = '';
  let isMacOS = false;

 onMount(async () => {
    isMacOS = await IsMacOS();
  });

  /* ----- Functions ------- */

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    alert('Login clicked!');
  }

  const handleTouchID = async() => {
    try {
      const success = await AuthenticateWithTouchID();
      
      if (success) {
        alert('Touch ID authentication successful! 🎉');
      } 
    } catch (err) {
       alert(`Error: ${err}`)
    } 
  }
</script>

<section class="login-page">
    <div class="circle bottom-left large orange"></div>
    <div class="circle middle-left small gray"></div>
    <div class="circle middle-right large gray"></div>
    <div class="circle top-right small orange"></div>
    <div class="container">
      <h2>Login</h2>
      <form on:submit|preventDefault={handleLogin}>
        <Input type="email" placeholder="example@gmail.com" label="Email" id="email" bind:value={email} />   
        <Input type="password" bind:value={email} label="Password" id="password" />   
        <Button>Login</Button>
        
        {#if isMacOS}
          <div class="divider"><span>OR</span></div>
          <Button type="button" variant="outline" icon={true} on:click={handleTouchID}>
            <Fingerprint size={30}/>
            Use Fingerprint
          </Button>
        {/if}
       
      </form>
    </div>
</section>


<style>

.login-page {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 10em);
}

.circle {
  position: absolute;
  border-radius: 100%;
}

.circle.orange {
  background-color: rgb(242, 169, 35);
}

.circle.gray {
  background-color: #e6e7eb;
}

.circle.small {
  width: clamp(50px, 15vw, 100px);
  height: clamp(50px, 15vw, 100px);
}

.circle.large {
  width: clamp(150px, 25vw, 250px);
  height: clamp(150px, 25vw, 250px);
}

.circle.bottom-left {
  left: 0;
  bottom: 0;
  transform: translateX(-50%);
}

.circle.middle-left{
  left: 0;
  top: 55%;
  transform: translate(-50%, -55%);
}

.circle.top-right{
  right: 0;
  top: 0;
  transform: translateX(50%);
}

.circle.middle-right{
  right: 0;
  top: 50%;
  transform: translate(50%, -50%);
}

/* ------- form container ------- */

.container {
    width: min(90%, 400px);
}

h2 {
    font-size: 1.75rem;
    margin-bottom: 2.5em;
    text-align: center
}

.divider {
  position: relative;
  text-align: center;
  margin: 2em 0;
}

.divider span {
  padding: 0 1em;
  background-color: #fff;
  color: #7d7d7d;
}

.divider::before{
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #7d7d7d;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}
</style>
