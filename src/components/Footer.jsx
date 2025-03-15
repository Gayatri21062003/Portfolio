import {Box, IconButton, List, ListItem, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import React from "react";
import Logo from "../assets/Logo.png";
import {FacebookLogo, InstagramLogo, LinkedinLogo} from "phosphor-react";

function Footer() {
    const theme = useTheme();
    const isMobileOrTab = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Box p={isMobileOrTab ? 2 : 5} sx={{width: "100vw", height: "auto", backgroundColor: "#a6f5e1"}}>
            <Stack
                direction={isMobileOrTab ? "column" : "row"}
                spacing={isMobileOrTab ? 2 : 10}
                justifyContent={"space-evenly"}
            >
                <Stack direction={"column"} spacing={isMobileOrTab ? 1 : 2}>
                    <Box display={"flex"} justifyContent={isMobileOrTab ? "center" : "flex-start"}>
                        <img src={Logo} alt="Gayatri Sontakke" width={isMobileOrTab ? "50%" : "70%"} />
                    </Box>
                    <Box display={"flex"} justifyContent={isMobileOrTab ? "center" : "flex-start"}>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "18px",
                                maxWidth: "500px",
                                fontFamily: "Georgia",
                                textAlign: isMobileOrTab ? "center" : "start",
                            }}
                        >
                            Frontend developer | Specializing in React, Javascript, Express Js, MongoDB and Modern web
                            technologies.
                        </Typography>
                    </Box>
                    <Box display={"flex"} justifyContent={isMobileOrTab ? "center" : "flex-start"}>
                        <Typography
                            component="a"
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=gayatrisontakke203@gmail.com&su=Subject Here&body=Your Message Here"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            gayatrisontakke203@gmail.com
                        </Typography>
                    </Box>
                </Stack>

                <Stack direction={"column"}>
                    <Box textAlign={isMobileOrTab ? "center" : "start"}>
                        {/* Title */}
                        <Typography variant={isMobileOrTab ? "body1" : "h6"} fontWeight="bold">
                            Explore Links
                        </Typography>

                        {/* Navigation Links */}
                        <List sx={{padding: 0}}>
                            {["Home", "About", "Skills", "Projects", "Resume", "Certifications", "Contact"].map(
                                (menu, index) => (
                                    <ListItem key={index} sx={{padding: "4px 0"}}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                cursor: "pointer",
                                                "&:hover": {
                                                    color: "white",
                                                },
                                                textAlign: isMobileOrTab ? "center" : "start",
                                                width: "100%",
                                            }}
                                        >
                                            {menu}
                                        </Typography>
                                    </ListItem>
                                )
                            )}
                        </List>
                    </Box>
                </Stack>

                <Stack direction={"column"}>
                    <Box textAlign={isMobileOrTab ? "center" : "start"}>
                        {/* Title */}
                        <Typography variant={isMobileOrTab ? "body1" : "h6"} fontWeight="bold">
                            My Services
                        </Typography>

                        {/* Navigation Links */}
                        <List sx={{padding: 0}}>
                            {["UI/UX Design", "Mobile App", "Graphics Design", "Web Developer"].map((menu, index) => (
                                <ListItem key={index} sx={{padding: "4px 0"}}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            cursor: "pointer",
                                            "&:hover": {
                                                color: "white",
                                            },
                                            textAlign: isMobileOrTab ? "center" : "start",
                                            width: "100%",
                                        }}
                                    >
                                        {menu}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Stack>
                <Stack direction={"column"}>
                    <Box textAlign={isMobileOrTab ? "center" : "start"}>
                        {/* Title */}
                        <Typography variant={isMobileOrTab ? "body1" : "h6"} fontWeight="bold">
                            Follow me
                        </Typography>

                        {/* Navigation Links */}
                        <List
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: isMobileOrTab ? "center" : "start",
                                gap: !isMobileOrTab && 2,
                                alignItems: "center",
                                paddingX: isMobileOrTab && 15,
                            }}
                        >
                            {[<LinkedinLogo size={32} />, <InstagramLogo size={32} />, <FacebookLogo size={32} />].map(
                                (menu, index) => (
                                    <ListItem key={index} sx={{padding: "4px 0"}}>
                                        <Typography sx={{textAlign: isMobileOrTab ? "center" : "start",cursor:"pointer"}}>
                                            {menu}
                                        </Typography>
                                    </ListItem>
                                )
                            )}
                        </List>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Footer;
