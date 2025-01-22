import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import MainLayout from './Layout/MainLayout'


createRoot( document.getElementById( 'root' ) ).render(
  <MainLayout />
)
