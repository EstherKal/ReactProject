import { useParams } from "react-router"
import { useSelector } from "react-redux"
import { scryRenderedComponentsWithType } from "react-dom/test-utils"
import { Outlet, useNavigate } from "react-router"
import { NavLink } from "react-router-dom"
import { addComments } from "./api"
import { Comments } from "./Comments"
import { useEffect, useState } from "react"
import { Recipe } from "./Recipe"
import swal from "sweetalert";

export const Details = () => {
    const nav = useNavigate()
    debugger

    const r = useSelector(x => { return x.currentRecipe })
    const u = useSelector(x => { return x.currentUser })


    const send = (event) => {
        event.preventDefault()
        debugger
        if (u.id != 0) {
            let comment = {
                "recipeId": r[0].id,
                "userId": u.id,
                "userName": u.firstName,
                "comment": event.target[0].value
            }
            addComments(comment)
                .then(x => {
                    console.log(x)
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
        else
            swal(`cant add commend if you are not connected`, 'login failed', 'error')
    }
    const sendAll = () => {
        nav(`Comments`)
    }
    return <>
        <br></br>
        <br></br>
        <br></br>
        <div >

            <Recipe id={r[0].id}
                preparationTime={r[0].preparationTime} recipeName={r[0].name} note={r[0].note}
                userName={r[0].userName} levelName={r[0].levelName} categoryName={r[0].categoryName} instruction={r[0].instructions} details={true} pic={r[0].pic}></Recipe>

            <button onClick={() => sendAll()}>commends</button>

            <form onSubmit={(e) => send(e)}>
                <input placeholder={"new commend"}></input>
                <br></br>
                <input type="submit" value={'send'}></input>
            </form>
            <Outlet></Outlet>
        </div>

    </>
}