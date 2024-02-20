import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface ApiClientOptions {
   baseUrl: string;
   apiKey: string;
}

export class ApiClient {
   private axios: AxiosInstance;

   constructor(private options: ApiClientOptions) {
      this.axios = this.createAxiosInstance();
   }

   private createAxiosInstance() {
      const instance = axios.create({
         baseURL: this.options.baseUrl,
         headers: {
            'Content-Type': 'application/json',
         },
         params: {
            appid: this.options.apiKey,
            units: 'metric',
         },
      });

      return instance;
   }

   async sendRequest<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 [s]

      const response = await this.axios.request<T>({
         ...config,
         signal: controller.signal,
      });

      clearTimeout(timeoutId);
      return response;
   }
}
