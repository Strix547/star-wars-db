import React from 'react'

import { withRouter } from 'react-router-dom'

import {
  PlanetList,
  PlanetInfo
} from '../SwComponents'

const PlanetsPage = ({ history, match}) => {

  const { id } = match.params;

  return (
    <div className="item-block">
      <PlanetList onItemSelected={(id) => history.push(id)} />
      <PlanetInfo itemId={id} />
    </div>
  );
}

export default withRouter(PlanetsPage)