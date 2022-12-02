import logo from '../assets/img/banner.png';

function Footer(){
    /**
     * Estructura del footer
     * @returns footer
     */
    return(
        <div id="footer">
            <footer className="footer-distributed">

                    <div className="footer-left">

                        <h1 className="logo"><img src={logo} alt="Delivery's of Movies logo"/></h1>

                        <p className="footer-company-name">Delivery's of Movies © 2022</p>
                    </div>

                    <div className="footer-center">

                        <div>
                            <i className="fa fa-map-marker"></i>
                            <p><span>Los Lagos, Puerto Montt</span> Chile 🇨🇱</p>
                        </div>

                        <div>
                            <i className="fa fa-phone"></i>
                            <p>+9 9999-9999</p>
                        </div>

                        <div>
                            <i className="fa fa-envelope"></i>
                            <p><a href="#s">support@deliverysofmovies.com</a></p>
                        </div>

                    </div>

                    <div className="footer-right">

                        <p className="footer-company-about">

                            <span>Sobre la página</span>

                            Podrá ver la información, críticas y ranking de tus películas favoritas.
                        </p>

                        <div className="footer-icons">

                            <a href="#6"><i className="fa fa-facebook"></i></a>
                            <a href="#7"><i className="fa fa-twitter"></i></a>
                            <a href="#8"><i className="fa fa-linkedin"></i></a>
                            <a href="#9"><i className="fa fa-github"></i></a>

                        </div>

                    </div>

                    </footer>
        </div>                   
    )
}

export default Footer;