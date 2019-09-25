import React, {Component, useState, useEffect} from "react";
import {render} from "react-dom";
import axios from 'axios';

import {grommet, Grid, Grommet, ResponsiveContext, Box} from "grommet";

import {CinemaCard} from "./components/Cinema/Card";
import {AppHeader} from "./components/Layout/AppHeader";

import {usePosition} from './components/Common/usePosition';

const App = () => {
  const {latitude, longitude, timestamp, accuracy, error} = usePosition(true);
  const [data, setData] = useState({zone: null});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        '/.netlify/functions/getZone?lat=' + latitude + '&long=' + longitude,
      );
      console.log(response.data)
      setData(response.data);
    };
    fetchData();
  }, [latitude,longitude]);

  return (
    <Grommet theme={grommet}>
      {/*<code>*/}
      {/*  zone: {data.zone}<br/>*/}

      {/*  latitude: {latitude}<br/>*/}
      {/*  longitude: {longitude}<br/>*/}
      {/*  timestamp: {timestamp}<br/>*/}
      {/*  accuracy: {accuracy && `${accuracy}m`}<br/>*/}
      {/*  error: {error}*/}
      {/*</code>*/}
      <AppHeader
        appName="6n3m4"
        zone={data.zone}
        // appIcon={<Menu />}
        // userSession={userSession}
      />
      <Box flex overflow="auto" gap="medium" pad="medium">
        <CinemaCard/>
      </Box>
    </Grommet>
  );
}

render(<App/>, document.getElementById("root"));
