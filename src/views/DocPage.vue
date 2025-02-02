<template>
  <div class="doc-container">
    <h1>{{ title }}</h1>
    <div v-html="formattedContent" class="markdown-body"></div>
  </div>
</template>

<script>
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';

export default {
  setup() {
    const route = useRoute();
    const title = ref('');
    const content = ref('');
    const md = new MarkdownIt({
      html: true,
      linkify: false,
      typographer: true
    });

    const loadMarkdown = async () => {
      try {
        const response = await fetch(`/docs/${route.params.slug}.md`);
        const text = await response.text();

        const processedText = text.replace(/(\b[\w-]+)\.md\b/g, '$1');

        content.value = md.render(processedText);
        Prism.highlightAll();
      } catch (error) {
        content.value = '<p>Error loading the document.</p>';
      }
    };

    const formattedContent = computed(() => {
      return content.value.replace(/<a href="([^"]+)\.md">([^<]+)\.md<\/a>/g, (match, href, text) => {
        return `<a href="${href}.md">${text}</a>`;
      });
    });

    onMounted(loadMarkdown);
    watch(() => route.params.slug, loadMarkdown);

    return { title, content, formattedContent };
  }
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
