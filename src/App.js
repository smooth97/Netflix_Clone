import React from 'react';
import Nav from './components/Nav';
import Layout from './containers/Layout';
import Footer from './components/Footer';
import Header from './components/Header';



function App() {

  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Layout/>
    </div>
  );
}

export default App;
