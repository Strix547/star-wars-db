import React from 'react'

import ItemInfo, { Record } from '../ItemInfo'
import { withSwapiService } from '../HOC';

const StarshipInfo = (props) => {
  return (
    <ItemInfo {...props}>
      <Record field="name" label="Name" />
      <Record field="starshipClass" label="Class" />
      <Record field="speed" label="Speed" />
      <Record field="cost" label="Cost" />
      <Record field="crew" label="Crew" />
      <Record field="passengers" label="Passengers" />
    </ItemInfo>
  );
}

const mapMethodsToProps = (swapiService) => {
  return {
    getItemInfo: swapiService.getStarship,
    getImageURL: swapiService.getStarshipImg
  }
}

export default withSwapiService(mapMethodsToProps)(StarshipInfo)