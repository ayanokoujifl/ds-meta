import logo from '../../assets/images/logo.svg'
import './style.css'

export function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://github.com/ayanokoujifl" target='_blank'>  @luis_gustavo_fl </a>
        </p>
      </div>
    </header>
  )
}
