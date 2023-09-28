import { Container, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";

const TestStuff = () => {
    const [name, setName] = useState("userState Name")

    const handleFunc = () => {
        setName("Clicked name")
    }

    return (
        <Container sx={{ m: 5 }}>
            <button style={{ color: "red"}} onClick={handleFunc}>Click Me!</button>
            <Typography>{name}</Typography>
        </Container>
    );
}

export default TestStuff