// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

import axios from "axios"

export async function handler(event, context) {
  try {
    const response = await axios.get("https://www.cinemaspathegaumont.com/api/show/" + event.queryStringParameters.slug + "/showtimes/cinema-pathe-plan-de-campagne/" + event.queryStringParameters.day, {headers: {Accept: "application/json"}})
    const showTimes = response.data
    // var result = Object.keys(shows)
    //   .map(function(key) {
    //     return {
    //       name: key,
    //       ...shows[key]
    //     };
    //   });

    // console.log(result);
    return {
      statusCode: 200,
      body: JSON.stringify({result: showTimes})
    }

  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message}) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
