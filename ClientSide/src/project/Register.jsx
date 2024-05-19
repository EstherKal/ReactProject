import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { UseSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setCurrentUser } from "./redux/Action";
import { addUser } from "./api";
import './style.css'


export const Register = () => {
    const dis = useDispatch()
    const list = useSelector(u => u.users)
    const nav = useNavigate()


    const send = async (event) => {
        // debugger
        event.preventDefault()

        const user = {
            lastName: event.target[0].value,
            firstName: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
        }
        await addUser(user)
        dis(setCurrentUser(user))
        swal(`Welcome ${user.firstName}!`, "register successfuly", "success")
        nav(`/Home`)
    }
    return <>

        <div id="form-main">
            <div style={{ marginTop: '5%' }}>
                <div id="form-div">
                    <form class="form" id="form1" onSubmit={(e) => send(e)} >
                        <p class="fn">
                            <input name="FirstName" type="text" class="validate[required,custom[email]] feedback-input" id="FirstName" placeholder="FirstName" />
                        </p>
                        <p class="Ln">
                            <input name="LastName" type="text" class="validate[required,custom[email]] feedback-input" id="LastName" placeholder="LastName" />
                        </p>
                        <p class="email">
                            <input name="email" type="text" class="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
                        </p>
                        <p class="password">
                            <input name="password" type="text" class="validate[required,custom[email]] feedback-input" id="password" placeholder="password" />
                        </p>
                        <input type="submit" value={'sign up'} id="button-blue" />
                        <div class="ease"></div>
                    </form>
                </div>
            </div>
        </div>

    </>

}