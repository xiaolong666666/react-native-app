import axios from "axios";

const instance = axios.create();

const BASE_URL = `http://192.168.31.144:3006/api`;

instance.interceptors.response.use((res) => res.data);

export const get = (opts: any) =>
  instance({
    methods: "get",
    ...opts,
    url: `${BASE_URL}${opts.path || ""}`,
  });
