import { useSelector } from "react-redux"
import { useEffect } from "react"
import { getRecipes } from "./api"
import { useState } from "react"
import { Outlet, useNavigate } from "react-router"
import { Recipe } from "./Recipe"
import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export const CurentUser = () => {
    const nav = useNavigate()
    const u = useSelector(x => { return x.currentUser })
    const [list, setList] = useState()

    useEffect(() => {
        getRecipes()
            .then(x => {
                setList(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })
    })
    const send = () => {
        nav(`AddRecipe`)
    }
    return <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div >
            {list && list.map(recipe => {

                if (recipe.userId === u.id) {
                    return (
                        <div key={recipe.id} style={{ marginLeft: '7%' }}>
                            <Recipe id={recipe.id} recipeName={recipe.name} userName={recipe.userName} flag={true} pic={recipe.pic}></Recipe>
                        </div>
                    )
                }
            }
            )}
            <Button onClick={() => send()} variant="outlined" startIcon={<AddIcon />}>
                add recipe
            </Button>
            <Outlet></Outlet>
        </div>
    </>
}