<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  created() {
    if (performance.navigation.type == 1) {
      if (confirm("Reload site?. Change you made may not be saved.")) {
        this.$router.push({ path: "/" });
      } else {
        console.log("reload page now");
      }
    }
  },
}
</script>

<style></style>
