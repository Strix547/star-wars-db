import React from 'react'

import './ItemList.scss'

const ItemList = ({ data, onItemSelected, children: renderItem }) => {

  const items = data.map(item => {
    const { id } = item
    const label = renderItem(item);

    return (
      <li key={id} onClick={() => onItemSelected(id)}>
        {label}
      </li>
    );
  });

  return (
    <ul className="item-list">
      {items}
    </ul>
  )
}

export default ItemList