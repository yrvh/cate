<template>
  <el-container>
    <!--  侧边栏  -->
    <el-aside :width=" is_collapse? '64px':'200px' ">
      <main-menu @click="onToggle" :collapse="this.is_collapse">
      </main-menu>
    </el-aside>

    <!--  头部和  住展示区  -->
    <el-container>
      <el-header>
        <div class="nav">面包屑>>导航</div>
        <div class="action">
          <div class="action-item iconfont icon-dayin"> 打印设置</div>
          <div class="action-item iconfont icon-denglu1"> 平台</div>
          <div class="action-item iconfont icon-bangzhu"> 帮助</div>
          <div class="avatar iconfont icon-weidenglu-touxiang"></div>
        </div>
      </el-header>
      <el-main>
        <div class="show">主内容 展示区</div>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MainMenu from "@/views/MainMenu";
export default {
  name: 'Main',
  components: {
    MainMenu
  },
  data() {
    return {
      is_collapse: false,   // 是否折叠
    }
  },
  methods: {
    onToggle() {
      this.is_collapse = !this.is_collapse
    }
  }
}
</script>

<style scoped lang="scss">

.el-container {
  min-height: 100vh;
}
.el-header {
  background-color: var(--cl-tF);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav {
  }
  .action {
    width: 350px;
    display: flex;
    justify-content: space-between;
  }
  .action-item {
    color: var(--cl-t9);
    font-size: 17px;
  }
  .action-item:hover {color: var(--cl-text); cursor: pointer;}
  .avatar {color: #dc7878; font-size: 28px;}
  .avatar:hover {color: #EE3232; cursor: pointer;}
}

.el-aside {
  background-color: var(--cl-bg-f);
}



.el-main {
  padding: 10px;
  .show { width: 100%; height: 100%; background-color: var(--cl-tF);}
}
</style>
