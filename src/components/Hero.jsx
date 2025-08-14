import './Hero.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import heroImage1 from '../assets/hero1.jpg';
import heroImage2 from '../assets/hero2.jpg';

function Hero(){
    return (
        <div id="hero" className="hero-section-background">
            <section className="hero-container-split">
                <div className="hero-text-column">
                    <h1>A jornada para o seu sorriso perfeito começa aqui.</h1>
                    <p>Equipamentos de ponta e especialistas dedicados a cuidar da sua saúde bucal com o carinho e a atenção que você merece.</p>
                    <a href="https://wa.me/551935247867" target="_blank" rel="noopener noreferrer" className="hero-button">
                        Agende sua Avaliação
                    </a>
                </div>
                <div className="hero-image-column">
                    <Swiper
                        modules={[Autoplay, EffectFade]}
                        effect={"fade"}
                        loop={true}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        className="hero-swiper"
                    >
                        <SwiperSlide>
                            <img src={heroImage1} alt="Recepção confortável da clínica CliniCare" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={heroImage2} alt="Vista ampla da recepção da clínica" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </div>
    )
}export default Hero;