import React from 'react'

import ItemInfo, { Record } from '../ItemInfo'
import { withSwapiService } from '../HOC';

const PlanetInfo = (props) => {
  return (
    <ItemInfo {...props}>
      <Record field="name" label="Name" />
      <Record field="population" label="Population" />
      <Record field="climate" label="Climate" />
      <Record field="diameter" label="Diameter" />
      <Record field="rotationPeriod" label="Rotation period" />
    </ItemInfo>
  );
}

const mapMethodsToProps = (swapiService) => {
  return {
    getItemInfo: swapiService.getPlanet,
    getImageURL: swapiService.getPlanetImg
  }
}

export default withSwapiService(mapMethodsToProps)(PlanetInfo)