function HomeNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="nav-link" style={{ color: "white" }} href="/">
          Logo
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                Countact
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbardrop"
                data-toggle="dropdown"
                href="/"
              >
                More About US
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/">
                  Gallery
                </a>
                <a className="dropdown-item" href="/">
                  Contact
                </a>
                <a className="dropdown-item" href="/">
                  Company Details
                </a>
              </div>
            </li>
          </ul>

          <form className="form-inline ml-auto" action="/action_page.php">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default HomeNav;
