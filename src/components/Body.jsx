import './Body.css';
import movie1 from "../assets/mv1.avif"
import movie2 from "../assets/mv2.avif"
import movie3 from "../assets/mv3.avif"
import movie4 from "../assets/mv4.avif"
import movie5 from "../assets/mv5.avif"
import movie6 from "../assets/mv6.avif"
import movie7 from "../assets/mv7.avif"
import movie8 from "../assets/mv8.avif"
import movie9 from "../assets/mv9.avif"
import movie10 from "../assets/mv10.avif"

export const Body = () => {
  return (
    <div className="movie-sec">
    <div className="title">
      <h1>Recommended Movies</h1>
    </div>
    <div className="movie-gallery">
      <div className="m1">
        <img src={movie1}></img>
        <h4>Srikant</h4>
        <h5>Biography Drama</h5>
      </div>
      <div className="m2">
        <img src={movie2}></img>
        <h4>Kingdom of the Planet of the Apes</h4>
        <h5>Action, Adventure, Sci-Fi</h5>
      </div>
      <div className="m3">
        <img src={movie3}></img>
        <h4>Nayan Rahasya</h4>
        <h5>Suspense/Thriller</h5>
      </div>
      <div className="m4">
        <img src={movie4}></img>
        <h4>Dabaru</h4>
        <h5>Drama/Sports</h5>
      </div>
      <div className="m5">
        <img src={movie5}></img>
        <h4>Eta Amader Golpo</h4>
        <h5>Drama/Romance</h5>
      </div>
      <div className="m6">
        <img src={movie6}></img>
        <h4>Maidan</h4>
        <h5>Biography/Drama/Sports</h5>
      </div>
      <div className="m7">
        <img src={movie7}></img>
        <h4>LapataLadies</h4>
        <h5>Drama/Comedy</h5>
      </div>
      <div className="m8">
        <img src={movie8}></img>
        <h4>The Boy and the heron</h4>
        <h5>Drama</h5>
      </div>
      <div className="m9">
        <img src={movie9}></img>
        <h4>Alpa</h4>
        <h5>Drama/Romance</h5>
      </div>
      <div className="m10">
        <img src={movie10}></img>
        <h4>Tarot</h4>
        <h5>Suspense/Thriller/Drama</h5>
      </div>
      
    </div>
    </div>
  )
}
