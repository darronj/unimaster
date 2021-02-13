import {
  Box,
  Button,
  Collapsible,
  DataTable,
  Grommet,
  Heading,
  Layer,
  Meter,
  ResponsiveContext,
  Tab,
  Tabs,
  Text,
} from "grommet";
import { FormClose, Tools } from "grommet-icons";
import React, { useState } from "react";
import { THEME } from "./constants";

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={THEME} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <AppBar>
              <Heading level="3" margin="none">
                Bearcat Uniform Master
              </Heading>
              <Button
                icon={<Tools />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
            <Box
              direction="row"
              flex
              overflow={{ horizontal: "hidden" }}
              pad="20px"
            >
              {!showSidebar || size !== "small" ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width="medium"
                    background="light-2"
                    elevation="small"
                    align="center"
                    justify="center"
                  >
                    sidebar
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background="light-2"
                    tag="header"
                    justify="end"
                    align="center"
                    direction="row"
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSidebar(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background="light-2"
                    align="center"
                    justify="center"
                  >
                    sidebar
                  </Box>
                </Layer>
              )}
              <Box
                className="main-viewport"
                flex
                align="center"
                justify="start"
              >
                <Tabs>
                  <Tab title="By Uniforms">
                    <Box pad="medium">
                      Page for listing and operating from a list of uniform
                      items.
                    </Box>
                    <Box>
                      <DataTable
                        columns={[
                          {
                            property: "name",
                            header: <Text>Name</Text>,
                            primary: true,
                          },
                          {
                            property: "percent",
                            header: "Complete",
                            render: (datum) => (
                              <Box pad={{ vertical: "xsmall" }}>
                                <Meter
                                  values={[{ value: datum.percent }]}
                                  thickness="small"
                                  size="small"
                                />
                              </Box>
                            ),
                          },
                        ]}
                        data={[
                          { name: "Alan", percent: 20 },
                          { name: "Bryan", percent: 30 },
                          { name: "Chris", percent: 40 },
                          { name: "Eric", percent: 80 },
                        ]}
                      />
                    </Box>
                  </Tab>
                  <Tab title="By Students">
                    <Box pad="medium">
                      Page for listing and operating from a list of students.
                    </Box>
                  </Tab>
                </Tabs>
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
