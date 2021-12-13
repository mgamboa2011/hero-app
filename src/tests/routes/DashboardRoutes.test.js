import React from "react";
import { AuthContext } from "../../auth/AuthContext";
import { mount } from "enzyme";
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { MemoryRouter } from "react-router";

describe('pruebas en DashboardRoutes', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Mauricio'
        }
    };
    test('debe mostrarse correctamente', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Mauricio');
    })

})
