import { getCategory } from "./api"
import { useParams } from "react-router"
import { useEffect } from "react"
import { useState } from "react"
import { addCategory } from "./api"
import swal from "sweetalert"
import { useSelector } from "react-redux"
import * as React from 'react';
import './manager.css';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const Category = () => {
    const user = useSelector(x => x.currentUser)

    const [list, setList] = useState()
    //החזרת כל הקטגוריות 
    useEffect(() => {
        getCategory()
            // תופס הצלחה
            .then(x => {
                setList(x.data)
            })
            // תופס כשלון
            .catch(err => {
                console.log(err.message);
            })
    })
    //הוספת הקטגוריה 
    const send = (event) => {
        event.preventDefault()
        console.log(event.target[0].value)
        addCategory({ name: event.target[0].value })
            .then(x => {
                console.log(x)
                setList(x.data)

                console.log(list);
            })
            .catch(err => {
                console.log(err.message);
            })
        console.log(user)
    }
    return <>
        <Box sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}>
            <div class="list">
                {list && list.map(c =>
                    <ListItem key={c.id} component="div" disablePadding>
                        <ListItemButton>
                            <ListItemText primary={c.name} />
                        </ListItemButton>
                    </ListItem>)}
            </div>
        </Box>

        <div class="card">
            <h2>Add category</h2>
            <form class="form" onSubmit={(e) => send(e)}>
                <br></br>
                <input type={'category'} id={'ca'} placeholder="add category" class="category"></input>
                <input type="submit" value={'add'} class="add_btn"></input>
            </form>
        </div>

    </>
}
