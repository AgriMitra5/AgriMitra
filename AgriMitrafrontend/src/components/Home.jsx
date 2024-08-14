import carousel1 from "../components/images/fphoto1.jpeg"
import carousel2 from "../components/images/fphoto2.jpg"
import carousel3 from "../components/images/2.jpg"

import Review from "../components/Review";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
const Home=()=>{
    return(
        <>
        <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
  <ol className="carousel-indicators">
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" />
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} />
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:"650px"}} src={carousel1} className="d-block w-100" alt="Slide 1" />
    </div>
    <div className="carousel-item">
      <img style={{height:"650px"}} src={carousel2} className="d-block w-100" alt="Slide 2" />
    </div>
    <div className="carousel-item">
      <img style={{height:"650px"}} src={carousel3} className="d-block w-100" alt="Slide 3" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>

<div className="mt-5 border p-4">
        <h2>What People Say About Us !</h2>
        <Review />
      </div>

<div className="">
  <Footer/>
</div>

        </>
    );
}

export default Home;