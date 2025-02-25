<template>
  <div class="home-container">
    <button class="theme-toggle" @click="toggleTheme">
      {{ isDarkMode ? "🌞" : "🌑" }}
    </button>

    <h1 class="introdution">Hello Manualist!</h1>
    <p class="introdution">
      Create documentation for your software in a simple way using
      <b>markdown</b> files!
    </p>
    
    <div class="buttons">
      <router-link to="/docs/introdution" class="btn primary">
        Documentation
      </router-link>
      <a
        href="https://github.com/devpaulorcc/manualist"
        target="_blank"
        class="btn secondary"
      >
        Source Code
      </a>
    </div>

    <div class="extra-content">
      <h2>📌 Customization</h2>
      <ul>
        <li>🚀 Customize this template to make your documentation your own, change the content, style and add markdown files to "public/docs" to have your dynamic route starting from "docs".</li>
      </ul>
      
      <div class="image-container">
        <p>In the project, <b>add the markdown file to "public/docs"</b> and its content following the file syntax. All tags in the file will be displayed on screen.</p>
        <img src="/usageExample.png" alt="Usage example with code">
        <p>In your project's URL, regardless of the domain, follow the path "docs" and the same name as the markdown file that I added previously, <b>for example in the image "/docs/example"</b>, it is important to note that the ".md" extension is not necessary "</p>
        <img src="/usageExampleUrl.png" alt="Usage example with url">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      isDarkMode: false,
    };
  },
  created() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      this.isDarkMode = savedTheme === "dark";
      document.body.classList.toggle("dark-mode", this.isDarkMode);
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle("dark-mode", this.isDarkMode);
      localStorage.setItem("theme", this.isDarkMode ? "dark" : "light");
    },
  },
};
</script>

<style>
.home-container {
  text-align: center;
  padding: 100px 20px;
  max-width: 800px;
  margin: auto;
}

.theme-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 15px;
  border: none;
  background: #ddd;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
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

.extra-content {
  margin-top: 40px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
}

.image-container img {
  max-width: 100%;
  height: auto;
  max-height: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

body.dark-mode {
  background-color: #121212;
  color: white;
}

body.dark-mode h1 {
  color: white;
}

body.dark-mode p {
  color: #bbb;
}

body.dark-mode .btn.secondary {
  background-color: transparent;
  color: white;
  border-color: white;
}

body.dark-mode .theme-toggle {
  background: #444;
  color: white;
}

body.dark-mode .extra-content {
  background-color: #1e1e1e;
  color: white;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
}

body.dark-mode .extra-content h2 {
  color: #fff;
}

body.dark-mode .extra-content p,
body.dark-mode .extra-content ul li {
  color: #ccc;
}

/* Ajustes de imagem no modo escuro */
body.dark-mode .image-container img {
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.2);
}
</style>
