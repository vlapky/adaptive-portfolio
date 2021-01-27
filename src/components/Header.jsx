import Menu from './Menu'
import Nav from './Nav'
import Scroll from './Scroll'

const Header = () => (
  <header className="portfolio__header">
    <Nav />
    <Menu />
    <Scroll text="scroll down to see more" />
  </header>
)

export default Header
