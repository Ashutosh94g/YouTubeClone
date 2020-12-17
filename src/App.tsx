import React from 'react';
import Sidebar from './Containers/Sidebar';
import Header from './Containers/Header';
import Content from './Containers/Content';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
				<Header />
      </header>
			<section className="App-content">
				<article className="App-article">
					<Sidebar />
				</article>
				<article className="App-article">
					<Content />
				</article>
			</section>
    </div>
  );
}

export default App;
