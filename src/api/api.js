import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "ab62f800-f5a7-4127-9816-8b29cb1ec3dd",
  },
});

export const userAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((respone) => {
        return respone.data;
      });
  },
};

export const getUsers = (currentPage, pageSize) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((respone) => {
      return respone.data;
    });
};

export const getUsers2 = (id) => {
  return instance.get(`follow?${id}`).then((respone) => {
    return respone.data;
  });
};
