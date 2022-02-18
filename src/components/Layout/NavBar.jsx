
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = (props) => {
    
    const location = useLocation();
        const links = (<div><Link to='/'>Home</Link>
        <Link to='about'>About</Link> <Link to='portfolio'>Portofolio</Link></div>);

    return (
        <div style={{display: 'flex',alignItems:'center', justifyContent:'space-between',backgroundColor:'black', color:'white'}}>
            <div><p> NavBar logo</p></div>
            {links}

      </div>
    )
  
}

export default Navbar;