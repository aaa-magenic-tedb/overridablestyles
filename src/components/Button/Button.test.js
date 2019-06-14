import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import SecondaryTheme from '../Themes/SecondaryTheme';
import AAAButton from './Button';
import { getDOMNodeComputedStyle } from '../../test/DOM'; // Components
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

function overrideDefaultStyles() {
  return {
    root: {
      color: 'black',
      width: '25%'
    }
  };
}

const getFakeProps = overrides => {
  return {
    id: '1',
    styles: overrideDefaultStyles(),
    ...overrides
  };
};

const createButtonWithTheme = props => {
  return mount(
    <SecondaryTheme>
      <AAAButton {...props}>Button Override</AAAButton>
    </SecondaryTheme>
  );
};

describe('Test that the styling would select the correct settings in overrides', () => {
  it('has the correct color override', () => {
    const buttonWrapper = createButtonWithTheme(getFakeProps());
    const buttonNode = buttonWrapper
      .find('button')
      .children('span')
      .first()
      .getDOMNode();
    var color = getDOMNodeComputedStyle(buttonNode, 'color');
    expect(color).to.equal('black');
  });
});
