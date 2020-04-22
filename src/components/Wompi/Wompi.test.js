import React from 'react';
import { shallow } from 'enzyme';
import Wompi from './index';

describe('<Wompi />', () => {
    it('Wompi must have tests', () => {
        const tree = shallow(<Wompi />);

        expect(tree.exists()).toBe(true);
    });
});
