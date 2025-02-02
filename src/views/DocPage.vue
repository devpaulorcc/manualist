<template>
  <div class="doc-container">
    <button class="theme-toggle" @click="toggleTheme">
      {{ isDarkMode ? "🌞" : "🌑" }}
    </button>

    <h1>{{ title }}</h1>
    <div v-html="formattedContent" class="markdown-body"></div>
  </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
import MarkdownIt from "markdown-it";
import Prism from "prismjs";

export default {
  setup() {
    const route = useRoute();
    const title = ref("");
    const content = ref("");
    const md = new MarkdownIt({
      html: true,
      linkify: false,
      typographer: true,
    });

    const isDarkMode = ref(false);

    const loadMarkdown = async () => {
      try {
        const response = await fetch(`/docs/${route.params.slug}.md`);
        const text = await response.text();

        const processedText = text.replace(/(\b[\w-]+)\.md\b/g, "$1");

        content.value = md.render(processedText);
        Prism.highlightAll();
      } catch (error) {
        content.value = "<p>Error loading the document.</p>";
      }
    };

    const formattedContent = computed(() => {
      return content.value.replace(
        /<a href="([^"]+)\.md">([^<]+)\.md<\/a>/g,
        (match, href, text) => {
          return `<a href="${href}.md">${text}</a>`;
        }
      );
    });

    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value;
      document.body.classList.toggle("dark-mode", isDarkMode.value);
      localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
    };

    onMounted(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        isDarkMode.value = savedTheme === "dark";
        document.body.classList.toggle("dark-mode", isDarkMode.value);
      }

      loadMarkdown();
    });

    watch(() => route.params.slug, loadMarkdown);

    return { title, content, formattedContent, isDarkMode, toggleTheme };
  },
};
</script>

<style>
.doc-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  line-height: 1.6;
  text-align: start;
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

.markdown-body {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow-wrap: break-word;
}

.markdown-body pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-x: auto;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 5px;
}

body.dark-mode {
  background-color: #121212;
  color: white;
}

body.dark-mode h1 {
  color: white;
}

body.dark-mode .markdown-body {
  background-color: #1e1e1e;
  color: #ccc;
}

body.dark-mode .markdown-body pre {
  background-color: #2d2d2d;
}

body.dark-mode .theme-toggle {
  background: #444;
  color: white;
}


@media (max-width: 600px) {
  .doc-container {
    padding: 10px;
    max-width: 100%;
  }
  .markdown-body {
    padding: 20px;
  }
}
</style>
