export const BASE_PATH = "https://api.producthunt.com".replace(/\/+$/, "");
export const API_V = "/v2"

export const PRODUCTHUNT_API_URL = new URL(`${BASE_PATH}${API_V}`)