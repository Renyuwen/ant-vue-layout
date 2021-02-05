<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider width="18%" v-model="collapsed" :trigger="null" collapsible>
      <!-- LOGO -->
      <div :class="collapsed ? 'col-logo' : 'logo'">
        <icon-font class="icon-dog" type="icondog" />
        <span>vue-Lay-out</span>
      </div>
      <!-- MENU -->
      <a-menu
        class="menu"
        theme="dark"
        mode="inline"
        @select="menuSelectHandle"
        v-model="menuSelectedKeys"
      >
        <a-menu-item key="/home/main">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="/home/nav2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="/home/nav3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
        <a-sub-menu>
          <span slot="title">
            <icon-font type="iconjixiaoguanli" class="m-icon" />
            <span>nav 4</span>
          </span>
          <a-menu-item key="/home/nav4/nav5">
            <a-icon type="upload" />
            <span>nav 5</span>
          </a-menu-item>
          <a-menu-item key="/home/nav4/nav6">
            <icon-font type="icondog" class="m-icon" />
            <span>nav 6</span>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <!-- HEADER -->
      <a-layout-header class="header">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <div class="user">
          <a-dropdown style="margin-right: 15px">
            <a-avatar src="https://profile.csdnimg.cn/2/1/B/3_cyxevil" />
            <a-menu slot="overlay" @click="menuItemClick">
              <a-menu-item key="profile"> 个人信息 </a-menu-item>
              <a-menu-item key="repassword"> 修改密码 </a-menu-item>
              <a-menu-item key="logout">
                <a-icon type="poweroff" style="color: red"></a-icon> 注销
              </a-menu-item>
            </a-menu>
          </a-dropdown>
          <span>欢迎您，{{ user.name }}</span>
        </div>
      </a-layout-header>
      <!-- CONTENT -->
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import IconFont from "../scripts/IconFont";
export default {
  components: { IconFont },
  data() {
    return {
      collapsed: false,
      menuSelectedKeys: [],
      user: {
        name: ""
      }
    };
  },
  created() {
    this.user.name = JSON.parse(localStorage.getItem("userInfo")).name;
    this.menuSelectedKeys = [this.$route.path]; // 默认选中的menu项
  },
  methods: {
    menuSelectHandle(menu) {
      const key = menu.key;
      if (this.$route.path !== key) {
        this.$router.push(key);
      }
    },
    menuItemClick({ key }) {
      const self = this;
      if (key == "logout") {
        this.$confirm({
          title: "注销",
          content: "确定要注销当前登录吗？",
          okText: "注销",
          cancelText: "取消",
          okType: "danger",
          onOk() {
            self.$store.commit("logout");
            self.$router.replace("/login");
          },
          onCancel() {
            self.$message.warning("取消操作");
          }
        });
      }
    }
  }
};
</script>

<style scope lang="less">
#components-layout-demo-custom-trigger {
  width: 100%;
  height: 100%;

  a-layout-sider {
    width: 100%;
  }

  .header {
    background: #fff;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .trigger {
      font-size: 18px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color 0.3s;

      :hover {
        color: #1890ff;
      }
    }

    .user {
      font-size: 18px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color 0.3s;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }

  .menu {
    .m-icon {
      font-size: 14px;
    }
  }

  .col-logo {
    height: 32px;
    margin: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon-dog {
      font-size: 50px;
    }

    span {
      display: none;
    }
  }

  .logo {
    height: 32px;
    margin: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon-dog {
      margin-right: 20px;
      font-size: 50px;
      color: #ffffff;
    }

    span {
      font-size: 18px;
      color: #fff;
      font-weight: bolder;
      font-family: "Ink Free";
    }
  }
}

.ant-menu-dark .ant-menu-inline.ant-menu-sub {
  box-shadow: none !important;
}
</style>
