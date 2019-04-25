import React from 'react';
import { shallow } from 'enzyme';
import Hello from './Hello';

describe('Hello component', () => {
    it('starts with text Hello, John Doe', () => {
        const wrapper = shallow(<Hello />);
        const text = wrapper.find('h1').text();
        expect(text).toEqual('Hello, John Doe');
    });
});