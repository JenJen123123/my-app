import { Button } from "@mui/material"

const Targil = () => {
    const handleClick = () => {
        console.log("Clicked");
    }

    return <Button onClick={handleClick}>Click Me</Button>
}

export default Targil;