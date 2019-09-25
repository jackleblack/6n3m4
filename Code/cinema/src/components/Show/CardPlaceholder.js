import React from "react";

import styled from "styled-components";
import {Box} from "grommet/es6";
import PlaceholderBox from "../Common/PlaceholderBox";


export const ShowCardPlaceholder = ({ size, ...rest }) => (
  <Box width={size !== "small" && "360px"} animation={["fadeIn", "slideDown"]} round="xsmall"
       elevation="large" overflow="hidden" border={{color: 'accent-1', size: 'medium', side: 'bottom'}}
  >
    <Box height="big" height="480px" width="360px" background='light-2'>
    </Box>
    <Box pad={{horizontal: "small"}}>
      <Box
        margin={{top: "small"}}
        direction="row"
        align="center"
        justify="between"
      >
        <Box gap="small">
          <PlaceholderBox height="15px" width="100px"/>
          <PlaceholderBox height="15px" width="200px"/>
          <PlaceholderBox height="15px" width="300px"/>
        </Box>
        <PlaceholderBox height="15px" width="100px" round="xsmall"
                     pad={{vertical: "xxsmall", horizontal: "medium"}}
                     background="accent-1"/>

      </Box>
      <Box
        tag="footer"
        direction="row"
        align="center"
        justify="between"
        pad={{left: "small", vertical: "small"}}
      >
        <PlaceholderBox height="15px" width="50px" round="small"
                     pad={{vertical: "xxsmall", horizontal: "medium"}}
                     background="accent-2"/>
      </Box>

    </Box>
  </Box>
);

export default ShowCardPlaceholder;
