import Nav from './Nav'

import img from '../assets/JasonWood.jpg'
import Scroll from './Scroll'

const Main = () => (
  <main className="portfolio__main">
    <Nav />
    <article className="portfolio__main__content">
      <div className="portfolio__main__content_img">
        <img src={img} alt="JasonWood" />
      </div>
      <div className="portfolio__main__content__about-me">
        <p className="portfolio__main__content__about-me_title">about me</p>
        <p className="portfolio__main__content__about-me_text">
          Lorem ipsum d olor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p className="portfolio__main__content__about-me_author">Jason Wood</p>
      </div>
    </article>
    <Scroll text="keep scrolling. there is still more to come" />
  </main>
)

export default Main
