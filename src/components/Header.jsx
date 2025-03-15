import {Box, Button, Drawer, IconButton, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import React from "react";
import Logo from "../assets/Logo.png";
import {List} from "phosphor-react";

function Header() {
    const theme = useTheme();
    const isMobileOrTab = useMediaQuery(theme.breakpoints.down("md"));

    const [openMobileMenu, setOpenMobileMenu] = React.useState(false);
    return (
        <Box sx={{position: "sticky", top: 0, zIndex: 1100}}>
            {/* Laptop Screen  */}
            {!isMobileOrTab && (
                <Box
                    p={2}
                    sx={{
                        width: "100vw",
                        height: "auto",
                        backgroundColor: "white",
                        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.25) ", //horizonatal vertical blur spread color
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
                                <Typography fontWeight="bold">{menu}</Typography>
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
                    p={2}
                    sx={{
                        width: "100vw",
                        height: "auto",
                        backgroundColor: "white",
                        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.25)",
                    }}
                >
                    <Stack direction={"row"} alignItems={"center"}>
                        <Box>
                            <img src={Logo} alt="Gayatri Sontakke" width={"50%"} />
                        </Box>
                        <IconButton
                            onClick={() => {
                                setOpenMobileMenu(!openMobileMenu);
                            }}
                        >
                            <List size={32} />
                        </IconButton>
                    </Stack>
                    <Drawer anchor="right" open={openMobileMenu}>
                        <Box sx={{width: "200px"}}>
                            <Stack direction={"column"} spacing={2}>
                                <Stack direction={"row"} p={2} sx={{boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.25)"}}>
                                    <IconButton
                                        onClick={() => {
                                            setOpenMobileMenu(!openMobileMenu);
                                        }}
                                    >
                                        <List size={32} color="black" />
                                    </IconButton>
                                </Stack>
                                <Stack px={4} direction={"column"} spacing={2}>
                                    {["HOME", "ABOUT", "PROJECTS", "SKILLS", "CONTACT"].map((menu, index) => (
                                        <Typography fontWeight="bold">{menu}</Typography>
                                    ))}
                                </Stack>
                                <Stack direction={"row"} alignItems={"start"} px={4}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            textTransform: "none",
                                            color: "black",
                                            borderColor: "black",
                                            borderRadius: 2,
                                        }}
                                    >
                                        Hire Me
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Drawer>
                </Box>
            )}
        </Box>
    );
}

export default Header;
