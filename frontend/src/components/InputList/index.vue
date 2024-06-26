<script setup lang="ts">
import { ref } from 'vue'

import { DraggableOptions } from '@/constant'

interface Props {
  placeholder?: string
  autofocus?: boolean
}

withDefaults(defineProps<Props>(), { autofocus: true })

const list = defineModel<string[]>({ default: [] })

const value = ref('')
const inputRef = ref()

const handleAdd = () => {
  if (!value.value) return
  list.value.push(value.value)
  value.value = ''
  inputRef.value?.focus()
}

const handleDel = (i: number) => list.value.splice(i, 1)
</script>

<template>
  <div class="input-list">
    <div v-draggable="[list, DraggableOptions]">
      <TransitionGroup name="list">
        <Card v-for="(l, i) in list" :key="l" class="list-item">
          <div>{{ l }}</div>
          <Button @click="handleDel(i)" type="text" size="small"> × </Button>
        </Card>
      </TransitionGroup>
    </div>

    <Input
      ref="inputRef"
      v-model="value"
      :placeholder="placeholder"
      @keydown.enter="handleAdd"
      type="text"
      auto-size
      :autofocus="autofocus"
      style="width: 100%"
    >
      <template #extra>
        <Button @click="handleAdd" type="primary">+</Button>
      </template>
    </Input>
  </div>
</template>

<style lang="less" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0);
}

.input-list {
  display: inline-block;
  border-radius: 4px;

  .list-item {
    display: flex;
    padding: 0 0 0 8px;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    margin: 2px 0;
  }
}
</style>
