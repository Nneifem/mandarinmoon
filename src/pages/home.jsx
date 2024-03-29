import '../assets/styles/home.css'
import Instagram from '../assets/images/icons8-instagram-50.png'
import Tiktok from '../assets/images/tiktok.png'
import Youtube from '../assets/images/youtube.png'
import selfie from '../assets/images/selfie.png'

export default function Home(){
    return(
        <>
        <section className='selfie-images'>
        <img src={selfie} className='img-fluid'></img>
        </section>
        <h1 className="bio">grey</h1>
                <section className="main-page">
                <a href="https://www.tiktok.com/@mandarinmooon" className="tt">TikTok <img src={Tiktok} className='tiktok-pic' alt='tiktok logo'></img></a>
                <a href="https://www.instagram.com/mandarinmoonn/" className="insta">Instagram <img src={Instagram} className='insta-pic' alt='instagram logo'></img></a>
                <a href="https://www.youtube.com/channel/UCPzmpuYVIXpHKUIPUEB8m0g" className="youtube">Youtube <img src={Youtube} className='youtube-pic' alt='youtube logo'></img></a>
                </section>
                <footer className="footer">
                    <p className="credits">made by me ᵔᴥᵔ</p>
                </footer>   
        </>
    )
}