import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"

import App from "../App"
import AvailRecipe from "./AvailRecipe"
const Router = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact/>
                <Route path="/recipe/:id" component={AvailRecipe} exact/>
            </Switch>
        </BrowserRouter>
    )
}
export default Router