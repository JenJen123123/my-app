import { Box, IconButton, Typography } from "@mui/material";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import AdminPanel from "./AdminPanel";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { toast } from "react-toastify";

const SandboxPage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/users")
      .then(({ data }) => {
        console.log("Userssss", data);
        setDataFromServer(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete("users/" + id);
 
      const updatedUsers = dataFromServer.filter((user) => user._id !== id);
      setDataFromServer(updatedUsers);
      
      toast("User Deleted successfully 👌", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    } catch (err) {
      console.log("err", err);
    }
  };

  const handleEditUser = (id) => {
    navigate(`${ROUTES.UPDATE}/${id}`);
  };

  return (
    dataFromServer.map((user) => (
      <Box key={user._id}>
        <AdminPanel
          id={user._id}
          image={user.image.url}
          admin={user.isAdmin}
          biz={user.isBusiness}
          first={user.name.first}
          last={user.name.last}
          country={user.address.country}
          city={user.address.city}
          onDelete={handleDelete}
          onEdit={handleEditUser}
        />
      </Box>
    ))

  );
};
export default SandboxPage;
