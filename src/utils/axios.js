import Axios from 'axios';
import { isPlainObject } from 'lodash';
import config from 'config';
import { camelizeKeys, snakeizeKeys } from './transform';

const axios = Axios.create({
  baseURL: `${config.url}${config.version}`,
  headers: config.headers,
  responseType: 'json',
  transformRequest(data) {
	if (isPlainObject(data)) {
	  return JSON.stringify(camelizeKeys(data));
	}

	return data;
  },
  transformResponse(data) {
	return camelizeKeys(data);
  }
});

axios.interceptors.request.use(conf => {
  if (conf.params) {
	// eslint-disable-next-line no-param-reassign
	conf.params = camelizeKeys(conf.params);
  }

  return conf;
});

export default axios;
