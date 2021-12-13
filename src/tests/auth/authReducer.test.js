import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Prueba en authReducer', () => {
    test('debe retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('debe autenticar y colocar el nombre del usuario', () => {
        // const action = {
        //     types: types.login,
        //     payload: {
        //         name: 'Mauricio'
        //     }
        // }
        // const state = authReducer({ logged: true }, action);
        // expect(state).toEqual({ logged: true, name: 'Mauricio' });
    });

    test('debe borrar el name del usuario y logged en false', () => {
        // const action = {
        //     types: types.logout,
        // }
        // const state = authReducer({ logged: true, name: 'Juan' }, action);
        // expect(state).toEqual({ logged: false });
    });
})
