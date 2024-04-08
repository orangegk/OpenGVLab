<template>
    <div class="open-source">
        <div class="open-source-title">技术博客</div>
        <div class="open-source-introduction">分享OpenGVLab丰富多元的开源生态。</div>
        <div class="open-source-content">
            <div class="left">
                <div class="display-images">
                    <img src="@/assets/images/002.jpg" alt="" />
                </div>
                <div class="blog-content">
                    <div class="time">
                        2024/2/28
                    </div>
                    <div class="title">
                        开源模型
                    </div>
                    <div class="content">
                        开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍
                    </div>
                </div>

            </div>
            <div class="right">
                <div class="blog-content">
                    <div class="time">
                        2024/2/28
                    </div>
                    <div class="title">
                        开源模型
                    </div>
                    <div class="content">
                        开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍
                    </div>
                </div>
                <div class="blog-content">
                    <div class="time">
                        2024/2/28
                    </div>
                    <div class="title">
                        开源模型
                    </div>
                    <div class="content">
                        开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍
                    </div>
                </div>
                <div class="blog-content">
                    <div class="time">
                        2024/2/28
                    </div>
                    <div class="title">
                        开源模型
                    </div>
                    <div class="content">
                        开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍
                    </div>
                </div>
                <div class="blog-content">
                    <div class="time">
                        2024/2/28
                    </div>
                    <div class="title">
                        开源模型
                    </div>
                    <div class="content">
                        开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍开源模型详细介绍
                    </div>
                </div>
            </div>
        </div>

        <div class="open-source-all">
            <el-button type="primary" round>查看全部博客</el-button>
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
            display: flex;

            .left {
                flex: 4;
                padding: 0 24px;
                border-right: 1px solid #ccc;

                .display-images {
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                .blog-content {
                    text-align: start;

                    .time {
                        font-size: 14px;
                        font-weight: 100;
                        line-height: 22px;

                        margin: 24px auto 8px;
                    }

                    .title {
                        font-size: 20px;
                        margin-bottom: 12px;
                        font-weight: 600;
                        line-height: 28px;
                        margin-top: 8px;
                    }

                    .content {
                        font-size: 13px;
                        line-height: 24px;
                        margin-bottom: 8px;
                        text-align: justify;
                        word-break: break-word;
                    }
                }

            }

            .right {
                flex: 6;
                padding: 0 24px;
                .blog-content {
                    text-align: start;
                    border-bottom: 1px solid #f0f0f0;
                    .time {
                        font-size: 14px;
                        font-weight: 100;
                        line-height: 22px;

                        margin: 3px auto 8px auto;
                    }

                    .title {
                        font-size: 20px;
                        margin-bottom: 12px;
                        font-weight: 600;
                        line-height: 28px;
                        margin-top: 8px;
                    }

                    .content {
                        font-size: 13px;
                        line-height: 24px;
                        margin-bottom: 8px;
                        text-align: justify;
                        word-break: break-word;
                    }
                }
            }
        }

        .open-source-all {
            margin: 30px auto;
        }
    }
</style>