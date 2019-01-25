import Vue from 'vue'
import Router from 'vue-router'

const sysRouter = [
  {
    path: 'grade',
    name: 'grade',
    component: (resolve)=>require(['@/pages/system/gradeSetting'],resolve),
  },
  {
    path: 'kemu',
    name: 'kemu',
    component: (resolve)=>require(['@/pages/system/kemuSetting'],resolve),
  },
  {
    path: 'caijiMgr',
    name: 'caijiMgr',
    component: (resolve)=>require(['@/pages/system/caijiManager'],resolve),
  },
  {
    path: 'reportMgr',
    name: 'reportMgr',
    component: (resolve)=>require(['@/pages/system/reportMgr'],resolve),
  },
  {
    path: 'addCompany',
    name: 'addCompany',
    component: (resolve)=>require(['@/pages/system/addCompany'],resolve),
  },
  {
    path: 'miyaoMgr',
    name: 'miyaoMgr',
    component: (resolve)=>require(['@/pages/system/miyaoMgr'],resolve),
  },
  {
    path: 'editPas',
    name: 'editPas',
    component: (resolve)=>require(['@/pages/system/editPassword'],resolve),
  },




]

export default sysRouter;
