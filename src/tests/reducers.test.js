import {
    sports,
    work,
    entertainment,
    login
} from "../store/reducers";
import types from '../constants'

describe('sports reducer:', () => {
    it('should return the sports initial state', () => {
        expect(sports(undefined, {})).toEqual([])
    })

    it('should handle ADD_SPORT', () => {
        expect(sports([], {
            type: types.ADD_SPORT,
            payload: 'Play football'
        })).toEqual(['Play football'])
        expect(sports(['Play football'], {
            type: types.ADD_SPORT,
            payload: 'Go swimming'
        })).toEqual(['Play football', 'Go swimming'])
    })

    it('should handle REMOVE_SPORT', () => {
        expect(sports([], {
            type: types.REMOVE_SPORT,
            payload: 1
        })).toEqual([])
        expect(sports(['Play football', 'Go swimming'], {
            type: types.REMOVE_SPORT,
            payload: 1
        })).toEqual(['Play football'])
    })

});

describe('work reducer:', () => {
    it('should return the work initial state', () => {
        expect(sports(undefined, {})).toEqual([])
    })

    it('should handle ADD_WORK', () => {
        expect(work([], {
            type: types.ADD_WORK,
            payload: 'Add new feature'
        })).toEqual(['Add new feature'])
        expect(work(['Ship the code'], {
            type: types.ADD_WORK,
            payload: 'Add new feature'
        })).toEqual(['Ship the code', 'Add new feature'])
    })

    it('should handle REMOVE_WORK', () => {
        expect(work([], {
            type: types.REMOVE_WORK,
            payload: 1
        })).toEqual([])
        expect(work(['Ship the code', 'Add new feature'], {
            type: types.REMOVE_WORK,
            payload: 1
        })).toEqual(['Ship the code'])
    })

});

describe('entertainment reducer:', () => {
    it('should return the entertainment initial state', () => {
        expect(sports(undefined, {})).toEqual([])
    })

    it('should handle ADD_ENTERTAINMENT', () => {
        expect(entertainment([], {
            type: types.ADD_ENTERTAINMENT,
            payload: 'Have a walk'
        })).toEqual(['Have a walk'])
        expect(entertainment(['Go to the beach'], {
            type: types.ADD_ENTERTAINMENT,
            payload: 'Have a walk'
        })).toEqual(['Go to the beach', 'Have a walk'])
    })

    it('should handle REMOVE_ENTERTAINMENT', () => {
        expect(entertainment([], {
            type: types.REMOVE_ENTERTAINMENT,
            payload: 1
        })).toEqual([])
        expect(entertainment(['Go to the beach', 'Have a walk'], {
            type: types.REMOVE_ENTERTAINMENT,
            payload: 1
        })).toEqual(['Go to the beach'])
    })

});


describe('login reducer:', () => {
    it('should return the login initial state', () => {
        expect(login(undefined, {})).toEqual(false)
    });
    it('should handle LOGIN', () => {
        expect(login(false, {
            type: types.LOGIN
        })).toEqual(true)
    });
    it('should handle LOGOUT', () => {
        expect(login(true, {
            type: types.LOGOUT
        })).toEqual(false)
    });
    
    
});
