import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NAV extends Component {
    render() {
        return (
            <nav>
           <ul>
               <li>
                   <Link to='/'>Home</Link>
               </li>
               <li>
                   <Link to='/profile'>Profile</Link>
               </li>
           </ul>
           </nav>
        );
    }
}

export default NAV;