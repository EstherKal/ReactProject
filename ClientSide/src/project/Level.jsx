import { getLevels } from "./api"
import { addLevel } from "./api"
import { useParams } from "react-router"
import { useEffect } from "react"
import { useState } from "react"
import swal from "sweetalert"
import './manager.css';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const Level = () => {

    const [list, setList] = useState()
    //החזרת כל הרמות 
    useEffect(() => {
        getLevels()
            // תופס הצלחה
            .then(x => {
                setList(x.data)
            })
            // תופס כשלון
            .catch(err => {
                console.log(err.message);
            })
    })
    //הוספת הרמה 
    const send = async (event) => {
        debugger
        event.preventDefault()
        addLevel({ name: event.target[0].value })
            .then(x => {
                setList(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return <>
        <Box sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}>
            <div class="list">
                {list && list.map(l =>
                    <ListItem key={l.id} component="div" disablePadding>
                        <ListItemButton>
                            <ListItemText primary={l.name} />
                        </ListItemButton>
                    </ListItem>)}
            </div>
        </Box>

        <div class="card">
            <h2>Add level</h2>
            <form class="form" onSubmit={(e) => send(e)}>
                <br></br>
                <input type={'category'} id={'ca'} placeholder="add level" class="category"></input>
                <input type="submit" value={'add'} class="add_btn"></input>
            </form>
        </div>
    </>
}
