import http from 'k6/http'
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.2/index.js';
import { ENDPOINT } from '../../data/endpoint.js';

export default function (id) {
    let res = http.get(`${ENDPOINT.baseUrl}${ENDPOINT.v1.get.listUser}?page=${id}`)

    describe('Success Get User', ()=> {
        expect(res.status, 'response status').to.equal(200);
    })
}
