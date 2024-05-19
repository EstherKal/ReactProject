import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { getRecipes, getCategory, getLevels, getAll } from "./api"
import { useDispatch } from "react-redux"
import { setCurrentRecipe } from "./redux/Action"
import { Recipe } from "./Recipe"
import { Outlet } from "react-router"
import { Comments } from "./Comments"
import { getComments } from "./api"
import { Button } from "@mui/material"
import './allRecipe.css'

export const AllRecipe = () => {

    const nav = useNavigate()
    const dis = useDispatch()

    ///List of Recipies
    const [list, setList] = useState()
    ///  לפי מה לסנן
    const [ByLevel, SetByLevel] = useState()
    const [ByCategory, SetByCategory] = useState()
    const [ByUsers, SetByUsers] = useState()

    //list
    const [LevelList, SetLevelList] = useState()
    const [CategoryList, SetCategoryList] = useState()
    const [UsersList, SetUsersList] = useState()


    // שליפת הנתונים מהשרת בעת טעינה
    useEffect(() => {
        debugger
        getRecipes()
            .then(x => {
                //console.log(x.status);
                setList(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })
        getCategory()
            .then(x => {
                SetCategoryList(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })
        getLevels()
            .then(x => {
                SetLevelList(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })
        //list user 
        getAll()
            .then(x => {
                SetUsersList(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })


    }, [])

    const send = (recipe) => {
        dis(setCurrentRecipe(recipe))
        nav('/Details')
    }


    /*  קטגוריות */
    const sendD = () => {
        nav('Details')
    }
    return <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div >

            <div class="boxs">
                <div class="box" name="box1">

                    {/* קטגוריות */}
                    <select onChange={(e) => SetByCategory(e.target.value)}>
                        <option value="">
                            <em>כל הקטגוריות</em>
                        </option>
                        {CategoryList && CategoryList.map(x =>
                            <option value={x.id} >
                                {x.name}
                            </option>
                        )}
                    </select>
                    {/* רמות */}

                    <select onChange={(e) => SetByLevel(e.target.value)}>
                        <option value="">
                            <em>כל הרמות</em>
                        </option>
                        {LevelList && LevelList.map(x =>
                            <option value={x.id}>
                                {x.name}
                            </option>
                        )}
                    </select>

                    {/* אנשים */}
                    <select onChange={(e) => SetByUsers(e.target.value)}>
                        <option value="">
                            <em>כל האנשים</em>
                        </option>
                        {UsersList && UsersList.map(x =>
                            <option value={x.id}>
                                {x.firstName}
                            </option>
                        )}
                    </select>
                </div>
            </div>
            {list && list.map((item, index) => {

                if ((item.levelId == ByLevel || !ByLevel) && (item.categoryId == ByCategory || !ByCategory) && (item.userId == ByUsers || !ByUsers)) {
                    return (
                        <div style={{ marginLeft: '7%' }}>
                            <Recipe id={item.id} recipeName={item.name} note={item.note} userName={item.userName} details={false} pic={item.pic}></Recipe>
                        </div>
                    )
                }
            }
            )}

        </div>


    </>
}