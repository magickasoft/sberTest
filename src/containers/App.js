import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import baseRoutes from 'routes/app';

const { Content } = Layout;

const RouteWithSubRoutes = route => (
  <Route path={route.path} render={props => <route.component {...props} routes={route.routes} />} />
);

class App extends Component {
  renderContent = routes => (
    <Content >
      <Switch>
	    {routes.map(route => <RouteWithSubRoutes key={route.path} {...route} />)}
	    <Route component={() => <div>404</div>} />
      </Switch>
    </Content>
  );

  render() {

    return (
      <Layout>
        {this.renderContent(baseRoutes)}
      </Layout>
    );
  }
}

export default App;