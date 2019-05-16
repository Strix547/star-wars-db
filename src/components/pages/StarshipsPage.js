import React from 'react'

import { withRouter } from 'react-router-dom'

import {
  StarshipList,
  StarshipInfo
} from '../SwComponents'

const StarshipsPage = ({match, history}) => {

  const { id } = match.params;

  return (
    <div className="item-block">
      <StarshipList onItemSelected={(id) => history.push(id)} />
      <StarshipInfo itemId={id} />
    </div>
  );
}

export default withRouter(StarshipsPage)