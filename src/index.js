import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import { Provider } from 'react-redux'
import setupStore from './redux/store'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from 'src/config/theme'
import { globalStyles } from 'src/config/globalStyles'
import { ToastContainer } from 'react-toastify'

const store = setupStore()

const GlobalStyle = createGlobalStyle`${globalStyles}`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <ToastContainer />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
