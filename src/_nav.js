/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilPuzzle,
  cilSpeedometer,
  cilUser,
  cilCart,
  cilStorage,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  {
    component: CNavGroup,
    name: 'Account',
    to: '/profile',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [

      {
        component: CNavItem,
        name: 'Account',
        to: '/profile',
      },
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
    ],
  },

  {
    component: CNavItem,
    name: 'Orders',
    to: '/orders',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: 'Products',
    to: '/products',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Products',
        to: '/products/all-products',
      },
      {
        component: CNavItem,
        name: 'Add New Product',
        to: '/products/add-new-product',
      },
      {
        component: CNavItem,
        name: 'Update Product',
        to: '/products/update-product',
      },
      {
        component: CNavItem,
        name: 'Delete Products',
        to: '/products/delete-products',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'In Stock',
    to: '/stock',
    icon: <CIcon icon={cilStorage} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Out of Stock',
        to: '/stock/out-stock',
      },
    ],
  },

]

export default _nav
