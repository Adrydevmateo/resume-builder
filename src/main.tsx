import LoadingScreen from './components/loading/Loading-Screen.tsx'
import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './assets/style/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './layouts/Home.layout.tsx'

const Home = lazy(() => import('./pages/home/home.page.tsx'))

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
