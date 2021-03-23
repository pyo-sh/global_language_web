import { combineReducers } from "redux";
import user from 'reducers/user';
import testReducer from "reducers/testReducer";

const rootReducer = combineReducers({
    user,
    testReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;