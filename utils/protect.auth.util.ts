import { getItemFromLS } from "./LS_STORAGE";

export const isAuthenticated = () => getItemFromLS("token");
