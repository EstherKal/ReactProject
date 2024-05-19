import { useDispatch, useSelector } from "react-redux"
import { setCurrentUser } from "./redux/Action"
import swal from "sweetalert";
import { useNavigate } from "react-router";
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { getUser } from "./api";
import "./redux/Store"
import './style.css'

export const Log = () => {
  //debugger
  const u = useParams()
  const dis = useDispatch()
  const nav = useNavigate()
  const mainuser = useSelector(x => x.mainUser)

  const send = async (event) => {
    debugger
    event.preventDefault()
    if (event.target[0].value == mainuser.email && event.target[1].value == mainuser.password) {
      dis(setCurrentUser(mainuser))
      swal(`Hello princaiple!`, "login successfuly", "success")
      nav(`/Home`)
    }
    else {
      let user = await getUser(event.target[0].value, event.target[1].value)
      if (user != "") {
        dis(setCurrentUser(user))
        swal(`Hello ${user.firstName}!`, "login successfuly", "success")
        nav(`/Home`)
      }
      else
        nav(`/Register`)
    }
  }
  return <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div id="form-main">
      <div id="form-div">
        <form class="form" id="form1" onSubmit={(e) => send(e)}>

          <p class="email">
            <input name="email" type="text" class="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
          </p>

          <p class="password">
            <input name="password" type="text" class="validate[required,custom[email]] feedback-input" id="password" placeholder="password" />
          </p>

          <input type="submit" value={'Log in'} id="button-blue" />
          <div class="ease"></div>
        </form>
      </div>
    </div>

  </>

}