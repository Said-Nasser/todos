import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NotFound from '../components/UI/NotFound';
import Home from '../components/UI/Home';
import Header from '../components/UI/Header';
import Profile from '../components/UI/Profile';
import Sports from '../components/UI/Sports';
import Work from '../components/UI/Work';
import Entertainment from '../components/UI/Entertainment';
import Tasks from '../components/UI/Tasks';
import Task from '../components/UI/Task';


Enzyme.configure({ adapter: new Adapter() })
function setup(props, Component) {

    const enzymeWrapper = shallow(<Component {...props} />)
    return {
        props,
        enzymeWrapper
    }
}
describe('components:', () => {

    describe('NotFound:', () => {
        it('should render self', () => {
            const { enzymeWrapper } = setup(null, NotFound)
            expect(enzymeWrapper.find('h1').text()).toEqual('404 | Page not found.')
        })
    })


    describe('Home:', () => {
        it('should render self', () => {
            const { enzymeWrapper } = setup(null, Home)
            expect(enzymeWrapper.find('h1').text()).toEqual('WELCOME')
        })
    })
    describe('Profile:', () => {
        it('should render self', () => {
            const { enzymeWrapper } = setup(null, Profile)
            expect(enzymeWrapper.find('h3').text()).toEqual('Michael Dave')
        })
    })
    describe('Header:', () => {
        it('should render self while not logged in:', () => {
            const { enzymeWrapper } = setup({
                loggedIn: false,
                onLogout: jest.fn()
            }, Header)
            expect(enzymeWrapper.exists('.nav-item.nav-link')).toBeTruthy()
            expect(enzymeWrapper.find('.nav-item.nav-link.d-none').text()).toEqual('Logout')
        })
        it('should render self while logged in:', () => {
            const { props, enzymeWrapper } = setup({
                loggedIn: true,
                onLogout: jest.fn()
            }, Header)
            expect(enzymeWrapper.exists('.nav-item.nav-link')).toBeTruthy()
            expect(enzymeWrapper.find('.nav-item.nav-link.d-none').text()).toEqual('Login')
            enzymeWrapper.find('.nav-item.nav-link.logout').simulate('click')
            expect(props.onLogout).toBeCalled()
        })
    })


    describe('Sports:', () => {
        it('should render self', () => {
            const { enzymeWrapper } = setup({
                onAddSport: jest.fn(),
                onRemoveSport: jest.fn(),
                sports: []
            }, Sports)
            expect(enzymeWrapper.find('h3').text()).toBe('Sports')
        })
        describe('Tasks:', () => {
            it('should render self', () => {
                const { enzymeWrapper } = setup({
                    onRemove: jest.fn(),
                    itemsList: []
                }, Tasks)
                expect(enzymeWrapper.find('ul')).toBeTruthy()
            });

            describe('Task:', () => {
                it('should render self', () => {
                    const { props, enzymeWrapper } = setup({
                        onRemove: jest.fn(),
                        index: 0,
                        text: 'item'
                    }, Task)
                    expect(enzymeWrapper.find('button')).toBeTruthy()
                    expect(enzymeWrapper.find('li')).toBeTruthy()
                    enzymeWrapper.find('button').simulate('click')
                    expect(props.onRemove).toBeCalled()
                });

            });
        });

    })


    describe('Work:', () => {
        it('should render self', () => {
            const { props, enzymeWrapper } = setup({
                onAddWork: jest.fn(),
                onRemoveWork: jest.fn(),
                work: []
            }, Work)
            expect(enzymeWrapper.find('h3').text()).toBe('Work')
        })
        describe('Tasks:', () => {
            it('should render self', () => {
                const { enzymeWrapper } = setup({
                    onRemove: jest.fn(),
                    itemsList: []
                }, Tasks)
                expect(enzymeWrapper.find('ul')).toBeTruthy()
            });

            describe('Task:', () => {
                it('should render self', () => {
                    const { props, enzymeWrapper } = setup({
                        onRemove: jest.fn(),
                        index: 0,
                        text: 'item'
                    }, Task)
                    expect(enzymeWrapper.find('button')).toBeTruthy()
                    expect(enzymeWrapper.find('li')).toBeTruthy()
                    enzymeWrapper.find('button').simulate('click')
                    expect(props.onRemove).toBeCalled()
                });

            });
        });

    })


    describe('Entertainment:', () => {
        it('should render self', () => {
            const { enzymeWrapper } = setup({
                onAddEntertainment: jest.fn(),
                onRemoveEntertainment: jest.fn(),
                entertainment: []
            }, Entertainment)
            expect(enzymeWrapper.find('h3').text()).toBe('Entertainment')
        })
        describe('Tasks:', () => {
            it('should render self', () => {
                const { enzymeWrapper } = setup({
                    onRemove: jest.fn(),
                    itemsList: []
                }, Tasks)
                expect(enzymeWrapper.find('ul')).toBeTruthy()
            });

            describe('Task:', () => {
                it('should render self', () => {
                    const { props, enzymeWrapper } = setup({
                        onRemove: jest.fn(),
                        index: 0,
                        text: 'item'
                    }, Task)
                    expect(enzymeWrapper.find('button')).toBeTruthy()
                    expect(enzymeWrapper.find('li')).toBeTruthy()
                    enzymeWrapper.find('button').simulate('click')
                    expect(props.onRemove).toBeCalled()
                });

            });
        });

    })
})