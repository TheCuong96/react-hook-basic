
const hobbyReducerInitialState = {
    list:[],
    activeId:null,
}
const hobbyReducer = (state = hobbyReducerInitialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state.list];
            newList.push(action.payload);
            console.log(newList)
            return {
                // ...state,
                list:newList,
            }
        }
            
        case 'SET_ACTIVE_HOBBY':{
            const newActiveList = action.payload.id
            return {
                ...state,
                activeId:newActiveList
            }
        }
        default:
            return state
    }
}
export default hobbyReducer;