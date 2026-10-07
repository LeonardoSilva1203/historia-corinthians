import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
 <Link to="/" >
    <img src="../assets/corinthians.jpg" alt="Escudo do Corinthians" />
    </Link>
        <h1>História do Corinthians</h1>
     <nav>
        <ul>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/linha-do-tempo">
                    Linha do tempo
                </Link>
            </li>
            <li>
                <Link to="/acontecimentos">
                    Acontecimentos
                </Link>
            </li>
            <li>
                <Link to="/elenco">
                    Elenco
                </Link>
            </li>
            <li>
                <Link to="/idolos">
                    Ídolos
                </Link>
            </li>
            <li>
                <Link to="/estadio">
                    Estádio
                </Link>
            </li>
            <li>
                <Link to="/classicos">
                    Clássicos
                </Link>
            </li>
        </ul>
     </nav>
    </header>
  )
}
 