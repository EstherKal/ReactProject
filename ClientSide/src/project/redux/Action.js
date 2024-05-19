
export const setCurrentUser = (user) => {
    debugger
    return { type: 'SET_CURRENT_USER', payload: user }
}
export const setCurrentRecipe=(recipe)=>{
    return {type:`SET_CURRENT_RECIPE`,payload:recipe}
}
export const addUser = (user) => {
    return { type: 'ADD_USER', payload: user }
}

export const deleteUser = (username, password) => {
    return { type: 'DELETE_USER', payload: { username, password } }
}