import {BrowserRouter, Route} from "react-router-dom";
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages";

import React from "react";


export const RouteComponent = () => {
    return (
        <BrowserRouter>
            <Route path="/people" render={() => <PeoplePage />}/>
            <Route path="/planets" render={() => <PlanetsPage />}/>
            <Route path="/starships" render={() => <StarshipsPage />}/>
        </BrowserRouter>
    )
}

