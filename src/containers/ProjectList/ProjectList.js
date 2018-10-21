import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Query, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment-timezone';
import { Select, Row, Col } from 'components';
import { ErrorMessage, Loading, ProjectItems, InputItem } from './components';

const SEARCH_REPOSITORIES_BY_QUERY = gql`
  query SearchRepositoriesMostTopStar($queryString: String!, $limit: Int!) {
    search(query: $queryString, type: REPOSITORY, first: $limit) {
      repositoryCount
      pageInfo {
        endCursor
        startCursor
      }
      edges {
        node {
          ... on Repository {
            name
            descriptionHTML
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
            updatedAt
          }
        }
      }
    }
  }
`;

const LICENSES_LIST = gql`
  query licensesList {
    licenses {
      id
      implementation
      key
      limitations {
        key
      }
      name
      nickname
    }
  }
`;


const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');

class ProjectListContainer extends PureComponent {
  static propTypes = {
    licensesList: PropTypes.object.isRequired
  };
  state = {
    limit: 30,
    licenseName: 'All',
    query: ''
  };

  handleChangeLicense = licenseName => {
    this.setState({ licenseName });
  };

  handleChangeQuery = query => {
    this.setState({ query });
  };

  renderSelectOption = ({ name, key }, index) => <Select.Option key={index} value={key}>{name}</Select.Option>;

  renderLicensesList = () => {
    const { licensesList } = this.props;
    return (licensesList.licenses || []).map(this.renderSelectOption);
  };

  renderProjectsList = ({ data, loading, error }) => {
    if (error) {
      return <ErrorMessage error={error} />;
    }

    const { search } = data;

    if (loading || !search) {
      return <Loading />;
    }

    return <ProjectItems items={search.edges}/>;
  };

  get variables() {
    const { licenseName, query, limit } = this.state;
    const licenseKey = licenseName === 'All' ? '' : ` license:${licenseName}`;
    const queryString = query ? ` ${query}` : '';
    return {
      queryString:`created:>${startOfMonth}${licenseKey}${queryString}`,
      limit
    };
  }
  render() {
    const { licenseName } = this.state;

    return (
      <Fragment>
        <h3>Projects List</h3>
        <Row type="flex">
          <Col span={6}>
            <Select
              showSearch
              style={{ width: '100%' }}
              value={licenseName}
              placeholder="Select a license type"
              onChange={this.handleChangeLicense}
            >
              <Select.Option value='All'>All licenses types</Select.Option>
              {this.renderLicensesList()}
            </Select>
          </Col>
          <Col span={6}>
            <InputItem onEndChange={this.handleChangeQuery} />
          </Col>
        </Row>
        <Query
          query={SEARCH_REPOSITORIES_BY_QUERY}
          variables={this.variables}
        >
          {this.renderProjectsList}
        </Query>
      </Fragment>
    );
  }
}

export default graphql(LICENSES_LIST, { name: 'licensesList' })(ProjectListContainer);