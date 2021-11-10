import React from 'react';
import { Link } from 'react-router-dom';
import { navbar} from './styles';


const Navbar=()=>{
    return(
    <navbar.Wrapper>
        <Link  className="link" to="/">
            Pokemon
        </Link>
        <Link  className="link" onClick={e=>window.open("https://github.com")}>
            Want To Contribute?
        </Link>
        
    </navbar.Wrapper>
    )
}

export default Navbar;