import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, ModalBody, Form, FormGroup, Label, Input, Button
       } from 'reactstrap';
import { bindAll } from 'lodash';
// import { slide as SideMenu } from 'react-burger-menu';

import { fetchUser, handleLoginModal, login
       } from '../state/actions.js';
import NavBar from './NavBar.js';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }

    bindAll(this, "handleEmailChange", "handlePasswordChange", "handleLoginSubmit")
  }

  componentWillMount() {
    if (this.props.loggedIn) {
      this.props.fetchUser();
    }
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleLoginSubmit(event) {
    event.preventDefault();

    this.props.login(this.state)
  }

  render() {
    const { loginModalOpen, handleLoginModal } = this.props;

    return (
      <main>
        <NavBar />
        <Modal
          className="login-modal"
          isOpen={loginModalOpen}
          toggle={() => handleLoginModal(!loginModalOpen)}>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Email:</Label>
                <Input
                  type="text"
                  name="email"
                  onChange={this.handleEmailChange}
                  placeholder="Enter your email"/>
                <Label>Password:</Label>
                <Input
                  type="password"
                  name="password"
                  onChange={this.handlePasswordChange}
                  placeholder="Enter your email"/>
                <Button
                  type="submit"
                  onClick={this.handleLoginSubmit}>Submit</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
        { this.props.children }
      </main>
    )
  }
};

function mapStateToProps(state) {
  return {
    loginModalOpen: state.auth.loginModalOpen,
    loggedIn: state.auth.loggedIn
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchUser,
    login,
    handleLoginModal
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// <SideMenu />
