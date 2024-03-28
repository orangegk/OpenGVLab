<template>
    <!-- <div>HOME</div> -->
    <el-carousel style="width: 100%" motion-blur>
        <el-carousel-item v-for="item in carouselData" :key="item">
            <el-image :src="item.url" class="image" fit="contain" />
            <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
        </el-carousel-item>
    </el-carousel>
    <OpenSourceProject style="width: 100%;" />
</template>
<script setup lang="ts">
    // import OpenSourceProject  from 'OpenSourceProject.vue'
    import OpenSourceProject from "./OpenSourceProjects.vue";
    // const carouselData = [
    //     { url: getImageUrl('001') },
    //     { url: getImageUrl('002') },
    //     { url: getImageUrl('003') },
    // ];

    // function getImageUrl(name) {
    //     // console.log(new URL(`../../images/${name}.png`, ).href)
    //     // return new URL(`../../images/${name}.jpg`, ).href;
    //     return new URL(`../images/${name}.jpg`,).href
    // }
    const carouselData = [
        { url: getImageUrl('001', import.meta.url) },
        { url: getImageUrl('002', import.meta.url) },
        // { url: getImageUrl('003', import.meta.url) },
    ];

    function getImageUrl(name, baseUrl) {
        const imagePath = `../assets/images/${name}.jpg`;
        const fullUrl = new URL(imagePath, baseUrl).href;
        // console.log("fullUrl==========================", fullUrl)
        return fullUrl;
    }

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