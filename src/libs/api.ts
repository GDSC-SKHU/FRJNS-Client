import axios, { type AxiosError, type AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://frjns.ddns.net/api",
});

const interceptorResponseFulfilled = (response: AxiosResponse) => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }

  return Promise.reject(response.data);
};

interface ApiErrorScheme {
  message: string;
}

const interceptorResponseRejected = (error: AxiosError<{ error: ApiErrorScheme }>) => {
  if (error.response?.data?.error?.message) {
    return Promise.reject(new Error(error.response.data.error.message));
  }

  return Promise.reject(new Error("not expected error"));
};

instance.interceptors.response.use(interceptorResponseFulfilled, interceptorResponseRejected);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T, T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T, T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T, T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T, T>(...args);
}
