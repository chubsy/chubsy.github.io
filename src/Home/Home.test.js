import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import MyApp from './Home';

test('renders learn react link', () => {
  const { getByText } = render(<MyApp />);
  const linkElement = getByText(/hello chloe/i);
  expect(linkElement).toBeInTheDocument();
});

import Home from '../Home';

describe('Home App', () => {
  it('should do something', () => {
    const component = shallow(<Home debug />);
    expect(component).toMatchSnapshot();
  });

  it('should be possible to activate button with Spacebar', () => {
    const component = mount(<MyComponent />);
    component
      .find('button#my-button-one')
      .simulate('keydown', { keyCode: 32 });
    expect(component).toMatchSnapshot();
    component.unmount();
  });

});

const clickFn = jest.fn();
describe('MyComponent', () => {
  it('button click should hide component', () => {
    const component = shallow(<MyComponent onClick={clickFn} />);
    component
      .find('button#my-button-two')
      .simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
});

// shallow only renders single components
