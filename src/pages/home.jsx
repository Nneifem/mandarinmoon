import '../assets/styles/home.css'
import Instagram from '../assets/images/icons8-instagram-50.png'
import Tiktok from '../assets/images/tiktok.png'
import Youtube from '../assets/images/youtube.png'

export default function Home(){
    return(
        <>
        <h1 className="name">Hello Fellas</h1>
        <h3 className="bio">it's grey</h3>
            {/* <div className="text-center">
            <img src= className='img-fluid'></img>
                </div>  */}
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