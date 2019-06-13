import React from 'react';
import AAAButton from './components/Button/Button';
import AAAPrimaryTheme from './components/Themes/PrimaryTheme';
import SecondaryTheme from './components/Themes/SecondaryTheme';
import './App.css';

function overrideDefaultStyles() {
  return {
    root: {
      color: 'black',
      width: '25%'
    }
  };
}
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <AAAPrimaryTheme>
          <AAAButton>Primary</AAAButton>
        </AAAPrimaryTheme>

        <SecondaryTheme>
          <AAAButton styles={overrideDefaultStyles()}>Overrides</AAAButton>
        </SecondaryTheme>
      </header>
    </div>
  );
}

export default App;
