// This will export to HTML as filename "result.html" AND also stdout using the text summary
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

import getUser from "../../object/v1/getUser.js";
import postUser from "../../object/v1/postUser.js";

export const options = {
    ext: {
      loadimpact: {
        projectID: 3577851,
        // Test runs with the same name groups test runs together
        name: "YOUR TEST NAME"
      }
    }
  }

export default function(){
    const respGetUserId =  postUser()
    getUser(respGetUserId)
}

export function handleSummary(data) {
  return {
    "report.html": htmlReport(data),
  };
}