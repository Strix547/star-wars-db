import React from 'react'

import ItemList from '../ItemList'
import { withData, withChildFunction, withSwapiService, compose } from '../HOC'

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}

const mapStarshipsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const renderGenderAndName = ({name, gender}) => <span>{name} ({gender})</span>;
const renderClimateAndName = ({name, climate}) => <span>{name} ({climate})</span>;
const renderClassAndName = ({name, starshipClass}) => <React.Fragment><p>{name}</p> <p>({starshipClass})</p></React.Fragment>;

const PersonList = compose(
                    withSwapiService(mapPersonMethodsToProps),
                    withData,
                    withChildFunction(renderGenderAndName)
                  )(ItemList);

const PlanetList = compose(
                    withSwapiService(mapPlanetMethodsToProps),
                    withData,
                    withChildFunction(renderClimateAndName)
                  )(ItemList);

const StarshipList = compose(
                      withSwapiService(mapStarshipsMethodsToProps),
                      withData,
                      withChildFunction(renderClassAndName)
                    )(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
}
