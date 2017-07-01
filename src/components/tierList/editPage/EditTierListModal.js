import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bindAll } from 'lodash'
import { Modal, ModalHeader, ModalBody, ModalFooter, Form,
         FormGroup, Label, Input, FormText, Button } from 'reactstrap';

import * as actionCreators from '../../../state/actions';


class TierListEditOptions extends Component {
  constructor(props) {
    super(props)

    bindAll(this, ['handleInputChange', 'submitForm'])
  }

  componentWillReceiveProps(nextProps) {
    const { tierList } = this.props;

    if (tierList.isFetchingTierList && !nextProps.tierList.isFetchingTierList) {
      console.log(nextProps.tierList)
      const initialState = {
        name: nextProps.tierList.name,
      }
      const tierName = nextProps.tierList.tiers.forEach((tier, index) => {
        initialState[`tier${index}`] = tier.name
      })

      this.setState(initialState)
    }
  }

  handleModalState() {
    this.setState({
      editModalOpen: !this.state.editModalOpen
    });
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderTierInputs() {
    const { tiers } = this.props.tierList;

    return tiers.map((tier, index) => {
      return (
        <FormGroup key={index}>
          <Input
            type="text"
            name={`tier${index}`}
            onChange={this.handleInputChange}
            placeholder="Enter the tier name"
            value={this.state[`tier${index}`]}
            />
        </FormGroup>
      )
    })
  }

  submitForm() {
    // TODO
  }

  render() {
    const { isOpen, toggle, tierList } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        toggle={toggle}>
        <Form>
          <ModalHeader>
            {/* <FormGroup>
              <Input
              type="email" name="email"
              id="exampleEmail"
              placeholder="with a placeholder"/>
            </FormGroup> */}
          </ModalHeader>
          <ModalBody>
            { this.renderTierInputs() }
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.submitForm}>Submit</Button>
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
)(TierListEditOptions);
