import React, { Component } from 'react'

import './RandomPlanet.scss'
import SwapiService from '../../services/SwapiService'
import LoadSpinner from '../LoadSpinner'
import ErrorIndicator from '../ErrorIndicator'

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: null,
    isLoad: false,
    hasError: false
  }

  componentDidMount = () => {
    setInterval(this.updatePlanet, 3000);
  }

  updatePlanet = () => {
    const randomInteger = Math.floor(2 + Math.random() * 15);
    this.swapiService
      .getPlanet(randomInteger)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  onError = (err) => {
    this.setState({
      hasError: true,
      isLoad: true
    });
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      isLoad: true
    })
  }

  render() {
    const { isLoad, hasError, planet } = this.state;

    const hasData = !(!isLoad || hasError);

    const errorIndicator = hasError ? <ErrorIndicator /> : null;
    const spinner = isLoad ? null : <LoadSpinner />;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet">
        {errorIndicator}
        {spinner}
        {content}
      </div>
    )
  }
}

const PlanetView = ({ planet }) => {
  
  const { id, name, climate, diameter, population, rotationPeriod } = planet

  return (
    <React.Fragment>
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={`planet ${name}`} />

      <div className="desc">
        <h3>{name}</h3>
        <ul>
          <li>
            <span>Climate: </span>
            <span>{climate}</span>
          </li>
          <li>
            <span>Diameter: </span>
            <span>{diameter}</span>
          </li>
          <li>
            <span>Population: </span>
            <span>{population}</span>
          </li>
          <li>
            <span>Rotation period: </span>
            <span>{rotationPeriod}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
