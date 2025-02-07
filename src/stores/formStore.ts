import { defineStore } from 'pinia'
import { ref } from 'vue'

interface FormState {
  availableMinutes: number[]
  availableSms: number[]
  availableInternet: number[]
}

interface Tariff {
  minutes: number
  sms: number
  internet: number
  router: boolean
  price: number
}

export const useFormStore = defineStore('form', () => {
  const availableMinutes = ref<number[]>([])
  const availableSms = ref<number[]>([])
  const availableInternet = ref<number[]>([])

  const formData = ref({
    phone: '',
    minutes: 200,
    internet: 5,
    sms: 0,
    router: false,
  })

  const isLoading = ref(true)

  const tariffs = ref<Tariff[]>([])

  const fetchAvailableData = async () => {
    const response = await fetch('/src/mockData/availableData.json')
    const data = await response.json()
    setAvailableData(data)
  }

  const fetchTariffs = async () => {
    const response = await fetch('/src/mockData/tariffs.json')
    const data = await response.json()
    tariffs.value = data.tariffs
  }

  const calculatePrice = (
    minutes: number,
    sms: number,
    internet: number,
    router: boolean,
  ): number => {
    console.log('Полученные параметры:', minutes, sms, internet, router)

    const routerBool = String(router) === 'true'

    const selectedTariff = tariffs.value.find((tariff) => {
      return (
        tariff.minutes === minutes &&
        tariff.sms === sms &&
        tariff.internet === internet &&
        tariff.router === routerBool
      )
    })

    return selectedTariff ? selectedTariff.price : 0
  }

  const setAvailableData = (data: FormState) => {
    availableMinutes.value = data.availableMinutes
    availableSms.value = data.availableSms
    availableInternet.value = data.availableInternet
    isLoading.value = false
  }

  return {
    availableMinutes,
    availableSms,
    availableInternet,
    fetchAvailableData,
    setAvailableData,
    isLoading,
    calculatePrice,
    fetchTariffs,
    tariffs,
    formData,
  }
})
