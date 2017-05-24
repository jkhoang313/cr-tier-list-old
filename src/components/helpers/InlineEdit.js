import React, { Component } from 'react';
import $ from 'jquery';
import { Form, FormGroup, Input } from 'reactstrap';


export default class InlineEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      description: this.props.description
    }

    this.handleClick = this.handleClick.bind(this)
    this.renderDescription = this.renderDescription.bind(this)
    this.renderInput = this.renderInput.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }

  handleClick() {
    this.setState({
      isEditing: true
    })
  }

  renderDescription() {
    const { description } = this.props;

    return (
      <h6 onClick={this.handleClick}>{description}</h6>
    )
  }

  renderInput() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <FormGroup>
          <Input
            onChange={this.handleInputChange}
            onBlur={this.handleInputBlur}
            value={this.state.description}
            autoFocus/>
        </FormGroup>
      </Form>
    )
  }

  handleFormSubmit(event) {
    event.preventDefault();
    $('.form-group input').blur();
  }

  handleInputChange(event) {
    this.setState({
      description: event.target.value
    })
  }

  handleInputBlur() {
    const { description } = this.state;
    const { tierId } = this.props;

    this.setState({
      isEditing: false
    })

    this.props.onSubmit({ tierId, description });
  }

  render () {
    return (
      <div className="inline-edit">
      { this.state.isEditing ?
        this.renderInput() : this.renderDescription()
      }
      </div>
    )
  }
};
