import axios from 'axios';

export function getData(url) {
  return axios.get(url)
    .then(resp => {
      return resp.data;
    });
}
