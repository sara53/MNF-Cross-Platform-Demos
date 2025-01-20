import { createRoot } from 'react-dom/client'
import { MainLayout } from './Layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './css/style.module.css'

createRoot( document.getElementById( 'root' ) ).render(
  <MainLayout />
)
