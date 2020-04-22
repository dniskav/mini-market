import React from 'react';
import { shallow } from 'enzyme';
import { CartGrid } from './index';
import productsList from '../../helpers/productsList';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn({
        cart: [],
    })),
  }));

describe('<CartGrid />', () => {
    it('CartGrid must have tests', () => {
        const cartProps = [];

        const tree = shallow(<CartGrid cart={cartProps} />);

        expect(tree.exists()).toBe(true);
        expect(tree.text()).toBe('Cart Empty');
    });

    it('CartGrid must show \'Cart Empty\' if the cart prop is an empty array', () => {
        const cartProps = [];

        const tree = shallow(<CartGrid cart={cartProps} />);

        expect(tree.text()).toBe('Cart Empty');
    });

    it('CartGrid must show \'a list of cart products\' if the cart prop is an array with them', () => {
        const cartProps = [...productsList];

        const tree = shallow(<CartGrid cart={cartProps} />);
        expect(tree.hasClass('cart-product')).toBe(true);
    });
});
