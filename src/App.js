function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        <a className="navbar-brand" href="/">Navbar</a>

        <ul className="navbar-nav">

          <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/link">Link</a>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

        </ul>

      </div>
    </nav>
    </>
  );
}

export default App;
