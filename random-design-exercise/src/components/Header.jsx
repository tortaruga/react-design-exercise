import hero from '/images/hero.jpg'

export default function Header() {
    return (
        <header>
            <img className='header--hero' src={hero} alt="random hero image" />
        </header>
    )
}