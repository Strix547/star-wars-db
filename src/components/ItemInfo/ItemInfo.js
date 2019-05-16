import React, { Component } from 'react'

import './ItemInfo.scss'
import SwapiService from '../../services/SwapiService'
import LoadSpinner from '../LoadSpinner';

const Record = ({ item, field, label }) => {
  return (
    <li>
      <span>{label}</span>:
      <span> {item[field]}</span>
    </li>
  )
}

export {
  Record
};

export default class ItemInfo extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    img: null,
    isLoad: false
  }

  componentDidMount = () => {
    this.updateItem();
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
      this.setState({
        isLoad: false
      });
    }
  }

  updateItem = () => {
    const { itemId, getItemInfo, getImageURL } = this.props
    
    if (!itemId) return;

    getItemInfo(itemId)
      .then(item => {
        this.setState({
          item,
          img: getImageURL(itemId),
          isLoad: true
        });
      });
  }

  render() {

    if (!this.state.item) return null;

    const { item, img, isLoad } = this.state
    const spinner = isLoad ? null : <LoadSpinner />;
    const content = isLoad ? <ItemInfoView item={item} img={img} {...this.props} /> : null;
    return (
      <div className="item-info">
        {spinner}
        {content}
      </div>
    )
  }
}

const ItemInfoView = ({ item, children, img }) => {
  const { name } = item
  return (
    <React.Fragment>
      <img src={img} alt={name} />
      <ul>
        {
          React.Children.map(children, (child) => {
            return React.cloneElement(child, { item });
          })
        }
      </ul>
    </React.Fragment>
  );
}
