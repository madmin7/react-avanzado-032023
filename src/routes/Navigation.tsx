import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import { Routes, Route, NavLink, Navigate } from "react-router-dom"
import { routes } from "./routes"

import logo from '../assets/react.svg'




// Router v6
export const Navigation = () => {
    return (
        <Suspense fallback={ <span>Loading...</span> }>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="react logo" style={{ marginTop: 25, marginBottom: 25, height:150 }}/>
                        <ul>
                            {
                                routes.map( ({ to, name }) => (
                                    <li key={ to }>
                                        <NavLink to={ to } className={ ({isActive})=> isActive ? 'nav-active' : '' }>{ name }</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map( ({ path, Component, to}) => (
                                <Route
                                    key={ to } 
                                    path={ path } 
                                    element={ <Component /> }
                                />
                            ))
                        }

                        <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> }/>
                    </Routes>


                </div>
            </BrowserRouter>
        </Suspense>
    )
}
