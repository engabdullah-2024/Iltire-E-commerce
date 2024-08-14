import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Header from './Components/Header.jsx'
// import Product from './Components/Product.jsx'



import { Provider } from 'react-redux'
import store from './Redux/Store/store.js'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'

import { persistStore } from 'redux-persist'

import { PersistGate } from 'redux-persist/integration/react'


const storePersistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
   
   <PersistGate persistor={storePersistor} >

   <Provider store={store}>
   < BrowserRouter >
   <App />

   </BrowserRouter>


   </Provider>
   </PersistGate>
 
)
