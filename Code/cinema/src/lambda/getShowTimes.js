// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

import axios from "axios"

let showTimesCache = {}; // Defined outside the function globally

export async function handler(event, context) {
  try {
    var result = null;
    if (event.queryStringParameters.slug + '_' + event.queryStringParameters.day in showTimesCache) {
      console.log(`Cache hit for ${event.queryStringParameters.slug}_${event.queryStringParameters.day}`);
      result = showTimesCache[event.queryStringParameters.slug + '_' + event.queryStringParameters.day];
    } else {
      const response = await axios.get("https://www.cinemaspathegaumont.com/api/show/" + event.queryStringParameters.slug + "/showtimes/cinema-pathe-plan-de-campagne/" + event.queryStringParameters.day, {headers: {Accept: "application/json"}})
      result = response.data;
      console.log(`Writing to cache for ${event.queryStringParameters.slug}`);
      showTimesCache[event.queryStringParameters.slug + '_' + event.queryStringParameters.day] = result;
    }
    return {
      statusCode: 200,
      body: JSON.stringify({result: result})
    }
  } catch
    (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message}) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
