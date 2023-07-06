import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://voicenter-automation-qa-test-api.voicenter-ltd.workers.dev/api'
})

export function loginUser (credentials) {
    return instance.post(
        '/login',
        credentials
    )
}
export function resetPassword (email) {
    return instance.post(
        '/reset-pass',
        {
            email
        }
    )
}
