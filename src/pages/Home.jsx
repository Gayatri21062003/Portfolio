import {Box, Button, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import React from "react";
import MyProfile from "../assets/MyProfile.png";
import {DownloadSimple} from "phosphor-react";
// import resume from "../resume/Gayatri Sontakke_Resume.pdf";

function Home() {
    const theme = useTheme();
    const isMobileOrTab = useMediaQuery(theme.breakpoints.down("md"));

    const handleResumeDownload = () => {
        const link = document.createElement("a");
        link.href = "/resume/Gayatri Sontakke_Resume.pdf";
        link.download = "Gayatri_Sontakke_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <Box>
            {!isMobileOrTab && (
                <Box
                    paddingX={40}
                    paddingY={25}
                    sx={{
                        width: "100vw",
                        height: "auto",
                        position: "relative",
                        textAlign: "start",
                        backgroundColor: "#ebfffa",
                    }}
                >
                    <Stack direction={"column"} spacing={3}>
                        <Typography variant="h2" fontFamily={"Georgia"}>
                            Hello! I'm <br /> Gayatri Sontakke
                        </Typography>
                        <Typography variant="body1" sx={{fontSize: "18px", maxWidth: "600px", fontFamily: "Georgia"}}>
                            Frontend developer | Specializing in React, Javascript, Express Js, MongoDB and Modern web
                            technologies.
                        </Typography>
                        <Stack direction="row">
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: 3,
                                    paddingY: 1,
                                    paddingX: 2,
                                    backgroundColor: "#18C29C",
                                    color: "white",
                                    fontWeight: "bold",
                                    ":hover": {
                                        color: "white",
                                        borderColor: "black",
                                    },
                                }}
                                onClick={() => {
                                    handleResumeDownload();
                                }}
                            >
                                Download My CV
                                <DownloadSimple size={25} weight="bold" style={{paddingLeft: "5px"}} />
                            </Button>
                        </Stack>
                    </Stack>
                    <Box sx={{position: "absolute", right: "13%"}} bottom={150} zIndex={1000}>
                        <img src={MyProfile} alt="My Profile" />
                    </Box>
                </Box>
            )}

            {isMobileOrTab && (
                <Box sx={{width: "100vw", backgroundColor: "#ebfffa"}} p={5}>
                    <Stack direction={"column"} spacing={2}>
                        <Typography variant="h5" fontFamily={"Georgia"} sx={{whiteSpace: "pre-line"}}>
                            Hello! I'm {"\n"}Gayatri Sontakke
                        </Typography>
                        <Typography variant="body1" fontFamily={"Georgia"}>
                            Frontend developer | Specializing in React, Javascript, Express Js,
                            <br /> MongoDB and Modern web technologies.
                        </Typography>
                        <Stack direction="row">
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: 3,
                                    paddingY: 1,
                                    paddingX: 2,
                                    backgroundColor: "#18C29C",
                                    color: "white",
                                    fontWeight: "bold",
                                    ":hover": {
                                        color: "white",
                                        borderColor: "black",
                                    },
                                }}
                                onClick={() => {
                                    handleResumeDownload();
                                }}
                            >
                                Download My CV
                                <DownloadSimple size={25} weight="bold" style={{paddingLeft: "5px"}} />
                            </Button>
                        </Stack>
                        <Box>
                            <img src={MyProfile} alt="My Profile " />
                        </Box>
                    </Stack>
                </Box>
            )}
        </Box>
    );
}

export default Home;
