<template>
  <div class="open-source">
    <div class="open-source-title">开源活动</div>
    <div class="open-source-introduction">OpenGVLab积极举办&参与开源活动，搭建交流平台，分享开源实践。期待在不同的活动中与你相遇。</div>
    <div class="open-source-content">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card style="max-width: 480px" id="card">
            <template #header>
              <div class="card-header">
                <img src="@/assets/images/002.jpg" alt="" />
              </div>
            </template>
            <div class="card-body">
              <div class="card-body-introduce">
                <div class="card-body-header"><img src="@/assets/images/location.png"
                    alt="" /><span>2024年0x月xx日-0x月xx日</span>
                  <el-divider direction="vertical" /><span>上海</span>
                </div>
                <div class="card-body-title">活动名称 </div>
                <div class="card-body-content">活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍</div>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card style="max-width: 480px" id="card">
            <template #header>
              <div class="card-header">
                <img src="@/assets/images/002.jpg" alt="" />
              </div>
            </template>
            <div class="card-body">
              <div class="card-body-introduce">
                <div class="card-body-header"><img src="@/assets/images/location.png"
                    alt="" /><span>2024年0x月xx日-0x月xx日</span>
                  <el-divider direction="vertical" /><span>上海</span>
                </div>
                <div class="card-body-title">活动名称 </div>
                <div class="card-body-content">活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍</div>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card style="max-width: 480px" id="card">
            <template #header>
              <div class="card-header">
                <img src="@/assets/images/002.jpg" alt="" />
              </div>
            </template>
            <div class="card-body">
              <div class="card-body-introduce">
                <div class="card-body-header"><img src="@/assets/images/location.png"
                    alt="" /><span>2024年0x月xx日-0x月xx日</span>
                  <el-divider direction="vertical" /><span>上海</span>
                </div>
                <div class="card-body-title">活动名称 </div>
                <div class="card-body-content">活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍</div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row></div>

    <div class="open-source-all">
      <el-button type="primary" round>查看全部活动</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
  :deep(.el-card__header) {
    padding: 0;
  }

  :deep(.el-tag) {
    margin-right: 10px;
  }

  :deep(.el-card__body) {
    height: 200px;
  }

  :deep(.el-card):hover {
    background-clip: padding-box, border-box;
    background-image: linear-gradient(90deg, #fff, #fff), linear-gradient(135deg, #4047f7, #ffa900 32.33%, #008eff 64.1%, #00c4b7 95.45%);
    background-origin: padding-box, border-box;
    border: 2px solid #0000;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
  }

  :deep(.el-card) {
    cursor: pointer;
    border: 2px solid #fff3;
    border-radius: 12px;
    box-shadow: 0 10px 20px #0000000d;
    transition: background-image 0.3s;
    /* 添加过渡效果 */
    box-shadow: 0 10px 20px #0000000d;
    height: 100%;
  }

  /* :deep(.el-card):hover {
    background: radial-gradient(circle closest-side, #4047f7, #ffa900 32.33%, #008eff 64.1%, #00c4b7 95.45%);
    background-size: 20px, 20px;
  } */

  .card-header {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;

    .card-body-header {
      font-size: 14px;
      text-align: start;
      margin-bottom: 12px;

      img {
        width: 14px;
        height: 16px;
      }
    }

    .card-body-title {
      text-align: start;
      margin-bottom: 12px;
      font-size: 24px;
      font-weight: 500;
      line-height: normal;
    }

    .card-body-content {
      font-size: 13px;
      line-height: 24px;
      margin-bottom: 8px;
      text-align: start;
      word-break: break-word;
    }

    .card-body-field {
      font-size: 13px;
    }
  }

  .card-footer {
    display: flex;
    justify-content: center;
    align-items: center;

    .github {
      margin: 0 10px;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }

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
    margin-top: 50px;

    .open-source-title {
      font-weight: bold;
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
      font-size: 16px;
      color: #000;
      /* font-weight: bold; */
    }

    .open-source-all {
      margin: 30px auto;
    }
  }
</style>