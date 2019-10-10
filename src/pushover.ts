import assert from 'assert';
import axios, { AxiosRequestConfig } from 'axios';
import qs from 'querystring';

export class PushOverConnector {

  /**
   * @param {string} user - PushOver username
   * @param {string} token - PushOver token for specified user
  */
  constructor(private user: string, private token: string) {
  }

  async sendMessage(message: string) {
    const config: AxiosRequestConfig = {
      url: 'https://api.pushover.net/1/messages.json',
      method: 'post',
      data: qs.stringify({ token: this.token, user: this.user, message })
    };
    return axios(config);
  }
}
