import React from 'react';
import { shallow } from 'enzyme';
import Cart from './index';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn({
        cart: [],
    })),
  }));

describe('<Cart />', () => {
    it('Cart must have tests', () => {
        const tree = shallow(<Cart />);

        expect(tree.exists()).toBe(true);
    });
});
