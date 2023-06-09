// import { tasksReducer } from './tasks-reducer'
// import { todolistsReducer } from './todolists-reducer'
import {AnyAction, applyMiddleware, combineReducers,  legacy_createStore} from 'redux'
import thunk, {ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {authReducer} from "./auth-reducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    // tasks: tasksReducer,
    // todolists: todolistsReducer
    auth: authReducer
})
// непосредственно создаём store
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
// @ts-ignore
window.store = store
