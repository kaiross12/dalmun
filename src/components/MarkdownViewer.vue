<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <div class="modal-header">
        <h2 v-if="title">{{ title }}</h2>
        <button class="close-button" @click="close">&times;</button>
      </div>
      <div class="modal-body" v-html="parsedContent"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { marked } from 'marked';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  markdownContent: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:isOpen', 'close']);

const parsedContent = computed(() => {
  return marked(props.markdownContent);
});

const close = () => {
  emit('update:isOpen', false);
  emit('close');
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding: 20px;
  will-change: backdrop-filter;
}

.modal-content {
  background: #fff;
  border-radius: 12px;
  width: 100%;
  max-width: 800px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  color: #333;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #eaeaea;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 10;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.close-button {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 0;
  line-height: 1;
}

.close-button:hover {
  color: #000;
}

.modal-body {
  padding: 24px;
  line-height: 1.6;
}

.modal-body :deep(h1), .modal-body :deep(h2), .modal-body :deep(h3) {
  margin-top: 1em;
  margin-bottom: 0.5em;
  color: #222;
}

.modal-body :deep(p) {
  margin-bottom: 1em;
}

.modal-body :deep(ul) {
  margin-bottom: 1em;
  padding-left: 20px;
}
</style>
