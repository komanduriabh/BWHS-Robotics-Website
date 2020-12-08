import React from 'react'
import '../../assets/css/Slideshow.css'
import One from '../../assets/images/gallarypics/One.JPG'
import Two from '../../assets/images/gallarypics/Two.JPG'
import Three from '../../assets/images/gallarypics/Three.JPG'
import Four from '../../assets/images/gallarypics/Four.JPG'
import Five from '../../assets/images/gallarypics/Five.JPG'
import Six from '../../assets/images/gallarypics/Six.JPG'


var slideIndex = 1;
function  showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3500); // Change image every 2 seconds
}


class Slideshow extends React.Component {
   

    componentDidMount() {
        showSlides();
    }
   

    render() {
        return (
            <div>
    
                <div className="slideshow-container">
                    <div className="mySlides fade">
                        <div className="numbertext">1 / 6</div>
                        <img src={One} style={{ width: '100%' }} />
                        {/* <div className="text">Caption Text</div> */}
                    </div>
                    <div className="mySlides fade">
                        <div className="numbertext">2 / 6</div>
                        <img src={Two} style={{ width: '100%' }} />
                        {/* <div className="text">Caption Two</div> */}
                    </div>
                    <div className="mySlides fade">
                        <div className="numbertext">3 / 6</div>
                        <img src={Three} style={{ width: '100%' }} />
                        {/* <div className="text">Caption Three</div> */}
                    </div>
                    <div className="mySlides fade">
                        <div className="numbertext">4 / 6</div>
                        <img src={Four} style={{ width: '100%' }} />
                        {/* <div className="text">Caption Three</div> */}
                    </div>
                    <div className="mySlides fade">
                        <div className="numbertext">5 / 6</div>
                        <img src={Five} style={{ width: '100%' }} />
                        {/* <div className="text">Caption Three</div> */}
                    </div>
                    <div className="mySlides fade">
                        <div className="numbertext">6 / 6</div>
                        <img src={Six} style={{ width: '100%', height: '60%' }} />
                        {/* <div className="text">Caption Three</div> */}
                    </div>
                </div>
                <br />
                <div style={{ textAlign: 'center' }}>
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                </div>
            </div>
        )
    }
}

export default Slideshow;