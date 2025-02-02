<template>
  <div class="home-container">
    <h1 class="introdution">Hello Manualist!</h1>
    <p class="introdution">
      Create documentation for your software in a simple way using
      <b>markdown</b> files!
    </p>
    <div class="buttons">
      <router-link to="/docs/introdution" class="btn primary"
        >Documentation</router-link
      >
      <a
        href="https://github.com/devpaulorcc/manualist"
        target="_blank"
        class="btn secondary"
        >Source Code</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
.home-container {
  text-align: center;
  padding: 100px 20px;
  max-width: 800px;
  margin: auto;
}

h1 {
  font-size: 3rem;
  font-weight: bold;
  color: #333;
}

p {
  font-size: 1.2rem;
  color: #666;
}

.buttons {
  margin-top: 20px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
  margin: 5px;
}

.btn.primary {
  background-color: #42b983;
  color: white;
}

.btn.secondary {
  border: 2px solid #333;
  color: #333;
  background-color: white;
}
</style>
