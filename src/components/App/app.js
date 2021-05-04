import React, { Component } from 'react';

import Header from '../Header/header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';
import {Route} from "react-router-dom";
import {RouteComponent} from "../Route/Route";
import {Title} from "../Title/Title";

export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ?
                        DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  };

    render() {

    return (
        <div className="app">
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService} >
                    <Header onServiceChange={this.onServiceChange} />

                    <RandomPlanet />
                    <Route path="/home" render={() => <Title/> }/>


                    <Route render={() => <RouteComponent />}/>

                </SwapiServiceProvider>
            </ErrorBoundry>
        </div>
    );
  }
}
