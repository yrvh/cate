import Vue from 'vue'

import {
  Pagination, Dialog, Autocomplete, Dropdown, DropdownMenu, DropdownItem,
  Menu, Submenu, MenuItem, MenuItemGroup, Input, InputNumber,
  Radio, RadioGroup, RadioButton, Checkbox, CheckboxButton, CheckboxGroup,
  Switch, Select, Option, OptionGroup, Button, ButtonGroup,
  Table, TableColumn, DatePicker, TimeSelect, TimePicker, Popover,
  Tooltip, Breadcrumb, BreadcrumbItem, Form, FormItem, Tabs,
  TabPane, Tag, Tree, Alert, Slider, Icon,
  Row, Col, Upload, Progress, Spinner, Badge,
  Card, Rate, Steps, Step, Carousel, CarouselItem,
  Collapse, CollapseItem, Cascader, ColorPicker, Transfer, Container,
  Header, Aside, Main, Footer, Timeline, TimelineItem,
  Link, Divider, Image, Calendar, Backtop, PageHeader,
  CascaderPanel,
  Loading, MessageBox, Message, Notification
} from 'element-ui'

// 该数组每一项 用Vue.use() 来注册成为组件
const components_arr = [
  Pagination, Dialog, Autocomplete, Dropdown, DropdownMenu, DropdownItem,
  Menu, Submenu, MenuItem, MenuItemGroup, Input, InputNumber,
  Radio, RadioGroup, RadioButton, Checkbox, CheckboxButton, CheckboxGroup,
  Switch, Select, Option, OptionGroup, Button, ButtonGroup,
  Table, TableColumn, DatePicker, TimeSelect, TimePicker, Popover,
  Tooltip, Breadcrumb, BreadcrumbItem, Form, FormItem, Tabs,
  TabPane, Tag, Tree, Alert, Slider, Icon,
  Row, Col, Upload, Progress, Spinner, Badge,
  Card, Rate, Steps, Step, Carousel, CarouselItem,
  Collapse, CollapseItem, Cascader, ColorPicker, Transfer, Container,
  Header, Aside, Main, Footer, Timeline, TimelineItem,
  Link, Divider, Image, Calendar, Backtop, PageHeader,
  CascaderPanel,
]

components_arr.forEach( (item,index) => {
  Vue.use(item)
})



// 挂载到Vue原型链上,   相当于给Vue添加类属性或者类方法
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

