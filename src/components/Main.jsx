import './Main.css';
import React,{useRef} from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/img1.avif';
import img2 from '../assets/images/img2.avif';
import img3 from '../assets/images/img3.avif';
import img4 from '../assets/images/img4.avif';
import img5 from '../assets/images/img5.avif';  
import img6 from '../assets/images/img6.avif';
import img7 from '../assets/images/img7.avif';

export default function Main() {
    const galleryRef = useRef(null);

    const scrollGallery = (direction) => {
    const scrollAmount = 600;
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="container">
        <h5 className="title">- Popular Stays -</h5>

        <div className="gallery-container">
            <div className="scroll-btn left" onClick={() => scrollGallery(-1)}>&#10094;</div>
            
            <div className="sub-container" ref={galleryRef}>

                <div className="gallery">
                    <Link to="/hotels">
                    <img src={img1} alt="img1" className="gallery-img"/>
                        <div className="abt-img">
                            <div className="abt-img-sub">
                                <h6 className="htl-nm">Revatii</h6>
                                <span className="prc-gust">&#8377;3999 for 2 nights</span>
                            </div>
                            <div className="abt-img-sub">
                                <h6 className="loc">Pune</h6>
                                <span className="rating">★4.9</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="gallery">
                    <Link to="/hotels">
                    <img src={img2} alt="" className="gallery-img"/>
                        <div className="abt-img">
                            <div className="abt-img-sub">
                                <h6 className="htl-nm">Antella</h6>
                                <span className="prc-gust">&#8377;4999 for 2 nights</span>
                            </div>
                            <div className="abt-img-sub">
                                <h6 className="loc">Mumbai</h6>
                                <span className="rating">★5.0</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="gallery">
                    <Link to="/hotels">
                    <img src={img3} alt="" className="gallery-img"/>
                        <div className="abt-img">
                            <div className="abt-img-sub">
                                <h6 className="htl-nm">Sanfr</h6>
                                <span className="prc-gust">&#8377;2449 for 2 nights</span>
                            </div>
                            <div className="abt-img-sub">
                                <h6 className="loc">Bengluru</h6>
                                <span className="rating">★4.8</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="gallery">
                    <Link to="/hotels">
                    <img src={img4} alt="" className="gallery-img"/>
                        <div className="abt-img">
                            <div className="abt-img-sub">
                                <h6 className="htl-nm">DOPOLI</h6>
                                <span className="prc-gust">&#8377;1999 for 2 nights</span>
                            </div>
                            <div className="abt-img-sub">
                                <h6 className="loc">Dapoli</h6>
                                <span className="rating">★4.9</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="gallery">
                    <Link to="/hotels">
                    <img src={img5} alt="" className="gallery-img"/>
                        <div className="abt-img">
                            <div className="abt-img-sub">
                                <h6 className="htl-nm">Manas</h6>
                                <span className="prc-gust">&#8377;2999 for 2 nights</span>
                            </div>
                            <div className="abt-img-sub">
                                <h6 className="loc">Manali</h6>
                                <span className="rating">★5.0</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="gallery">
                    <Link to="/hotels">
                    <img src={img6} alt="" className="gallery-img"/>
                        <div className="abt-img">
                            <div className="abt-img-sub">
                                <h6 className="htl-nm">Shrivas</h6>
                                <span className="prc-gust">&#8377;4999 for 2 nights</span>
                            </div>
                            <div className="abt-img-sub">
                                <h6 className="loc">Uttarakhand</h6>
                                <span className="rating">★4.9</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="gallery">
                    <Link to="/hotels">
                    <img src={img7} alt="" className="gallery-img"/>
                        <div className="abt-img">
                            <div className="abt-img-sub">
                                <h6 className="htl-nm">Noble</h6>
                                <span className="prc-gust">&#8377;5999 for 2 nights</span>
                            </div>
                            <div className="abt-img-sub">
                                <h6 className="loc">Assam</h6>
                                <span className="rating">★4.8</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="glr-link">
                    <a href="/hotels" className="glrlink">
                        <h4>See <br /> More...</h4>
                    </a>
                </div>
            </div>

            <div className="scroll-btn right" onClick={() => scrollGallery(1)}>&#10095;</div>
        </div>
    </div>
  )
}
