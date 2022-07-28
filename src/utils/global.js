import axios from "axios";

const GetMySecretApiUrl = 'https://q76c9kea71.execute-api.sa-east-1.amazonaws.com/dev';

const apiAxios = axios.create({
  baseURL: GetMySecretApiUrl,
});

const GetMySecretApiMethods = {
  async post(url, data) {
    try {
      const response = await apiAxios.post(`/${url}`, data);
      return response;
    } catch (err) {
      throw new Error(err);
    }
  },

  async get(url) {
    try {
      const response = await apiAxios.get(`/${url}`);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  },

  async delete(url, data) {
    try {
      const response = await apiAxios.delete(`/${url}`, {
        data,
      });
      return response;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export { GetMySecretApiMethods, GetMySecretApiUrl };
