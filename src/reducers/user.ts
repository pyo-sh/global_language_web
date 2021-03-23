import {
    createAction,
    ActionType,
    createReducer
} from 'typesafe-actions';

// State ------------------------------------------------
interface User {
    language: string,
};

const initialState: User = {
    language: 'kor',
};

// Action -----------------------------------------------
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export const changeLanguageAction = createAction(CHANGE_LANGUAGE)<User>();

// 액션 객체타입
export const ACTIONS = { changeLanguageAction };
type UserActions = ActionType<typeof ACTIONS>;

// Reducer ----------------------------------------------
const userReducer = createReducer<User, UserActions>(initialState, {
    [CHANGE_LANGUAGE]: (state, action) => ({
        ...state,
        language: action.payload.language
    }),
});

export default userReducer;