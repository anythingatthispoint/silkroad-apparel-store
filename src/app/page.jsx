import './globals.css'

function Home() {
  return (
    <main>
      <nav class="navbar navbar-expand-md">
        <a class="navbar-brand" href="#">
          <img src="./favicon.ico" alt="Silkroad" width="60" height="60" />
        </a>
        <button
          class="navbar-toggler navbar-dark"
          type="button"
          data-toggle="collapse"
          data-target="#main-navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main-navigation">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mens</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Womens</a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="/43453.jpg"
              alt="First slide"
              width="100"
              height="800"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Crew Neck Short Sleeve T-shirt</h5>
              <p>Gift him with all the colors for his wardrobe</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="/wad.jpg"
              alt="Second slide"
              width="100"
              height="800"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="/htfhtf.jpg"
              alt="Third slide"
              width="100"
              height="800"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12">
              <h6 class="text-uppercase font-weight-bold">About Us</h6>
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
            <div class="col-lg-4 col-md-4 col-sm-12">
              <h6 class="text-uppercase font-weight-bold">Contact</h6>
              <p>
                Aurora Blvd., Cubao, Quezon City, <br />Silkroad@silk.com
                <br />+63 905 456 4546
              </p>
            </div>
          </div>
        </div>
        <div class="footer-copyright text-center">2023 Copyright</div>
      </footer>
    </main>
  )
}

export default Home