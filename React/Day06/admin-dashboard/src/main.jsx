import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import './styles/style.module.css'
import { MainLayout } from './Layout/MainLayout'

import { Provider } from 'react-redux'
import { myStore } from './store'


createRoot( document.getElementById( 'root' ) ).render(
  <Provider store={myStore}>
    <MainLayout />
  </Provider>
)
