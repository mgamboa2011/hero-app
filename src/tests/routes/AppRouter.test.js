import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('prueba en approuter', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    };
    test('debe mostrar el login si no esta autenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    test('debe mostrar el componente de marvel si está autenticado', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Pepe'
            }
        };
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper.find('.navbar').exists()).toBe(true);
        //expect(wrapper).toMatchSnapshot();
    });
})