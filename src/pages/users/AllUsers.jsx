import Users from "./Users"
import ROUTES from "../../routes/ROUTES";

let user = [
    { to: ROUTES.USERS1, name: "kenny", id: "User1", },
    { to: ROUTES.USERS2, name: "james", id: "User2" },
    { to: ROUTES.USERS3, name: "john", id: "User3" },
    { to: ROUTES.USERS4, name: "rick", id: "User4" },
];

const AllUsers = () => {
    return (<div>
        {/* <Users name={user[0].name}/>
        <Users name={user[1].name}/>
        <Users name={user[2].name}/>
        <Users name={user[3].name}/> */}

        {user.map((item) => <Users name={item.name} to={item.to} id={item.id}/>)}
    </div>)
}

export default AllUsers