import LoadingScreen from './components/loading/Loading-Screen.tsx'
import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './assets/style/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './layouts/Home.layout.tsx'

const Home = lazy(() => import('./pages/home/Home.page.tsx'))
const SignIn = lazy(() => import('./pages/account/Sign-In.tsx'))
const SignUp = lazy(() => import('./pages/account/Sign-Up.tsx'))
const ForgotPassword = lazy(() => import('./pages/account/Forgot-Password.tsx'))


const router = createBrowserRouter([
 {
  path: '/',
  element: (
   <Suspense fallback={<LoadingScreen />}>
    <HomeLayout>
     <Home />
    </HomeLayout>
   </Suspense>
  )
 },
 {
  path: '/sign-in',
  element: (
   <Suspense fallback={<LoadingScreen />}>
    <HomeLayout>
     <SignIn />
    </HomeLayout>
   </Suspense>
  )
 },
 {
  path: '/sign-up',
  element: (
   <Suspense fallback={<LoadingScreen />}>
    <HomeLayout>
     <SignUp />
    </HomeLayout>
   </Suspense>
  )
 },
 {
  path: '/forgot-password',
  element: (
   <Suspense fallback={<LoadingScreen />}>
    <HomeLayout>
     <ForgotPassword />
    </HomeLayout>
   </Suspense>
  )
 },
 {
  path: '*',
  element: (
   <div>404</div>
  )
 }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
 <React.StrictMode>
  <RouterProvider router={router} />
 </React.StrictMode>,
)
