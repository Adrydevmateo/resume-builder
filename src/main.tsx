import LoadingScreen from './components/loading/Loading-Screen.tsx'
import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './assets/style/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './layouts/Home.layout.tsx'

const Home = lazy(() => import('./pages/home/Home.page.tsx'))
const SignIn = lazy(() => import('./pages/account/sign-in/Sign-In.tsx'))
const SignUp = lazy(() => import('./pages/account/sign-up/Sign-Up.tsx'))
const ForgotPassword = lazy(() => import('./pages/account/forgot-password/Forgot-Password.tsx'))
const Builder = lazy(() => import('./pages/resume/builder/Builder.page.tsx'))

function Authorize({ children }: { children: React.ReactNode }) {

 const session = localStorage['session']
 if (!session) return (
  <Suspense fallback={<LoadingScreen />}>
   <HomeLayout>
    <SignIn />
   </HomeLayout>
  </Suspense>
 )

 const parsed_session = JSON.parse(session)
 if (!parsed_session.token) return (
  <Suspense fallback={<LoadingScreen />}>
   <HomeLayout>
    <SignIn />
   </HomeLayout>
  </Suspense>
 )

 return <>{children}</>

}

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
  path: '/resumes/builder',
  element: (
   <Authorize>
    <Suspense fallback={<LoadingScreen />}>
     <Builder />
    </Suspense>
   </Authorize>
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
