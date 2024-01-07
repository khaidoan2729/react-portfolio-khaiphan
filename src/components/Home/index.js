import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
            <div className='text-zone'>
                <h1>Hello, <br/> I'm {/*<img src = {LogoTitle} alt = "developer"/> */}
                Khai Phan <br/> Junior Developer </h1>

                <h2>
                    Frontend Developer / Software Developer
                </h2>
                <Link to = "/contact" className= 'flat-button'> CONTACT ME</Link>
            </div>

        </div>
    );
}
export default Home