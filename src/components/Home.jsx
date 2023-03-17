import React from 'react';
import vg from '../assets/2.webp';
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
const Home = () => {
    return (
        <>
            <div className="home" id='home'>
                <main>
                    <h1>Kybans</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>

            <div className="home2" id='about'>
                <img src={vg} alt="" />
                <div>
                    <p>We are your one and only solution to the tech problems you face everyday. we are leading tech company whose aim is to increase the problem solving ability in children.</p>
                </div>
            </div>

            <div className="home3">
                <div>
                    <h1>Who we are ?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quisquam incidunt repudiandae, possimus ipsam tempora dolorum, nulla odit in qui praesentium aperiam facere rem? Perspiciatis accusamus non modi molestiae incidunt nesciunt? Sunt quae maiores possimus quas iusto, molestiae est, velit illo doloribus quos quod amet numquam ab tempora architecto veniam. Nesciunt officia assumenda magnam accusamus ad consectetur voluptatem totam, odit, quo, nostrum ex? Maiores facere, voluptate quos, iusto optio, cumque quae nobis tenetur corrupti iure nostrum placeat aliquam quidem. Obcaecati quidem unde qui commodi sunt fuga repudiandae eligendi tenetur aspernatur nesciunt ipsa ullam provident voluptatibus </p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article className='company-icons'>
                        <div style={{
                            animationDelay:'0.3s',
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay: '0.5s',
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                        <div style={{
                            animationDelay: '0.7s',
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{
                            animationDelay: '1s',
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home;