const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        registeredUser() {
          return {
            username: 'Kozache',
            email: 'pespatron@gmail.com',
            password: 'harnaUkrainkaJa'
          };
        },
        nonRegisteredUser() {
          return {
            wrongEmail: 'pespatrongmail.com',
            email: 'notpespatron@gmail.com',
            password: '12345qwert!'
          };
        },
        validationMessages() {
          return {
            wrongEmail:'*Це поле має бути електронною поштою',
            wrongPassword: 'Wrong password',
            nonRegisterEmail: 'No such user'
          }
        }
      }
  )},
    baseUrl: 'http://127.0.0.1:3030/'
  },
});
