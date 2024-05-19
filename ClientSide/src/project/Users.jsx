import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { getUser } from "./api"


export const Users = () => {

    const [list, setList] = useState()
    const u = useParams()
    useEffect(() => {
        getUser(u.email, u.password)
            .then(x => {
                console.log(x.status);
                setList(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [u.email, u.password])
    return <>
        {list && list.map(u => <h3>{u.lastName + "" + u.firstName} - {u.password}</h3>)}
    </>
}