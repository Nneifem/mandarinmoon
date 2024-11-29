import '../assets/styles/home.css'
import Instagram from '../assets/images/insta.png'
import Tiktok from '../assets/images/tiktok.png'
import Youtube from '../assets/images/youtube.png'
import selfie from '../assets/images/pfp.png'

export default function Home(){
    return(
        <>
        <header className='selfie-images'>
        <img src={selfie} className='img-fluid'></img>
        </header>
        <h1 className="name">mandarinmoonn</h1>
        <section className='info'>
            <a href="https://www.tiktok.com/@mandarinmooon"><p>Tiktok</p></a>
            <a href="https://www.instagram.com/mandarinmoonn/"><p>Instagram</p></a>
            <a href="https://bsky.app/profile/mandarinmoonn.bsky.social"><p>Bluesky</p></a>
            <a href="https://www.youtube.com/channel/UCPzmpuYVIXpHKUIPUEB8m0g"><p>Youtube</p></a>
        </section>

        <footer>only socials ໒꒰ྀི´ ˘ ` ꒱ྀིა</footer>
        </>
    )
}

{/* <section className="socials">
            <a href="https://www.tiktok.com/@mandarinmooon"><img src={Tiktok} className="tt-img"></img><p>tiktok</p></a>
            <a href="https://www.instagram.com/mandarinmoonn/"><img src={Instagram} className="insta-img"></img><p>instagram</p></a>
            <a href="https://www.youtube.com/channel/UCPzmpuYVIXpHKUIPUEB8m0g"><img src={Youtube} className="yt-img"></img><p>youtube</p></a>
        </section> */}