import React from 'react';
import '../style/App.css';
import Header from './Header';
import Nav from './Nav';
import Page from './Page';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <Header />
        </header>
        <main>
          <aside>
            <Nav />
          </aside>
          <section>
            <Page />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
