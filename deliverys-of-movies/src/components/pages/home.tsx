import Banner from '../home_content/banner'
import Information from '../home_content/information'
import Header from '../modules/header'
import Footer from '../modules/footer'
import Body from '../home_content/body'

function home(){

    return (

        <div id="home">
            <Header />
            <Banner />
            <Information />
            <Body />
            <Footer />
        </div>
    )

}

export default home