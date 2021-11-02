import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//Products
const AllProducts = React.lazy(() => import('./views/products/AllProducts/AllProducts'))
const AddNewProduct = React.lazy(() => import('./views/products/AddNewProduct/AddNewProduct'))

//Users
const User = React.lazy(() => import('./views/user/User'))

//Orders
const Orders = React.lazy(() => import('./views/orders/Orders'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/products', name: 'Products', component: AllProducts, exact: true },
  { path: '/products/all-products', name: 'All Products', component: AllProducts },
  { path: '/products/add-new-product', name: 'All New Product', component: AddNewProduct },

  { path: '/profile', name: 'Admin User', component: User, exact: true },

  { path: '/orders', name: 'All Orders', component: Orders, exact: true },
]

export default routes
