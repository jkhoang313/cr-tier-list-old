import React, { Component } from 'react';
import { Row, Col, Collapse, CardBlock } from 'reactstrap';
import { browserHistory } from 'react-router';

// import * as actionCreators from '../../../state/actions';
import Tier from '../Tier';


class TierListsDisplayItem extends Component {
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
    const { id, creator, title, description, updated_at } = this.props.tierList;

    return (
      <Row className="tier-list-item">
        <Col xs="12" md="12">
          <Row className="header">
            <h3
              className="clickable"
              onClick={() => this.goToTierList(id)}>{title}</h3>
            <h3
              className="right clickable">
              {creator.user_name}
            </h3>
            <h3 className="date-modified">
              Date Modified: {updated_at}
            </h3>
          </Row>
          <Row className="description">
            <h6>{description}</h6>
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
            <h6>Click</h6>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default TierListsDisplayItem
