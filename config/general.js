import * as dotenv from "dotenv";
dotenv.config();

/**
 * --------------------------------------------
 * APP
 * - PORT
 * - NODE_ENV
 * - TIMEZONE
 * --------------------------------------------
 */
export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV || "development";
export const TIMEZONE = process.env.TIMEZONE || "Asia/Jakarta";

/**
 * --------------------------------------------
 * REDIS
 * - PORT
 * - HOST
 * - PASSWORD
 * --------------------------------------------
 */
export const REDIS_PORT = process.env.REDIS_PORT || 6379;
export const REDIS_HOST = process.env.REDIS_HOST || "127.0.0.1";
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD || "";