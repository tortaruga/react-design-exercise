import InfoCard from "./InfoCard"

export default function About() {
    return (
        <section className="about">
           <div className="about--main-text">
             <h1 className="about--title">about</h1>
             <p className="about--p">we are the shade of the sky one moment before sunset. we are the snow falling in slow motion. we are the roar of the sea at night when only the moon is listening. nobody knows exactly what kind of service we provide, but we sure do it poetically.</p>
           </div>

           <div className="about--info">
              <InfoCard 
                        number="1"
                        text="Tis all a checkerboard of nights and days, where destiny with men for pieces plays"/>
                <InfoCard 
                          number="2"
                          text="hither and thither moves, and mates, and slays" />
                <InfoCard 
                          number="3"
                          text="and one by one back in the closet lays"/>
           </div>
        </section>
    )
}