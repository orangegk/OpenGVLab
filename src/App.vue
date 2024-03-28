<template>
  <div class="common-layout">
    <el-container>
      <el-header
        class="transparent-header"
        ref="headerDom"
        id="header"
        @scroll="handleScroll"
      >
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
          :router="true"
        >
          <el-menu-item index="/home">
            <img
              style="width: 100px"
              src="@/assets/images/logo.jpg"
              alt="Element logo"
            />
          </el-menu-item>
          <div class="flex-grow" />
          <el-menu-item index="/home">Home</el-menu-item>
          <el-menu-item index="/projects">projects</el-menu-item>
          <el-menu-item index="/events">events</el-menu-item>
          <el-menu-item index="/blogs">blogs</el-menu-item>
        </el-menu>
      </el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const headerDom = ref();
const divtest=ref();

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};


onMounted(() => {
  const header = document.getElementById('header')||null;
  
  function debounce(func, wait) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    };
  }

  function handleScroll() {
    console.log('scrolling============================');
    if (header && window.pageYOffset > 0) {
      header.style.background = "white"; // 设置背景颜色为白色
    } else {
      header.style.background = "transparent"; // 恢复原始背景颜色
    }
  }

  const debouncedScroll = debounce(handleScroll, 200); // 设置防抖时间为200ms

  window.addEventListener("scroll", debouncedScroll);
});
</script>

<style scoped lang="scss">
.transparent-header {
  background-color: rgba(255, 255, 255, 0);
  /* 设置背景为透明 */
}

:deep(.el-main) {
  width: 98vw;
  padding: 0;
}

:deep(.el-header) {
  --el-header-padding: 0 20px;
  --el-header-height: 60px;
  box-sizing: border-box;
  flex-shrink: 0;
  height: var(--el-header-height);
  padding: 0px 50px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  /* background: transparent; */
  /* background-color: rgba(0, 0, 0, 0.3); */
  z-index: 1000;
}

:deep(.el-menu--horizontal.el-menu) {
  border-bottom: 0px solid var(--el-menu-border-color);
  background: transparent;
}

.flex-grow {
  flex-grow: 1;
}
</style>
