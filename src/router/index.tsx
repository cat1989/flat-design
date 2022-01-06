import * as React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import routes from './routes'

export const Router: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                {routes.map((route, index) => <Route
                    key={index}
                    path={route.path}
                    element={
                        <React.Suspense fallback={null}>
                            <route.component></route.component>
                        </React.Suspense>
                    }
                ></Route>)}
            </Routes>
        </HashRouter>
    )
}
