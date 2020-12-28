import './header.css';
export default function Header (){
    return(
      <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark  bg-dark ">
     <a class="navbar-brand " href="#">E-shope</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fa fa-shopping-cart">
            <span className=" badge badge-danger">0</span>
          </i>
          Shopping cart
        </a>
      </li>
    

    </ul>
    <ul className="navbar-nav ">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          <i className="fa fa-home" />
          Home
          <span className="sr-only">(current)</span>
        </a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-info mr-2 my-2 my-sm-0 text-uppercase" type="submit">
        <i className="fa fa-lock"></i> Sign Up</button> 
      <button className="btn btn-outline-info my-2 my-sm-0 text-uppercase" type="submit"> <i className="fa fa-user" ></i> Sign In</button>
    </form>
  </div>
</nav>

    )
}