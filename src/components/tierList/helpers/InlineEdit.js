import React, { Component } from 'react';
import $ from 'jquery';


export default class InlineEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      text: this.props.text
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
    const { text } = this.props;

    return (
      <h6 onClick={this.handleClick}>{text}</h6>
    )
  }

  renderInput() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          onChange={this.handleInputChange}
          onBlur={this.handleInputBlur}
          value={this.state.text}
          autoFocus/>
      </form>
    )
  }

  handleFormSubmit(event) {
    event.preventDefault();
    $('.inline-edit input').blur();
  }

  handleInputChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleInputBlur() {
    const { text } = this.state;

    this.setState({
      isEditing: false
    });

    this.props.onSubmit(text);
  }

  render () {
    return (
      <div className="inline-edit">
      { this.state.isEditing && !this.props.displayOnly ?
        this.renderInput() : this.renderDescription()
      }
      </div>
    )
  }
};
