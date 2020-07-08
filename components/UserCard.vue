<template lang="pug">
v-card.rounded-lg.mx-auto.pa-5.text-center(max-width="300" title)
  v-row(align="end")
    v-col.pa-0(align-self="start" cols="12")
      v-avatar.rounded-circle.profile(color="grey" size="164" tile)
        v-img(:src="$store.state.user.img")
    v-col.py-0
      v-list-item(color="rgba(0, 0, 0, .4)" dark)
        v-list-item-content
          v-list-item-title.title {{ $store.state.user.name }}
          v-list-item-subtitle {{ $store.state.user.email }}
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  }
}
</script>
