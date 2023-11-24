import './globals.css'


function Home() {
  return (
    <main>
      <nav className="navbar navbar-expand-md">
        <a className="navbar-brand" href="#">
          <img src="./favicon.ico" alt="Silkroad" width="60" height="60" />
        </a>
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-toggle="collapse"
          data-target="#main-navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navigation">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Mens</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Womens</a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="/43453.jpg"
              alt="First slide"
              width="100"
              height="800"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Crew Neck Short Sleeve T-shirt</h5>
              <p>Gift him with all the colors for his wardrobe</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/wad.jpg"
              alt="Second slide"
              width="100"
              height="800"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/htfhtf.jpg"
              alt="Third slide"
              width="100"
              height="800"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <h6 className="text-uppercase font-weight-bold">About Us</h6>
              <p>
                Our store was founded in 1860 by two best friends, John Henry R.
                Relucio and John Mark B. Ormido of New Haven, Connecticut. They
                have always had a passion for fashion and clothing design. When
                they shared a dorm room in college, Henry and John Mark began
                crafting their brand, image, and concept for their first clothing
                store they would be opening. They didn’t want to limit their
                concept to just young, trendy styles.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <p>
                Aurora Blvd., Cubao, Quezon City, <br />Silkroad@silk.com
                <br />+63 905 456 4546
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center">2023 Copyright</div>
      </footer>
    </main>
  )
}


export default Home