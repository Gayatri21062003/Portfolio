import {Box, Button, Drawer, IconButton, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import React from "react";
import Logo from "../assets/Logo.png";
import {List} from "phosphor-react";

function Header() {
    const theme = useTheme();
    const isMobileOrTab = useMediaQuery(theme.breakpoints.down("md"));

    const [openMobileMenu, setOpenMobileMenu] = React.useState(false);
    return (
        <Box>
            {/* Laptop Screen  */}
            {!isMobileOrTab && (
                <Box
                    p={2}
                    sx={{
                        width: "100vw",
                        height: "auto",
                        backgroundColor: theme.palette.background.paper,
                        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.25) ", //horizonatal vertical blur spread color
                        position: "sticky",
                        top: 0,
                        zIndex: 1000,
                    }}
                >
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
                        {/* Logo */}
                        <Stack>
                            <Box>
                                <img src={Logo} alt="Gayatri Sontakke" width={"80%"} />
                            </Box>
                        </Stack>

                        {/* Header Menu */}
                        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={5}>
                            {["HOME", "ABOUT", "PROJECTS", "SKILLS", "CONTACT"].map((menu, index) => (
                                <Typography>{menu}</Typography>
                            ))}
                        </Stack>

                        {/* Hire ME Button */}
                        <Stack>
                            <Button
                                variant="outlined"
                                sx={{
                                    textTransform: "none",
                                    color: "black",
                                    borderColor: "black",
                                    borderRadius: 15,
                                    paddingX: 5,
                                }}
                            >
                                Hire Me
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            )}

            {isMobileOrTab && (
                <Box
                    p={1}
                    sx={{
                        width: "100vw",
                        height: "auto",
                        backgroundColor: theme.palette.background.paper,
                        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.25) ",
                    }}
                >
                    <Stack direction={"row"} justifyContent={"space-evenly"} alignItems={"center"}>
                        <Stack direction={"row"} alignItems={"center"}>
                            <Box>
                                <img src={Logo} alt="Gayatri Sontakke" width={"50%"} />
                            </Box>
                        </Stack>
                        <Stack direction={"row"} alignItems={"center"}>
                            <IconButton
                                onClick={() => {
                                    setOpenMobileMenu(true);
                                }}
                            >
                                <List size={32} />
                            </IconButton>
                        </Stack>
                    </Stack>
                    <Box>
                        <Drawer anchor={"right"} open={openMobileMenu}>
                            <Box sx={{width: 200, height: "auto", backgroundColor: theme.palette.background.paper}}>
                                <Box
                                    p={1}
                                    sx={{
                                        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.25) ",
                                    }}
                                >
                                    <Stack direction={"row"} justifyContent={"start"} alignItems={"center"}>
                                        <IconButton
                                            onClick={() => {
                                                setOpenMobileMenu(!openMobileMenu);
                                            }}
                                        >
                                            <List size={32} />
                                        </IconButton>
                                    </Stack>
                                </Box>
                                <Box px={2} py={3}>
                                    <Stack direction={"column"} justifyContent={"start"} spacing={1}>
                                        {["HOME", "ABOUT", "PROJECTS", "SKILLS", "CONTACT"].map((menu, index) => (
                                            <Typography>{menu}</Typography>
                                        ))}
                                    </Stack>
                                </Box>
                            </Box>
                        </Drawer>
                    </Box>
                </Box>
            )}
        </Box>
    );
}

export default Header;
