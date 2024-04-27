import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';





function Header() {
  return (
    <header className="header">
      <h1 className="headText roboto font60"><Link to="/">Tim's Antique Trucks</Link></h1>
      <nav>
      </nav>
    </header>
  );
}

export default Header;