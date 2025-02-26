import '../assets/styles/home.css'
import Instagram from '../assets/images/insta.png'
import Tiktok from '../assets/images/tiktok.png'
import Bluesky from '../assets/images/bluesky.png'
import Youtube from '../assets/images/youtube.png'
import selfie from '../assets/images/chohan.png'

export default function Home(){
    return(
        <>
        <header className='selfie-images'>
        <img src={selfie} className='img-fluid'></img>
        </header>
        <h1 className="name">˚ʚ grey ɞ˚</h1>
        <section className='socials'>
            <a href="https://www.instagram.com/mandarinmoonn/"><img src={Instagram} className='media'></img></a>
            <a href="https://www.tiktok.com/@mandarinmooon"><img src={Tiktok} className='media'></img></a>
            <a href="https://bsky.app/profile/mandarinmoonn.bsky.social"><img src={Bluesky} className='media'></img></a>
            <a href="https://www.youtube.com/channel/UCPzmpuYVIXpHKUIPUEB8m0g"><img src={Youtube} className='media'></img></a>
        </section>

        <footer>dm on insta for collab</footer>
        </>
    )
}