import './HeroSection.css';

export default function HeroSection() {
    return (
        <section className="hero" id='hero'>
            <h1 className='hero-title'>Student<span>Quarters</span></h1>
            <p>Наш сайт – это интерактивный гид по миру общежитий УРФУ.
                С помощью удобной карты вы сможете легко строить маршруты от одного общежития до другого,
                планируя свои перемещения с точностью до минуты. Каждое общежитие сопровождается подробным описанием,
                фотографиями и актуальной контактной информацией, чтобы вам было проще сделать правильный выбор.</p>
        </section>
    )
}