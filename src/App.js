import React from 'react';
import logo from './logo.svg';
import './App.css';
import Father from './components/Father/Father'  // 此处引入组件
import './components/Father/father.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>I am header</div>
      </header>
      <section id='sec'>
        <Father></Father>
      </section>
      <footer>
        <img src={logo} className="App-logo" alt="logo" />
        I am footer
      </footer>
    </div>
  );
}

export default App;
