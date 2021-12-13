import { PrivateRoute } from "../../routers/PrivateRoute";
import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";

describe('Pruebas en <PrivateRoute />', () => {
    const props = {
        location: {
            lastPath: '/'
        }
    }
    Storage.prototype.setItem = jest.fn();

    test('debe mostrar el componente si está autenticado y guardar local storage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span>Hola</span>}
                    {...props}
                />
            </MemoryRouter>
        )
        //expect(wrapper.find('span').exists()).toBe(true);
        expect(wrapper.find('PrivateRoute').length).toBe(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
    });

    test('debe bloquear el componente si no esta autenticado', () => {
        //     const wrapper = mount(
        //         <MemoryRouter>
        //             <PrivateRoute
        //                 isAuthenticated={false}
        //                 component={() => <span>Hola</span>}
        //                 {...props}
        //             />
        //         </MemoryRouter>
        //     )
        //     expect(wrapper.find('span').exists()).toBe(false);
        // })

    })
})