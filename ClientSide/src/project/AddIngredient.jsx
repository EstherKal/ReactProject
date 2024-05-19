import { addIngredient } from "./api"
import { useState } from "react"

export const AddIngredient = () => {
    const [IngredientList, SetIngredientList] = useState()
    debugger
    const send = (e) => {
        e.preventDefault()
        addIngredient(e.target[0].value)
            .then(x => {
                SetIngredientList(x.data)
                alert('wow')
            })
            .catch(err => {
                console.log(err.message);
            })

    }
    return <>
        <h1>sdfgu</h1>
        {IngredientList && IngredientList.map(x =>
            <h3>{x.name}</h3>
        )}
        <form onSubmit={(e) => send(e)}>
            <input id={'name'} placeholder={'input name of ingredient'} ></input>
            <input type={'submit'} id={'name'} value={'send'}></input>
        </form>
    </>
}
