const devBaseURL = "http://123.207.32.32:9001/";
const productBaseURL = "http://123.207.32.32:9001/"

export const BASE_URL = process.env.NODE_ENV === "production" ? devBaseURL : productBaseURL;

export const TIMEOUT = 5000;