import { computed, reactive } from 'vue'

export const loginData = reactive({
    isLoggedIn: false,
    name: ''
})

export const isLoggedIn = computed(() => loginData.isLoggedIn)
