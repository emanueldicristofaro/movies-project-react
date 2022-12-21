import logo from '../../assets/img/banner.png';
    
function Header(){
    /**
     * Estructura del header
     * @returns Header
     */
    return(
    <div id="header">
        <header className="header">
        <h1 className="logo"><img src={logo} alt="Delivery's of Movies logo"/></h1>
        </header>
    </div>
    )
}

export default Header;