<template>
  <a-locale-provider>
    <div id="app" :locale="zh_CN">
      <router-view />
    </div>
  </a-locale-provider>
</template>

<style scoped lang="less">
@import url("./styles/app.less");
</style>

<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  data() {
    return {
      zh_CN
    };
  }
};
</script>
