<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'
import { findClosestValue, calculateStep, getLabelPosition } from '@/utils/sliderUtils'
import { formatPhone } from '@/factories/inputFactory'
import type { InputType } from '@/factories/inputFactory'

interface Props {
  type: InputType
  modelValue: string | boolean | number
  label?: string
  placeholder?: string
  values?: number[]
  required?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const formattedValue = computed({
  get: () => (props.type === 'phone' ? formatPhone(String(props.modelValue)) : props.modelValue),
  set: (newValue) => {
    emit('update:modelValue', props.type === 'phone' ? formatPhone(String(newValue)) : newValue)
  },
})

const restrictInput = (event: Event) => {
  const inputEvent = event as InputEvent
  if (props.type === 'phone' && inputEvent.data && !/^\d$/.test(inputEvent.data)) {
    inputEvent.preventDefault()
  }
}

const minValue = computed(() =>
  props.type === 'range' && props.values ? Math.min(...props.values) : 0,
)
const maxValue = computed(() =>
  props.type === 'range' && props.values ? Math.max(...props.values) : 100,
)

const stepValue = computed(() => {
  if (props.type !== 'range' || !props.values || props.values.length < 2) return 1
  return calculateStep(minValue.value, maxValue.value, props.values)
})

const updateSliderValue = (event: Event) => {
  const rawValue = Number((event.target as HTMLInputElement).value)
  const closestValue = findClosestValue(rawValue, props.values || [])
  emit('update:modelValue', closestValue)
}

const updateSliderPosition = (value: number) => {
  const index = (props.values || []).indexOf(value)
  return getLabelPosition(index, (props.values || []).length)
}
</script>

<template>
  <label class="input-wrapper">
    <span v-if="props.label" class="input-label">
      {{ props.label }}
    </span>
    <input
      v-if="props.type !== 'checkbox' && props.type !== 'range'"
      v-model="formattedValue"
      :required="props.required"
      :placeholder="props.placeholder"
      :type="props.type === 'phone' ? 'text' : props.type"
      class="base-input base-input-text"
      :maxlength="props.type === 'phone' ? 18 : undefined"
      @beforeinput="restrictInput"
    />
    <div v-else-if="props.type === 'checkbox'" class="base-checkbox">
      <input v-model="formattedValue" type="checkbox" />
      <span class="base-checkbox__label">Аренда <b>99</b> ₽/мес.</span>
    </div>

    <div v-if="props.type === 'range'" class="slider-container">
      <input
        type="range"
        :min="minValue"
        :max="maxValue"
        :step="stepValue"
        :value="props.modelValue"
        @input="updateSliderValue"
        class="slider styled-slider slider-progress"
      />

      <div class="slider-labels">
        <span
          v-for="(val, index) in props.values"
          :key="index"
          :style="{ left: updateSliderPosition(val) }"
          class="slider-label"
        >
          {{ val }}
        </span>
      </div>
    </div>
    <span v-if="props.required" class="required">Обязательное поле</span>
  </label>
</template>

<style scoped lang="scss">
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: Inter, sans-serif;
}

.input-label {
  font-size: 18px;
  color: #000;
  font-weight: 500;
}

.base-checkbox {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
}
.required {
  font-size: 12px;
  color: #86969c;
}
.base-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  &-text {
    background: #fff;
    margin-top: 16px;
  }
}

.slider-container {
  position: relative;
  width: 100%;
  padding-top: 20px;
}

.slider {
  width: 100%;
  height: 6px;
  border-radius: 4px;
  outline: none;
}

.slider-labels {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
}

.slider-label {
  position: absolute;
  transform: translateX(-50%);
  font-size: 12px;
  color: #666;
  text-align: center;
}
</style>
