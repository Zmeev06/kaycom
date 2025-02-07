<template>
  <FormLayout>
    <template #header>
      <h2 class="form-title">Настройте тариф</h2>
    </template>
    <div class="loader" v-if="formStore.isLoading">
      <VueSpinner size="50" color="blue" />
    </div>
    <form class="form" v-else @submit.prevent="onSubmit">
      <BaseInput class="phone__input" v-model="formStore.formData.phone" v-bind="inputs[0]" />
      <BaseInput v-model="formStore.formData.minutes" v-bind="inputs[1]" />
      <BaseInput v-model="formStore.formData.sms" v-bind="inputs[2]" />
      <BaseInput v-model="formStore.formData.internet" v-bind="inputs[3]" />
      <BaseInput v-model="formStore.formData.router" v-bind="inputs[4]" />
      <button type="submit" class="form__button">
        <span class="price">{{ price }} ₽ в месяц</span>
      </button>
    </form>
  </FormLayout>
</template>

<script setup lang="ts">
import FormLayout from '@/components/FormLayout.vue'
import BaseInput from '@/components/BaseInput.vue'
import { onMounted, ref, watch } from 'vue'
import { createInput } from '@/factories/inputFactory.ts'
import { useFormStore } from '../stores/formStore.ts'
import { VueSpinner } from 'vue3-spinners'
import type { InputConfig } from '@/factories/inputFactory.ts'

const formStore = useFormStore()
const price = ref<string>()

const updatePrice = async () => {
  price.value = `${formStore.calculatePrice(formStore.formData.minutes, formStore.formData.sms, formStore.formData.internet, formStore.formData.router)}`
}

watch(formStore.formData, updatePrice, { deep: true })

const onSubmit = () => {
  alert(JSON.stringify(formStore.formData, null, 2))
}

const inputs = ref<InputConfig[]>([])

const createInputs = () => {
  inputs.value = [
    createInput('phone', 'Телефон', '+7(___) ___-__-__', true),
    createInput('range', 'Минуты', '', false, formStore.availableMinutes),
    createInput('range', 'СМС', '', false, formStore.availableSms),
    createInput('range', 'Интернет', '', false, formStore.availableInternet),
    createInput('checkbox', 'Wi-Fi роутер'),
  ]
}

onMounted(async () => {
  await formStore.fetchAvailableData()
  await formStore.fetchTariffs()
  createInputs()
  await updatePrice()
})
</script>

<style scoped lang="scss">
.form-title {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 40px;
}

.loader {
  width: 60vw;
  height: 60vh;
}

.form {
  width: 60vw;
  display: flex;
  min-height: 60vh;
  flex-direction: column;
  gap: 60px;
  &__button {
    width: 100%;
    height: 60px;
    background: #7a5cfa;
    border-radius: 10px;
  }
}

.phone__input {
  width: 200px;
}

@keyframes countAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.price {
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  display: inline-block;
  animation: countAnimation 1s ease-out;
}
</style>
