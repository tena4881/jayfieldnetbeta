import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['JayFieldNet']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Home',
    to: '/#',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Brain',
    icon: 'cil-ban',
    badge: {
      color: 'secondary',
      text: 'COMING SOON!',
    },
    addLinkClass: 'c-disabled',
    'disabled': true
  },


]

export default _nav
