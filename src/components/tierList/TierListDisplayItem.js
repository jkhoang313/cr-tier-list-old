import React, { Component } from 'react';
import { Row, Col, Collapse, CardBlock } from 'reactstrap';

// import * as actionCreators from '../../state/actions';
import Tier from './Tier';


class TierListDisplayItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tierListOpen: false
    }
  }

  renderTiers() {
    const { tiers } = this.props.tierList

    return tiers.map((tier, index) =>
      <Tier tier={tier} key={index} />
    )
  }

  openTierList() {
    this.setState({
      tierListOpen: !this.state.tierListOpen
    })
  }

  render() {
    const { creator, name, description, date_modified } = this.props.tierList;

    return (
      <Row className="tier-list-item">
        <Col xs="12" md="12">
          <Row className="header">
            <h3>{name}</h3>
            <h3 className="right">{creator}</h3>
            <h3 className="date-modified">
              Date Modified: {date_modified}
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

export default TierListDisplayItem
