<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// Contact form JS
import "./assets/js/mail/jqBootstrapValidation.js";
import "./assets/js/mail/contact_me.js";
// Core theme JS
import "./assets/js/all";

export default {
  name: 'App'
}
</script>

<style>
@import "./assets/all";

</style>
