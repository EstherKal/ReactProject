import { getComments } from "./api"
import { useState,useEffect } from "react"
import { useSelector } from "react-redux"
export const Comments=()=>{

    const r= useSelector(x=>{return x.currentRecipe})
    const u= useSelector(x=>{return x.currentUser})

    const [list, setList] = useState()
    useEffect( () => {
        
      getComments(r.id)
            .then(x => {
                setList(x.data)
                console.log(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })
        })
    return<>

        <div>
        {list && list.map(comment=>{
            return(
                <div key={comment.id}> 
                    <p>{comment.comment}</p>
                </div>)
            })}
            </div>

    </>
}