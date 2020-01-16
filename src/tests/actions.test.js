import {
    addSport,
    removeSport,
    addWork,
    removeWork,
    addEntertainment,
    removeEntertainment,
    login,
    logout
} from '../actions'
import types from '../constants'
describe('Testing Actions:', () => {
    it('Should create an action to add a sport', () => {
        const payload = 'Finish docs'
        const expectedAction = {
            type: types.ADD_SPORT,
            payload
        }
        expect(addSport(payload)).toEqual(expectedAction)
    })
    it('Should create an action to remove a sport', () => {
        const payload = 1
        const expectedAction = {
            type: types.REMOVE_SPORT,
            payload
        }
        expect(removeSport(payload)).toEqual(expectedAction)
    })


    it('Should create an action to add a work', () => {
        const payload = 'Finish docs'
        const expectedAction = {
            type: types.ADD_WORK,
            payload
        }
        expect(addWork(payload)).toEqual(expectedAction)
    })
    it('Should create an action to remove a work', () => {
        const payload = 1
        const expectedAction = {
            type: types.REMOVE_WORK,
            payload
        }
        expect(removeWork(payload)).toEqual(expectedAction)
    })


    it('Should create an action to add an entertainment', () => {
        const payload = 'Finish docs'
        const expectedAction = {
            type: types.ADD_ENTERTAINMENT,
            payload
        }
        expect(addEntertainment(payload)).toEqual(expectedAction)
    })
    it('Should create an action to remove an entertainment', () => {
        const payload = 1
        const expectedAction = {
            type: types.REMOVE_ENTERTAINMENT,
            payload
        }
        expect(removeEntertainment(payload)).toEqual(expectedAction)
    })


    it('Should create an action to login', () => {
        const expectedAction = {
            type: types.LOGIN
        }
        expect(login()).toEqual(expectedAction)
    })
    it('Should create an action to logout', () => {
        const expectedAction = {
            type: types.LOGOUT
        }
        expect(logout()).toEqual(expectedAction)
    })
})