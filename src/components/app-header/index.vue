<template>
  <div class="header-container flex-h flex-vc flex-hsb">
    <i
      class="el-icon-s-home"
      @click="$router.push('/')"
    />
    <el-dropdown>
      <div class="flex-h flex-vc header-avatar">
        <el-avatar
          :size="40"
          icon="el-icon-user-solid"
        >
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png">
        </el-avatar>
        <label class="ellipsis">用户名称用户名称用户名称用户名称</label>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss" scoped>
.header-container {
  height: 100%;

  [class^=el-icon-] {
    font-size: 26px;
    cursor: pointer;
    // color: #fff;
  }

  .header-avatar {
    width: 150px;

    label {
      margin-left: 20px;
      max-width: 90px;
    }
  }
}
</style>
