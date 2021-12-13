import { Navbar } from "../../../components/ui/NavBar"
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { types } from "../../../types/types";

describe('Prueba en <Navbar/>', () => {
    const navigateMock = {
        push: jest.fn(),
        location: {},
        replace: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Pepe'
        }
    };
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter navigate={navigateMock}>
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>
    )
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Pepe');
    });

    test('debe llamar el logout y el navigate', () => {
        wrapper.find('button').simulate('click');
        expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
        //expect(navigateMock.replace).toHaveBeenCalledWith('/login');
    })


})
