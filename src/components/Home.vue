<template>
  <!-- <div>HOME</div> -->
  <el-carousel style="width: 100%" motion-blur>
    <el-carousel-item v-for="item in carouselData" :key="item">
      <el-image :src="item.url" class="image" fit="contain" />
      <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
    </el-carousel-item>
  </el-carousel>
  <OpenSourceProject style="width: 100%" />
</template>
<script setup lang="ts">
// import OpenSourceProject  from 'OpenSourceProject.vue'
import OpenSourceProject from "./OpenSourceProjects.vue";
import { reactive } from "vue";
const carouselData = reactive([
  { url: new URL('@/assets/images/001.png', import.meta.url).href },
  { url: new URL('@/assets/images/002.jpg', import.meta.url).href },
])
</script>
<style scoped lang="scss">
.el-carousel {
  /* width: 98vw; */
  height: 100vh;
  text-align: center;
}

:deep(.el-carousel__container) {
  height: 100vh;
}

:deep(button:focus, button:focus-visible) {
  outline: 0px auto;
}
</style>
