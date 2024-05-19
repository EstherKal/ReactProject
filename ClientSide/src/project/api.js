
import axios from "axios"
//recipe

export const addRecipes = async (recipe) => {
    
    try {
        return await axios.post(`https://localhost:7130/api/Recipe`, recipe)
    }
    catch {
        return null
    }

}

export const getRecipes =  () => {

    try {
       return  axios.get(`https://localhost:7130/api/Recipe`)
    }
    catch {
        return null;
    }

}
//user

export const getUser = async (email, pass) => {
    let newUser = null
    try {
        await axios.get(`https://localhost:7130/api/User/${email}/${pass}`).then(result => newUser = result.data)
    }
    catch { return null }
    console.log(newUser)
    return newUser
}

export const getAll = async () => {
    try {
        return await axios.get(`https://localhost:7130/api/User`)
    }
    catch {
        return null
    }
}
export const addUser  = async (user) => {
    let newUser = null
    try {
         await axios.post(`https://localhost:7130/api/User`, user).then(result => newUser = result.data)
    }
    catch {
        return null
    }
    console.log(newUser)
    return newUser

}
//level
export const getLevels = async () => {
    try {
        return await axios.get(`https://localhost:7130/api/Level`)
    }
    catch {
        return null
    }
}
export const addLevel=async (level)=>{
    let newList=null
    try{
        await axios.post(`https://localhost:7130/api/Level`, level).then(result=>newList=result.data)
    }
    catch {
        return null
    }
    return newList
}
//Category
export const getCategory = async () => {
    try {
        return await axios.get(`https://localhost:7130/api/Category`)
    }
    catch {
        return null
    }
}
export const addCategory=async (category)=>{
    let newList=null
    try{
        await axios.post(`https://localhost:7130/api/Category`, category).then(result=>newList=result.data)
    }
    catch {
        return null
    }
    return newList
}
//Comment
export const getComments=async(recipeID)=>{
    try {
        return await axios.get(`https://localhost:7130/api/CommentsToRecipe/${recipeID}`)
    }
    catch {
        return null
    }

}

export const addComments=async (comment)=>{
    
    let newList=null
    try{
        await axios.post(`https://localhost:7130/api/CommentsToRecipe`, comment).then(result=>newList=result.data)
    }
    catch {
        return null
    }
    return newList
}
//ingredients
//list of ingredient
export const getIngredient=async()=>{
    try {
        return await axios.get(`https://localhost:7130/api/Ingredient`)
    }
    catch {
        return null
    }

}

export const addIngredient=async (ingredient)=>{
    
    let newList=null
    try{
       await axios.post(`https://localhost:7130/api/Ingredient`, ingredient).then(result=>newList=result.data)
    }
    catch {
        return null
    }
    return newList
}
//ingredientToRecipe

export const getIngredientToRecipe=async(recipeId)=>{
    try {
        return await axios.get(`https://localhost:7130/api/IngredientsToRecipe/${recipeId}`)
    }
    catch {
        return null
    }
}

export const addIngredientToRecipe=async (ingredient)=>{
    debugger
    let newList=null
    try{
        await axios.post(`https://localhost:7130/api/IngredientsToRecipe`, ingredient).then(result=>newList=result.data)
    }
    catch {
        return null
    }
    return newList
}


