<template>
  <v-app>
    <v-container>
      <h1>Dogowalk: The Dog Walking Weather Calculator</h1>
      <DogWalkForm />
    </v-container>
  </v-app>
</template>

<script>
import DogWalkForm from './DogWalkForm.vue'

export default {
  components: { DogWalkForm }
}
</script>