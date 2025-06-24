import '../assets/styles/home.css'
import Instagram from '../assets/images/insta.png'
import Tiktok from '../assets/images/tiktok.png'
import Youtube from '../assets/images/youtube.png'
import selfie from '../assets/images/chohan.png'

export default function Home(){
    return(
        <>
        <section className="fadeInUp-animation">
            <header className='selfie-images'>
            <img src={selfie} className='img-fluid'></img>
            </header>
            <h1 className="name">˚ʚ grey ɞ˚</h1>
            <section className="subtitle">
                <p>northeast cosplayer <br></br> I dress up as my fav characters</p>
            </section>

            <section className='socials'>
                <a href="https://www.instagram.com/mandarinmoonn/"><img src={Instagram} className='media'></img></a>
                <a href="https://www.tiktok.com/@mandarinmooon"><img src={Tiktok} className='media'></img></a>
                <a href="https://www.youtube.com/channel/UCPzmpuYVIXpHKUIPUEB8m0g"><img src={Youtube} className='media'></img></a>
            </section>

            <section className='social-boxes'>
                <section className='insta-box'>
                    <a href="https://www.instagram.com/mandarinmoonn/"><img src={Instagram} className='media' ></img>Instagram</a>
                </section>

                <section className='tt-box'>
                <a href="https://www.tiktok.com/@mandarinmooon"><img src={Tiktok} className='media'></img>TikTok</a>
                </section>

                <section className='yt-box'>
                <a href="https://www.youtube.com/channel/UCPzmpuYVIXpHKUIPUEB8m0g"><img src={Youtube} className='media'></img>YouTube</a>
                </section>
            </section>
            
            <footer>dm on insta for collab</footer>
        </section>
        </>
    )
}