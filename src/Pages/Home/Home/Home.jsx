import About from "../About/About";
import BookBanner from "../BookBanner/BookBanner";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            {/* this is home */}
            <BookBanner></BookBanner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;