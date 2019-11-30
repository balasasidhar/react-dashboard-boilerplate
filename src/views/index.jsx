import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import loadable from '@loadable/component';

import routes from './routes.config';

const AsyncPage = loadable(props => import(`./${props.page}`), {
  fallback: <div>Loading...</div>
});

export class Dashboard extends Component {
  static propTypes = {
    prop: PropTypes.string
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="4" lg="3" className="bg-dark">
            <ul>
              {routes.map(({ label, path }) => (
                <li key={label}>
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col>
            <Switch>
              {routes.map(({ component, exact, label, path }) => (
                <Route exact={exact} key={label} path={path}>
                  <AsyncPage page={component}></AsyncPage>
                </Route>
              ))}
            </Switch>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Dashboard);
