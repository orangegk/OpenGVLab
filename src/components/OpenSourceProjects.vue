<template>
  <div class="open-source">
    <div class="open-source-title">开源项目</div>
    <div class="open-source-introduction">在这里，发现了解OpenGVLab的开源项目。 欢迎你参与OpenGVLab开源，不论是使用或贡献。</div>
    <div class="open-source-content"><el-row :gutter="20">
        <el-col :span="6">
          <el-card style="max-width: 480px">
            <template #header>
              <div class="card-header">
                <span>Card name</span>
              </div>
            </template>
            <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
            <template #footer>Footer content</template>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card style="max-width: 480px">
            <template #header>
              <div class="card-header">
                <span>Card name</span>
              </div>
            </template>
            <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
            <template #footer>Footer content</template>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card style="max-width: 480px">
            <template #header>
              <div class="card-header">
                <span>Card name</span>
              </div>
            </template>
            <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
            <template #footer>Footer content</template>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card style="max-width: 480px">
            <template #header>
              <div class="card-header">
                <span>Card name</span>
              </div>
            </template>
            <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
            <template #footer>Footer content</template>
          </el-card>
        </el-col>
      </el-row></div>

    <div class="open-source-all"> 
      <el-button type="primary" round>查看全部项目</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
  .open-source {
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #000;
    font-weight: bold;
    margin-top: 50px;

    .open-source-title {
      width: 100px;
      height: 36px;
      margin-top: 30px;
    }

    .open-source-introduction {
      margin: 0 auto 50px auto;
      font-size: 12px;
    }

    .open-source-content {
      width: 96vw;
      margin: 0 auto;
    }
    .open-source-all{
      margin: 30px auto;
    }
  }
</style>