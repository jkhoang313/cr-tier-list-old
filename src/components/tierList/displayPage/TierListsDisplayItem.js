import React, { Component } from 'react';
import { Row, Col, Collapse, CardBlock } from 'reactstrap';
import { browserHistory } from 'react-router';
import cn from 'classnames';
import MdKeyboardArrowDown from 'react-icons/lib/md/keyboard-arrow-down';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import MdThumbDown from 'react-icons/lib/md/thumb-down';

import Tier from '../Tier';


export default class TierListsDisplayItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tierListOpen: false
    }
  }

  renderTiers() {
    const { tiers } = this.props.tierList

    return tiers.map((tier, index) =>
      <Tier
        tier={tier}
        key={index}
        displayOnly={true}/>
    )
  }

  openTierList() {
    this.setState({
      tierListOpen: !this.state.tierListOpen
    })
  }

  goToTierList(tierId) {
    browserHistory.push(`/tier-list/${tierId}`)
  }

  render() {
    const { id, creator, title, list_type, description,
            updated_at, upvotes } = this.props.tierList;

    return (
      <Row className={`tier-list-item theme-${list_type}`}>
        <Col xs="12" md="12">
          <Row className="header">
            <div className="header-main">
              <h3
                className="clickable"
                onClick={() => this.goToTierList(id)}>{title}</h3>
              <h3 className="right clickable">
                {creator.user_name}
              </h3>
            </div>
            <div className="header-sub">
              <h3 className="date-modified">
                Date Modified: {updated_at}
              </h3>
              <h3 className="right">
                { upvotes }
                { upvotes > -1 ? <MdThumbUp/> : <MdThumbDown/> }
              </h3>
            </div>
          </Row>
          <Row className="description">
            <h6>{ description }</h6>
          </Row>
          <Row>
            <Collapse isOpen={this.state.tierListOpen}>
              <CardBlock>
                { this.renderTiers() }
              </CardBlock>
            </Collapse>
          </Row>
          <Row
            className="toggle-tier-list-item"
            onClick={() => this.openTierList()}>
            <MdKeyboardArrowDown
              className={cn("clickable", {"flipped": this.state.tierListOpen})}/>
          </Row>
        </Col>
      </Row>
    )
  }
}
