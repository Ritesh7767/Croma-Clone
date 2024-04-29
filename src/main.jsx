import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import OpacityProvider from './OpacityContext.jsx'
import LoginProvider from './LoginContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store.js'
import ThemeProvider from './Context/themeContext.jsx'
import AuthProvider from './Context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider>
                <AuthProvider>
                    <OpacityProvider>
                        <LoginProvider>
                            <App />
                        </LoginProvider>
                    </OpacityProvider>
                </AuthProvider>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
)
