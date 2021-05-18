import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  
  {
    _tag: 'CSidebarNavTitle',
    _children: ['JayFieldNet']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Home',
    to: '/#',
    icon: 'cil-home',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-chart-pie" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Brain',
  //   icon: 'cil-Lightbulb',
  //   to: '/dashboard',
  //   to: '/brain',
  //   badge: {
  //     color: 'secondary',
  //     text: 'ALPHA',
  //   }
  //   // },
  //   // addLinkClass: 'c-disabled',
  //   // 'disabled': false
  // },


]

export default _nav
