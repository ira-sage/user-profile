<template lang='pug'>
v-row.fill-height(align="center" justify="center")
  v-col.text-center(cols="12" sm="6" md="4")
    v-form(ref="form" v-model="valid" lazy-validation)
      v-text-field(v-model="login" :rules="loginRules" label="Логин" required)
      v-text-field(type="password" v-model="password" :rules="passwordRules" label="Пароль" required)
      v-btn(:disabled="!valid" color="success" class="mr-4" @click="enter") Войти
</template>

<script>
export default {
  layout: 'login',
  data: () => ({
    valid: true,
    login: '',
    loginRules: [
      v => !!v || 'Введите логин',
      v => (v && v.length > 2) || 'Логин должен быть длиннее 2 символов'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Введите пароль',
      v => (v && v.length > 2) || 'Пароль должен быть длиннее 2 символов'
    ]
  }),
  methods: {
    async enter () {
      if (!this.$refs.form.validate()) { return }
      await this.$store.dispatch('login')
      await this.$store.dispatch('getUser')
      this.$router.push('/profile')
    }
  }
}
</script>
