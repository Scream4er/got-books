import React, { Component } from 'react'
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {CharacterPage, BooksPage, HousesPage} from '../pages';
import gotService from '../../services/gotService';

import './app.css';





export default class App extends Component {

  constructor () {
    super()

    this.hideRandomChar = this.hideRandomChar.bind(this);
  };

  gotService = new gotService();

  state = {
    visible: true,
    error: false
  };

  componentDidCatch () {
    console.log('error');
    this.setState({
      error: true
    })
  }

  hideRandomChar = () => {
    const {visible} = this.state;
    this.setState({
      visible: !visible
    });
  }

    render() {

        const {visible} = this.state;

        if (this.state.error) {
          return <ErrorMessage/>
        }

        return (
          <>
              <Container>
                  <Header />
              </Container>
              <Container>
                  <Row>
                      <Col lg={{size: 5, offset: 0}}>
                          {visible ? <RandomChar/> : null}
                      </Col>
                      <Col lg={{size: 5, offset: 0}}>
                          <button type="button" onClick={this.hideRandomChar}>Hide Random Characters</button>
                      </Col>
                  </Row>
              </Container>
          </>
        )
    }
}