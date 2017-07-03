import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bindAll } from 'lodash';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form,
         FormGroup, Label, Input, FormText, Button } from 'reactstrap';

import * as actionCreators from '../../../state/actions';


class EditTierListModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ""
    }

    bindAll(this, ['handleInputChange', 'submitForm'])
  }

  componentWillReceiveProps(nextProps) {
    const { tierList } = this.props;

    if (tierList.isFetchingTierList && !nextProps.tierList.isFetchingTierList) {
      const initialState = {
        title: nextProps.tierList.title,
      }
      const tierName = nextProps.tierList.tiers.forEach((tier, index) => {
        initialState[`tier-${index}`] = {
          name: tier.name,
          description: tier.description
        }
      })

      this.setState(initialState)
    }
  }

  handleInputChange(event) {
    const tierNameSplit = event.target.name.split('-');
    const stateName = tierNameSplit[0] + "-" + tierNameSplit[1]

    this.setState({
      [stateName]: {
        ...this.state[stateName],
        [tierNameSplit[2]]: event.target.value
      }
    })
  }

  renderTierInputs() {
    const { tiers } = this.props.tierList;

    return tiers.map((tier, index) => {
      return (
        <FormGroup key={index}>
          <Input
            type="text"
            name={`tier-${index}-name`}
            onChange={this.handleInputChange}
            placeholder="Enter the tier name"
            value={this.state[`tier-${index}`].name}
            />
          <Input
            type="text"
            name={`tier-${index}-description`}
            onChange={this.handleInputChange}
            placeholder="Enter the tier description"
            value={this.state[`tier-${index}`].description}
            />
        </FormGroup>
      )
    })
  }

  submitForm() {
    const { updateTierListDetails, tierList } = this.props;

    updateTierListDetails(tierList.id, this.state);
  }

  render() {
    const { isOpen, toggle, tierList } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        toggle={toggle}>
        <Form>
          <ModalBody>
            <FormGroup>
              <Input
              type="text"
              name="title"
              onChange={this.handleInputChange}
              placeholder="Enter the tier list title"
              value={this.state.title}
            />
            </FormGroup>
          </ModalBody>
          <ModalBody>
            { this.renderTierInputs() }
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.submitForm}>Submit</Button>
            <Button onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return state
};

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTierListModal);
