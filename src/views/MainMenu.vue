<!--  主界面的 侧边栏 -->
<template>
  <div class="main-menu">
    <div class="title iconfont icon-tongji-"><span v-if="!collapse"> 数据中心</span></div>
    <div class="toggle-button" @click="toggleCollapse">|||</div>

    <el-menu :collapse="collapse" background-color="#1079f2" text-color="#fff"
             default-active="#fff" active-text-color="#ff8" :collapse-transition="false"
             unique-opened router >    <!-- :default-openeds="[]" 当前打开的submenu, 数组类型-->

      <el-submenu v-for="item in sub_list" :key="item.id" :index="item.id">

        <template slot="title">
          <!-- <i class="iconfont icon-headerAside-count"/> 暂时不要这个图标-->
          <span>{{item.title}}</span>
        </template>

          <el-menu-item v-for="item2 in item.child" :key="item2.id" :index="item2.id" :route="item2.route">
            <template slot="title">
              <i class="iconfont" :class="item2.icon"></i>
              <span>{{item2.title}}</span>
            </template>
          </el-menu-item>

      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sub_list: [   // 渲染侧边栏的 数组
        {
          id: '1',
          title: '门店管理',
          child: [
            {
              id: '101',
              icon: 'icon-zu165',
              title: '门店设置',
              route: '/main/storeset'
            },
            {
              id: '102',
              icon: 'icon-biaoqiankuozhan_guanli-159',
              title: '员工管理',
              route: '/main/staff'
            }
          ]
        },
        {
          id: '2',
          title: '门店运营',
          child: [
            {
              id: '201',
              icon: 'icon-shijian',
              title: '即时订单',
              route: '/main/atonce'
            },
            {
              id: '202',
              icon: 'icon-17shijian',
              title: '预订单',
              route: '/main/reserve'
            },
            {
              id: '203',
              icon: 'icon-erji-yingyongyunhangbaobiao',
              title: '监控面板',
              route: '/main/panel'
            },
            {
              id: '204',
              icon: 'icon-huowudui',
              title: '打包监控',
              route: '/main/pack'
            },
            {
              id: '205',
              icon: 'icon-duanxin',
              title: '短信营销',
              route: '/main/message'
            },
            {
              id: '206',
              icon: 'icon-B',
              title: '评价管理',
              route: '/main/eval'
            },
            {
              id: '207',
              icon: 'icon-yewutubiaosi',
              title: '自营配送',
              route: '/main/private_send'
            },
            {
              id: '208',
              icon: 'icon-pingjia',
              title: '评价模板',
              route: '/main/mould'
            },
            {
              id: '209',
              icon: 'icon-tongzhi',
              title: '模板通知',
              route: '/main/notice'
            }
          ]
        },
        {
          id: '3',
          title: '自营销售',
          child: [
            {
              id: '301',
              icon: 'icon-yunyingtuiguang',
              title: '代下外卖单',
              route: '/main/takeout'
            },
            {
              id: '302',
              icon: 'icon-yunyingtuiguang',
              title: '代下自提单',
              route: '/main/selfget'
            },
            {
              id: '303',
              icon: 'icon-yunyingtuiguang',
              title: '代下食堂单',
              route: '/main/canteen'
            },
            {
              id: '304',
              icon: 'icon-yunyingtuiguang',
              title: '自营小店设置',
              route: '/main/selfstore'
            }
          ]
        },
        {
          id: '4',
          title: '成本核算',
          child: [
            {
              id: '401',
              icon: 'icon-yunyingtuiguang',
              title: '成本汇总',
              route: '/main/costgather'
            },
            {
              id: '402',
              icon: 'icon-yunyingtuiguang',
              title: '商品成本',
              route: '/main/cost_commodity'
            },
            {
              id: '403',
              icon: 'icon-yunyingtuiguang',
              title: '运营成本',
              route: '/main/cost_operation'
            },
            {
              id: '404',
              icon: 'icon-yunyingtuiguang',
              title: '订单成本',
              route: '/main/costorder'
            }
          ]
        },
        {
          id: '5',
          title: '商品管理',
          child: [
            {
              id: '501',
              icon: 'icon-yunyingtuiguang',
              title: '饿了么',
              route: '/main/ele'
            },
            {
              id: '502',
              icon: 'icon-yunyingtuiguang',
              title: '美团外卖',
              route: '/main/meituan'
            },
            {
              id: '503',
              icon: 'icon-yunyingtuiguang',
              title: '自营销售',
              route: '/main/selfsell'
            }
          ]
        },
        {
          id: '6',
          title: '报表中心',
          child: [
            {
              id: '504',
              icon: 'icon-yunyingtuiguang',
              title: '运营数据分析',
              route: '/main/report_operation'
            },
            {
              id: '505',
              icon: 'icon-yunyingtuiguang',
              title: '销售数据分析',
              route: '/main/reportsell'
            },
            {
              id: '506',
              icon: 'icon-yunyingtuiguang',
              title: '门店订单分析',
              route: '/main/reportorder'
            },
            {
              id: '507',
              icon: 'icon-yunyingtuiguang',
              title: '用户数据分析',
              route: '/main/reportuser'
            }
          ]
        }
      ]
    }
  },

  methods: {
    toggleCollapse() {   // 点击按钮,折叠菜单
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
.main-menu {
  color: var(--cl-tF);
  .title {
    font-size: 23px;
    text-align: center;
    height: 70px;
    line-height: 70px;
  }
  .toggle-button {
    background-color: rgba(192,192,192,0.1);
    text-align: center;
    line-height: 30px;
    font-size: 10px;
    cursor: pointer;
    letter-spacing: 2px;
  }
  .el-menu {border-right: none;}
  .el-menu-item .iconfont { margin-right: 5px;}

}
</style>