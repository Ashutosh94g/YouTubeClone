import React from 'react';
import Sidebar from './Containers/Sidebar';
import Header from './Containers/Header';
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
					content
				</article>
			</section>
    </div>
  );
}

export default App;
