import React from 'react';
class Header extends React.Component
{
    constructor() {
        super()
        this.state={

        }
      }
      render()
      {
          return (
              <React.Fragment>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <h1><a className="text-danger " style={{textDecoration:'none'}} href="#">Amazeriffic</a></h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Sign Up!</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#"> FAQ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#"> Support</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</React.Fragment>
          )
      }
}
export default Header;