import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* Navigation Menu */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My Website</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#section1">Section 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section2">Section 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section3">Section 3</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section4">Section 4</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section5">Section 5</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <div className="container mt-4">
        <section id="section1" className="my-5">
          <h2>Section 1</h2>
          <p>This is the content for section 1.</p>
        </section>
        <section id="section2" className="my-5">
          <h2>Section 2</h2>
          <p>This is the content for section 2.</p>
        </section>
        <section id="section3" className="my-5">
          <h2>Section 3</h2>
          <p>This is the content for section 3.</p>
        </section>
        <section id="section4" className="my-5">
          <h2>Section 4</h2>
          <p>This is the content for section 4.</p>
        </section>
        <section id="section5" className="my-5">
          <h2>Section 5</h2>
          <p>This is the content for section 5.</p>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;