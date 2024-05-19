import { Route, Routes } from "react-router"
import { Register } from "./Register"
import { Home } from "./Home"
import { AllRecipe } from "./AllRecipe"
import { CurentUser } from "./CurentUser"
import { Log } from "./Log"
import { Category } from "./Category"
import { Level } from "./Level"
import { AddRecipe } from "./AddRecipe"
import { Details } from "./Details"
import { Comments } from "./Comments"
import { AddIngredient } from "./AddIngredient"

export const Routing = () => {
    return <>
        <Routes>
            <Route path="Home" element={<Home></Home>}>home</Route>
            <Route path="Log" element={<Log></Log>}>Log</Route>
            <Route path="Register" element={<Register></Register>}>register</Route>
            <Route path="AllRecipe" element={<AllRecipe></AllRecipe>}>AllRecipe
            </Route>
            <Route
                path="CurentUser" element={<CurentUser></CurentUser>}>CurentUser
                <Route
                    path="AddRecipe" element={<AddRecipe></AddRecipe>}>AddRecipe
                    <Route path="AddIngredient" element={<AddIngredient></AddIngredient>}>AddIngredient</Route>
                </Route>
            </Route>
            <Route
                path="Details" element={<Details></Details>}>Details
                <Route path="Comments" element={<Comments></Comments>}>Comments</Route>
            </Route>
            <Route path="Category" element={<Category></Category>}>category</Route>
            <Route path="Level" element={<Level></Level>}>Level</Route>
        </Routes>
    </>
}