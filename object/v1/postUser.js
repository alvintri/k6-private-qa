import http from 'k6/http'
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.2/index.js';
import { ENDPOINT } from '../../data/endpoint.js';
import { CREATE_USER_DATA } from '../../data/createUser.js';


export default function (id) {
    let res = http.post(`${ENDPOINT.baseUrl}${ENDPOINT.v1.get.listUser}`,JSON.stringify(CREATE_USER_DATA))

    describe('Success Get User', ()=> {
        expect(res.status, 'response status').to.equal(201);
    })
    return res.body.id
}