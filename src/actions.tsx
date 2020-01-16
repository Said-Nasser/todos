import types from './constants'

export const addSport = (text: string) => (
    {
        type: types.ADD_SPORT,
        payload: text
    }
)
export const removeSport = (index: number) => (
    {
        type: types.REMOVE_SPORT,
        payload: index
    }
)
export const addWork = (text: string) => (
    {
        type: types.ADD_WORK,
        payload: text
    }
)
export const removeWork = (index: number) => (
    {
        type: types.REMOVE_WORK,
        payload: index
    }
)
export const addEntertainment = (text: string) => (
    {
        type: types.ADD_ENTERTAINMENT,
        payload: text
    }
)
export const removeEntertainment = (index: number) => (
    {
        type: types.REMOVE_ENTERTAINMENT,
        payload: index
    }
)
export const login = () => (
    {
        type: types.LOGIN
    }
)
export const logout = () => (
    {
        type: types.LOGOUT,
    }
)
