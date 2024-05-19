import { produce } from 'immer'
import { createStore } from 'redux'
const initialState = {

    currentUser:{id:0,lastName:"",firstName:"",email:"",password:""},
    mainUser: {lastName:"stern",firstName:"sari",email:"men@1",password:"1","id": 3},
    currentRecipe:{id:0,levelName:""}
    
}
const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.currentUser=action.payload
            break
        case 'SET_CURRENT_RECIPE':
            state.currentRecipe=action.payload
            debugger
            break

        default:
            break;
    }
}, initialState)
const store = createStore(reducer)
window.store=store
export default store;