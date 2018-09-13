import axios from 'axios';

export default class RestDatasource {
  constructor() {
    this.baseUrl = 'https://api.github.com/search/';
  }

  generateUrl(type, language, keywords) {
    const url = `${this.baseUrl}${type.toLowerCase()}?q=${keywords}+language:${language}`;
    return url;
  }

  getData(url) {
    return axios.get(url, {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json",
      }
    });
  }
}