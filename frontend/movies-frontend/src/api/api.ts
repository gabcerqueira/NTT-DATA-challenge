import axios, { AxiosResponse } from "axios";
import { HttpRequest, HttpResponse } from "./@types/httpClient";

export class Api {
  BASE_URL: string;
  data: any;

  constructor() {
    this.BASE_URL = "http://localhost:3000";
  }

  async Fetch(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url: this.BASE_URL + data.url,
        method: data.method,
        data: data.body,
      });
    } catch (error) {
      throw new Error((error as Error).message);
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
