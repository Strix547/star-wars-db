import React from 'react'

import { withRouter } from 'react-router-dom'

import {
  PersonList,
  PersonInfo
} from '../SwComponents'

const PeoplePage = ({ history, match }) => {

  const { id } = match.params;

  return (
    <div className="item-block">
      <PersonList onItemSelected={(id) => history.push(id)} />
      <PersonInfo itemId={id} />
    </div>
  );
}


export default withRouter(PeoplePage)