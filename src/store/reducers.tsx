import types from '../constants'
import { combineReducers } from 'redux'

interface actionType {
    type: string,
    payload?: string | number
}

export const sports = (state = [], action: actionType) => {

    switch (action.type) {

        case types.ADD_SPORT:
            return [
                ...state,
                action.payload
            ]

        case types.REMOVE_SPORT:

            return state.filter((sport, i) => action.payload !== i)

        default:
            return state
    }

}
export const work = (state = [], action: actionType) => {

    switch (action.type) {

        case types.ADD_WORK:
            return [
                ...state,
                action.payload
            ]

        case types.REMOVE_WORK:

            return state.filter((work, i) => action.payload !== i)

        default:
            return state
    }

}
export const entertainment = (state = [], action: actionType) => {

    switch (action.type) {

        case types.ADD_ENTERTAINMENT:
            return [
                ...state,
                action.payload
            ]

        case types.REMOVE_ENTERTAINMENT:

            return state.filter((entertainment, i) => action.payload !== i)

        default:
            return state
    }

}
export const login = (state = false, action: actionType | any) => {

    switch (action.type) {

        case types.LOGIN:
            return true

        case types.LOGOUT:

            return false

        default:
            return state
    }

}



export default combineReducers({
    sports,
    work,
    entertainment,
    login
})