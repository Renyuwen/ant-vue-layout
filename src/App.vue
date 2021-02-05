<template>
  <a-config-provider>
    <div id="app" :locale="zh_CN">
      <router-view />
    </div>
  </a-config-provider>
</template>

<style scoped lang="less">
@import url("./styles/app.less");
</style>

<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";

moment.locale("zh-cn");
export default {
  data() {
    return {
      zh_CN
    };
  }
};
</script>
