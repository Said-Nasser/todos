import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = (store: any) => (next: any) => (action: any) => {

    let result

    console.groupCollapsed(`dispatching action => ${action.type}...`)
    result = next(action)

    let state = store.getState()

    console.log(`
        new state:
    ${JSON.stringify(state)} `)

    console.groupEnd()

    return result

}

export default (initialState = {}) => {
    return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState)
}
