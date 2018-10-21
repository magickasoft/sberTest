import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { debounce } from 'lodash';


class UsersContainer extends Component {
  componentDidMount() {}

  searchQuery = debounce(() => {}, 250);

  render() {

    return (
      <div>
        <Row type="flex" justify="start">
          <Col span={7}>
            <h3>Projects List</h3>
          </Col>
        </Row>
      </div>
    );
  }
}

UsersContainer.propTypes = {
};

const select = () => ({});

const bindActions = {
};

export default connect(select, bindActions)(UsersContainer);