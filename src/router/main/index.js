// 主界面  下个各个子界面的路由
const Main = () => import('views/Main')
const StoreSet = () => import('views/manage/StoreSet');
const Staff = () => import('views/manage/Staff');

const Atonce = () => import('views/operation/Atonce');
const Reserve = () => import('views/operation/Reserve');
const Panel = () => import('views/operation/Panel');
const Pack = () => import('views/operation/Pack');
const Message = () => import('views/operation/Message');
const Eval = () => import('views/operation/Eval');
const PrivateSend = () => import('views/operation/PrivateSend');
const Mould = () => import('views/operation/Mould');
const Notice = () => import('views/operation/Notice');

const TakeOut = () => import('views/self/TakeOut');
const SelfGet = () => import('views/self/SelfGet');
const Canteen = () => import('views/self/Canteen');
const SelfStore = () => import('views/self/SelfStore');

const CostGather = () => import('views/cost/CostGather');
const CostCommodity = () => import('views/cost/CostCommodity');
const CostOperation = () => import('views/cost/CostOperation');
const CostOrder = () => import('views/cost/CostOrder');

const Ele = () => import('views/commodity/Ele');
const MeiTuan = () => import('views/commodity/MeiTuan');
const SelfSell = () => import('views/commodity/SelfSell');

const ReportOperation = () => import('views/report/ReportOperation');
const ReportSell = () => import('views/report/ReportSell');
const ReportOrder = () => import('views/report/ReportOrder');
const ReportUser = () => import('views/report/ReportUser');

export default {
  path: '/main/',
  component: Main,
  children: [
    {
      path: '',
      redirect: 'storeset'
    },
    {
      path: 'storeset',
      component: StoreSet
    },
    {
      path: 'staff',
      component: Staff
    },

    {
      path: 'atonce',
      component: Atonce
    },
    {
      path: 'reserve',
      component: Reserve
    },
    {
      path: 'panel',
      component: Panel
    },
    {
      path: 'pack',
      component: Pack
    },
    {
      path: 'message',
      component: Message
    },
    {
      path: 'eval',
      component: Eval
    },
    {
      path: 'private_send',
      component: PrivateSend
    },
    {
      path: 'mould',
      component: Mould
    },
    {
      path: 'notice',
      component: Notice
    },
    {
      path: 'takeout',
      component: TakeOut
    },
    {
      path: 'selfget',
      component: SelfGet
    },
    {
      path: 'canteen',
      component: Canteen
    },
    {
      path: 'selfstore',
      component: SelfStore
    },
    {
      path: 'costgather',
      component: CostGather
    },
    {
      path: 'cost_commodity',
      component: CostCommodity
    },
    {
      path: 'cost_operation',
      component: CostOperation
    },
    {
      path: 'costorder',
      component: CostOrder
    },
    {
      path: 'ele',
      component: Ele
    },
    {
      path: 'meituan',
      component: MeiTuan
    },
    {
      path: 'selfsell',
      component: SelfSell
    },
    {
      path: 'report_operation',
      component: ReportOperation
    },
    {
      path: 'reportsell',
      component: ReportSell
    },
    {
      path: 'reportorder',
      component: ReportOrder
    },
    {
      path: 'reportuser',
      component: ReportUser
    },
  ]


}