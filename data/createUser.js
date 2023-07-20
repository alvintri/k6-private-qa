import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export const CREATE_USER_DATA = {
    "name": `${randomString(8)}`,
    "job": "leader"
}