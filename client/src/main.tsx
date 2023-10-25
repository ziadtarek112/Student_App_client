import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import App from './App.tsx'
import { Provider } from 'react-redux';
import './index.css'
import store from './store/store.ts';
import '../i18n.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store = {store}><BrowserRouter><App /></BrowserRouter> </Provider>
  </React.StrictMode>,
)
