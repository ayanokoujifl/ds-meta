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
          <a href="https://www.instagram.com/luis_gustavo_fl">  @luis_gustavo_fl </a>
        </p>
      </div>
    </header>
  )
}
