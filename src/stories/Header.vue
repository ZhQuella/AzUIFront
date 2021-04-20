<template>
  <header>
    <div class="wrapper">
      <div>
        <h1>Az-UI</h1>
      </div>
      <div>
        <my-button size="small" @click="$emit('logout')" label="Log out" v-if="user" />
        <my-button size="small" @click="$emit('login')" label="Log in" v-if="!user" />
        <my-button primary size="small" @click="$emit('createAccount')" label="Sign up" v-if="!user" />
      </div>
    </div>
  </header>
</template>

<script>
import './header.css';
import MyButton from './Button.vue';

export default {
  name: 'my-header',

  components: { MyButton },

  props: {
    user: {
      type: Object,
    },
  },

  emits: ['login', 'logout', 'createAccount'],
};
</script>
