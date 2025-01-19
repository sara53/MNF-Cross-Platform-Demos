
import { createRoot } from 'react-dom/client'
import { MainLayout } from './Layout/MainLayout'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './css/globalStyle.css'
createRoot( document.getElementById( 'root' ) ).render(
  <MainLayout />
)
