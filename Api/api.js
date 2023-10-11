import {apiHelper} from '../helpers/apiHelper/index';
import {
  TodoAPiUrl,
  TodoEndPoint,
  moviesApiUrl,
  NYCShoolApi,
} from '../config/ApiConfig.js';

export const moviesApi = {
  getMovies: page => {
    return new Promise((resolve, reject) => {
      apiHelper(
        'GET',
        moviesApiUrl,
        {page},
        {
          Authorization: 'Bearer e196c4dc7f1c579d934c1e6444b36924',
        },
        resolve,
        reject,
      );
    });
  },
};

export const todosApi = {
  getTodos: () => {
    return new Promise((resolve, reject) => {
      apiHelper('GET', TodoAPiUrl, TodoEndPoint, {}, {}, resolve, reject);
    });
  },
};

export const NYCSchools = {
  getNycSchools: () => {
    return new Promise((resolve, reject) => {
      apiHelper(
        'GET',
        NYCShoolApi,
        {},
        {},
        data => {
          resolve(data);
        },
        error => {
          reject(error);
        },
      );
    });
  },
};
