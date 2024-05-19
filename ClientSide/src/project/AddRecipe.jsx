import { useState } from "react"
import { useEffect } from "react"
import { getCategory, getRecipes, addRecipes } from "./api"
import { getLevels } from "./api"
import { useSelector } from "react-redux"
import { getIngredient } from "./api"
import { useNavigate } from "react-router"
import { Outlet } from "react-router"
import { addIngredientToRecipe } from "./api"
import { useRef } from "react"
import { addIngredient } from "./api"
import './Style2.css'
import './style3.css'

export const AddRecipe = () => {
    const newIngredient = useRef()
    //הצבת נצשתמש הנוכחי 
    const u = useSelector(x => { return x.currentUser })
    const nav = useNavigate()
    
    const [categoryList, setCList] = useState()
    const [LevelList, setLList] = useState()
    const [IngredientList, SetIngredientList] = useState()
    const [RecipeList, SetRecipeList] = useState()
 
    const [byLevel, setLevel] = useState()
    const [byCategory, setCategory] = useState()
    const [byIngredient, setIngredient] = useState()


    useEffect(() => {

        //list categorie
        getCategory()
            .then(x => {
                console.log(x.status);
                setCList(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })
        //list levels
        debugger
        getLevels()
            .then(x => {
                setLList(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })
        //list ingriednt
        getIngredient()
            .then(x => {
                SetIngredientList(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })
        //list recipe
        getRecipes()
            .then(x => {
                SetRecipeList(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })

    }, [])
    let amount = 0;
    const send = (event) => {
        event.preventDefault()
        amount++
        let nameCategory
        {
            categoryList && categoryList.map(x => {

                if (x.id == byCategory)
                    nameCategory = x.name
            })
        }
        let nameLevel
        {
            LevelList && LevelList.map(x => {

                if (x.id == byLevel)
                    nameLevel = x.name
            })
        }

        const newRecipe = {
            name: event.target[0].value,
            preparationTime: event.target[1].value,
            userId: u.id,
            userName: u.firstName,
            categoryId: byCategory,
            categoryName: nameCategory,
            levelId: byLevel,
            levelName: nameLevel,
            note: event.target[2].value,
            instructions: event.target[3].value,
            pic: event.target[4].value
        }
        event.preventDefault()

        addRecipes(newRecipe)
            .then(x => {
                console.log(x)
            })
            .catch(err => {
                console.log(err.message);
            })
        for (let i = 7; i < (IngredientList.length) + 7; i++) {
            debugger
            if (event.target[i].value != 0) {
                const ingredients =
                    [{
                        "recipeId": RecipeList[RecipeList.length - 1].id + amount,
                        "ingredientId": i - 5,
                        "ingredientName": IngredientList[i - 6].name,
                        "amount": event.target[i].value
                    }]
                console.log(ingredients);
                addIngredientToRecipe(ingredients)
                    .then(x => {
                        console.log(x.data)
                    })
                    .catch(err => {
                        console.log(err.message);
                    })
            }
        }

    }
    const sendIngredient = () => {
        debugger
        addIngredient({
            "name": newIngredient.current.value
        })
            .then(x => {
                SetIngredientList(x)
            })
            .catch(err => {
                console.log(err.message);
            })

    }


    return <>
        <body>
            <div class="contact-section">
                <h1>your recipe</h1>
                <div class="border"></div>
                <form class="contact-form" action="contact_form.html" onSubmit={(e) => send(e)}>
                    <input type="text" class="contact-form-text" placeholder="Recipe Name" required />
                    <input type="text" class="contact-form-text" placeholder="preparationTime" required />
                    <input type="text" class="contact-form-text" placeholder="note" required />
                    <textarea class="contact-form-text" placeholder="instruction" required></textarea>
                    <input type="text" class="contact-form-text" placeholder="pic num 1-20" required />
                    <div className="boxs">
                        <div class="box" name="box3">

                            {/* קטגוריות */}
                            <select onChange={(e) => setCategory(e.target.value)}>
                                <option value="">
                                    <em>categories</em>
                                </option>
                                {categoryList && categoryList.map(x =>
                                    <option value={x.id} key={x.id}>
                                        {x.name}
                                    </option>
                                )}
                            </select>
                        </div>
                        {/* רמות */}
                        <div class="box" name="box3">

                            <select onChange={(e) => setLevel(e.target.value)}>
                                <option value="">
                                    <em>levels</em>
                                </option>
                                {LevelList && LevelList.map(x =>
                                    <option value={x.id} key={x.id}>
                                        {x.name}
                                    </option>
                                )}
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <h1>YOUR INGREDIENTS</h1>
                    <br></br>
                    <div className="ing">
                        {IngredientList && IngredientList.map(x =>
                            <div key={x.id} class="contact-form-2">
                                <label htmlFor={x.id}>{x.name + ':'}</label>
                                <input type="text" class="contact-form-text ingredients" />

                            </div>
                        )}
                    </div>
                    <br></br>
                    <h1>ADD INGREDIENTS</h1>
                    <input type="text" id={'name'} placeholder={'input name of ingredient'} ref={newIngredient} class="contact-form-text" ></input>
                    <button onClick={sendIngredient} class="contact-form-btn">add ingedient</button>
                    <br></br>
                    <input type={'submit'} class="contact-form-btn" value={'send'}></input>

                </form>
            </div>
        </body>

    </>
}