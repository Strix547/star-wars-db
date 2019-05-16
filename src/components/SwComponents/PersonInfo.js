import React from 'react'

import ItemInfo, { Record } from '../ItemInfo'
import { withSwapiService } from '../HOC'

const PersonInfo = (props) => {
  return (
    <ItemInfo {...props}>
      <Record field="name" label="Name" />
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth year" />
      <Record field="hairColor" label="Hair color" />
      <Record field="eyeColor" label="Eye color" />
      <Record field="height" label="Height" />
      <Record field="mass" label="Mass" />
    </ItemInfo>
  );
}

const mapMethodsToProps = (swapiService) => {
  return {
    getItemInfo: swapiService.getPerson,
    getImageURL: swapiService.getPersonImg
  }
}

export default withSwapiService(mapMethodsToProps)(PersonInfo)