<template lang="pug">
v-app(dark)
  v-app-bar(fixed app)
    v-toolbar-title(v-text="`Профиль пользователя`")
    v-spacer
    v-btn(icon @click="logout")
      v-icon mdi-logout

  v-main
    v-container
      nuxt

  v-footer(:absolute="true" app)
    span &copy; {{ new Date().getFullYear() }}
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.replace('/')
    }
  }
}
</script>
