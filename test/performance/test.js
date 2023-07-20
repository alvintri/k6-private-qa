// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 10, duration: '1s' }

export default function main() {
  let response

  group('page_1 - https://kasirdemo.belajarqa.com/register', function () {
    response = http.post(
      'https://kasir-api.belajarqa.com/registration',
      '{"name":"asad","email":"asda","password":"asdsad"}',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    sleep(4.6)

    response = http.post(
      'https://kasir-api.belajarqa.com/authentications',
      '{"email":"asdad","password":"asdad"}',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
  })
}