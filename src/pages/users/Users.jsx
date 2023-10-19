import { Container, Typography, Link } from "@mui/material"

const Users = ({ name, to, id }) => {
    return (<Container sx={{ m: 5 }}>
        <Link href={to}><Typography variant="h1">
            {name}
        </Typography></Link>

    </Container>)
}

export default Users