import React from 'react';
import { shallow } from 'enzyme';
import TotalPrice from './index';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn({
        cart: [
            {"id":11,"name":"Atún lomitos en agua","brand":"Van Camps","stock":10,"price":5500,"img":"assets/products/atun2.png","imgHeight":1,"description":"Atun 1" },
            {"id":11,"name":"Atún lomitos en agua","brand":"Van Camps","stock":10,"price":5500,"img":"assets/products/atun2.png","imgHeight":1,"description":"Atun 1" },
            {"id":5,"name":"Doritos","brand":"Margarita","stock":15,"price":1300,"img":"assets/products/doritos.png","imgHeight":3,"description":"Doritos description"},
        ],
    })),
}));

describe('<TotalPrice />', () => {
    it('TotalPrice must have tests', () => {
        const tree = shallow(<TotalPrice />);

        expect(tree.text()).toBe('12300.00');
    });
});
