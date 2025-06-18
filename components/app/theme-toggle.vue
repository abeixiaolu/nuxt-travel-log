<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value !== "light";
  },
  set(value) {
    colorMode.preference = value ? "sunset" : "light";
  },
});
</script>

<template>
  <label class="swap mr-4 swap-rotate">
    <input v-model="isDark" type="checkbox">
    <Icon
      name="i-tabler-sun"
      class="swap-on"
      size="24"
    />
    <Icon
      name="i-tabler-moon-filled"
      class="swap-off"
      size="24"
    />
  </label>
</template>
