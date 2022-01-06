import * as React from 'react'
import { render } from 'react-dom'
import { Router } from '@/router'
import '@/assets/styles/normalize.scss'
import '@/assets/styles/style.scss'
import { Icons } from './components'
// import '@cat1989/chalk'

render(
    <React.StrictMode>
        <Icons></Icons>
        <Router></Router>
    </React.StrictMode>,
    document.getElementById("app"),
)
