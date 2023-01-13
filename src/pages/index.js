import * as React from "react"
import '../styles/style.scss'

const works = [
  {
    name: 'Rouvenat',
    url: 'https://rouvenat.com/'
  },
  {
    name: 'Tee Tran',
    url: 'https://teetran.com/'
  },
  {
    name: 'True To Form',
    url: 'https://truetoform.design/'
  },
  {
    name: "Action Etrange",
    url: 'https://actionetrange.tv/'
  },
  {
    name: 'Engineered Floors',
    url: 'https://www.engineeredfloors.com/'
  },
  {
    name: 'Benjamin Briand',
    url: 'https://benjaminbriandavocat.com/'
  },
  {
    name: 'Batiik Studio',
    url: 'http://batiik.fr/'
  },
  {
    name: 'Pinchbank',
    url: 'https://www.pinchbanking.com/'
  },
  {
    name: 'Nexvestra',
    url: 'https://www.nexvestra.com/'
  },
  {
    name: 'City Place Dallas',
    url: 'https://cityplacedallas.com/'
  }
]

const IndexPage = () => {
  return (
    <main className="Home">
      <div className="Home__Left">
        <h1 className="Home__Title">Clément Vion</h1>
        <p className="Home__Job">Freelance creative developer</p>
      </div>
      <div className="Home__Right">
        <section className="Home__Works">
          <h2 className="Home__WorksTitle">Selected Works</h2>
          <ul className="Home__WorksList">
            {works.map((work, index) => (
              <li className="Home__WorksItem" key={`home-works-list-${index}`}>
                <a
                  className="Home__WorksItemLink" 
                  href={work.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {work.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <p className="Home__Infos">I have also worked on projects for companies such as Facebook and Adidas but nothing can be publicly shared here.</p>
        <a className="Home__Email" href="mailto:clementvion1@gmail.com">clementvion1@gmail.com</a>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Clément Vion – Freelance Creative Developer</title>
