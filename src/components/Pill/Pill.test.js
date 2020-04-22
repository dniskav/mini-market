import React from 'react';
import { shallow } from 'enzyme';
import Pill from './index';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn({
        cart: [],
    })),
  }));

describe('<Pill />', () => {
    it('Pill must have tests', () => {
        const tree = shallow(<Pill />);

        expect(tree.exists()).toBe(true);
    });
});
