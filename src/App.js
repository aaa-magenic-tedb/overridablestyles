import React from 'react';
import AAAButton from './components/Button/Button';
import AAALink from './components/Link/Link';
import AAAPrimaryTheme from './components/Themes/PrimaryTheme';
import SecondaryTheme from './components/Themes/SecondaryTheme';
import Splitbutton from './components/Button/SplitButton';
import './App.css';

function overrideDefaultStyles() {
  return {
    root: {
      width: '25%'
    },
    label: {
      color: 'black'
    }
  };
}
function overrideDefaultLinkStyles() {
  return {
    primary: {
      color: '#40EA68'
    },
    hover: {
      color: 'red'
    }
  };
}
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <span>Button Sample Override</span>
        <AAAPrimaryTheme>
          <AAAButton>Primary</AAAButton>
        </AAAPrimaryTheme>

        <SecondaryTheme>
          <AAAButton id='1' styles={overrideDefaultStyles()}>
            Overrides
          </AAAButton>
        </SecondaryTheme>
        <hr style={{ width: '100%' }} />

        <AAAPrimaryTheme>
          <AAALink
            className='primary'
            overrides={overrideDefaultLinkStyles()}
            target='_blank'
            href='https://material-ui.com/components/buttons/'
          >
            Split Button reusing the Button component above
          </AAALink>
        </AAAPrimaryTheme>

        <span>Split Button Override</span>
        <AAAPrimaryTheme>
          <Splitbutton styles={overrideDefaultStyles()} />
        </AAAPrimaryTheme>
      </header>
    </div>
  );
}

export default App;
