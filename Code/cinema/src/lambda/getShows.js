// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

import axios from "axios"

let showsCache = {}; // Defined outside the function globally

export async function handler(event, context) {
  try {
    var result = null;
    if ('cinema-pathe-plan-de-campagne' in showsCache) {
      console.log(`Cache hit for cinema-pathe-plan-de-campagne`);
      result = showsCache['cinema-pathe-plan-de-campagne'];
    } else {
      const response = await axios.get("https://www.cinemaspathegaumont.com/api/cinema/cinema-pathe-plan-de-campagne/shows", {headers: {Accept: "application/json"}})
      const shows = response.data.shows
      var result = [];
      for (let [key, value] of Object.entries(shows)) {
        const responseDetail = await axios.get("https://www.cinemaspathegaumont.com/api/show/" + key, {headers: {Accept: "application/json"}})
        result.push(responseDetail.data);
      }

      console.log(`Writing to cache for cinema-pathe-plan-de-campagne`);
      showsCache['cinema-pathe-plan-de-campagne'] = result.reverse();
    }
    // console.log(result);
    return {
      statusCode: 200,
      body: JSON.stringify({result: result})
    }

  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message}) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
