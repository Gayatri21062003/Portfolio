import {Box, Stack} from "@mui/material";

import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";

function Dashboard() {
    return (
        <Box>
            <Stack direction={"column"}>
                <Home />
                <About />
            </Stack>
        </Box>
    );
}

export default Dashboard;
