import React from "react";

import {
Heading,
  Anchor,
  Box,
  DropButton,
  Menu,
  ResponsiveContext,
  Text
} from "grommet";
import { Down } from "grommet-icons";

export const AppHeader = ({ appName, appIcon, userSession, open, zone }) => (
  <Box
    flex={false}
    tag="header"
    direction="row"
    background="white"
    align="center"
    justify="between"
    responsive={false}
  >


        <Heading level="2" margin="none" color={"accent-1"}>{appName}</Heading>
        <Text level="3" margin="none" color={"accent-2"}>
          <span style={{textTransform: 'capitalize'}}>{zone} </span>
           - Plan de campagne
      </Text>

{/*     <ResponsiveContext.Consumer> */}
{/*       {responsive => */}
{/*         responsive === "small" ? ( */}
{/*           <Menu */}
{/*             dropAlign={{ right: "right", top: "top" }} */}
{/*             label="view" */}
{/*             items={[ */}
{/*               { label: "Activity", href: "#" }, */}
{/*               { label: "Utilization", href: "#" }, */}
{/*               { label: "Virtual Machines", href: "#" } */}
{/*             ]} */}
{/*           /> */}
{/*         ) : ( */}
{/*           <Box */}
{/*             margin={{ left: "medium" }} */}
{/*             round="xsmall" */}
{/*             background={{ color: "white", opacity: "weak" }} */}
{/*             direction="row" */}
{/*             align="center" */}
{/*             pad={{ horizontal: "small" }} */}
{/*           > */}
{/*             <Anchor href="" label="Activity" margin="small" /> */}
{/*             <Anchor href="" label="Utilization" margin="small" /> */}
{/*             <Anchor href="" label="Virtual Machines" margin="small" /> */}
{/*           </Box> */}
{/*         ) */}
{/*       } */}
{/*     </ResponsiveContext.Consumer> */}
  </Box>
);

export default AppHeader;
