import axios from "axios";
import { getApiUrl } from "../get_env";

export const mockInstance = axios.create({ baseURL: getApiUrl() });
