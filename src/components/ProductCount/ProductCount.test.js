import React from 'react';
import { shallow } from 'enzyme';
import ProductCount from './index';
import { Pill } from '../Pill';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn({
        cart: [
            {"id":11,"name":"Atún lomitos en agua","brand":"Van Camps","stock":10,"price":5500,"img":"assets/products/atun2.png","imgHeight":1,"description":"Atun 1" },
            {"id":11,"name":"Atún lomitos en agua","brand":"Van Camps","stock":10,"price":5500,"img":"assets/products/atun2.png","imgHeight":1,"description":"Atun 1" },
            {"id":5,"name":"Doritos","brand":"Margarita","stock":15,"price":1300,"img":"assets/products/doritos.png","imgHeight":3,"description":"Doritos description"},
        ],
    })),
}));

describe('<ProductCount />', () => {
    it('ProductCount count the elements by id in cart', () => {
        const props = { productId: 11, showEmpty: true };
        const tree = shallow(<ProductCount {...props} />);

        expect(tree.children().props()).toEqual({ data: 2 });
    });

    it('ProductCount shold show 0 when the product doesn\'t exist and showEmpty prop is true', () => {
        const props = { productId: 2000, showEmpty: true };
        const tree = shallow(<ProductCount {...props} />);

        expect(tree.children().props()).toEqual({ data: 0 });
    });

    it('ProductCount sholdn\'t show anything when the product doesn\'t exist and showEmpty prop is false', () => {
        const props = { productId: 2000, showEmpty: false };
        const tree = shallow(<ProductCount {...props} />);

        expect(tree.children().exists()).toBe(false);
    });
});
