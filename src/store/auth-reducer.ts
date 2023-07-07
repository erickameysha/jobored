import {Dispatch} from "redux";
import {superjobApi} from "./api-superjob";


type tokenType = {
    access_token: string
    refresh_token: string
    ttl: number
    expires_in: number
    token_type: string
    reg_user_resumes_count: number
}
// @ts-ignore
const initialState: tokenType={}

export const authReducer = (state = initialState, action: ActionType): tokenType => {

    switch (action.type) {

        case "SET-AUTH": {
            return {
                access_token: action.data.access_token,
                refresh_token: action.data.refresh_token,
                ttl: action.data.ttl,
                expires_in: action.data.expires_in,
                token_type: action.data.token_type,
                reg_user_resumes_count: action.data.reg_user_resumes_count
            }
        }
        default:
            return state

    }

}

const setAuthToken = (data: tokenType) => ({
    type: 'SET-AUTH', data
} as const)


export const setTokenTC = (login: string, password: string) => (dispatch: Dispatch<ActionType>) => {


    superjobApi.auth(password, login)
        .then(res => dispatch(setAuthToken(res.data)))
        .catch(req=> console.log(req.response.data))


}


type ActionType = ReturnType<typeof setAuthToken>