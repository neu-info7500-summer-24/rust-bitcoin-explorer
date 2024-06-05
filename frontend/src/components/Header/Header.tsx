import React from 'react';
// import { Route } from 'react-router-dom';
import './Header.css'
import { Link } from 'react-router-dom';
// import BlockList from '../BlockList/BlockList';
// import TransactionList from './components/TransactionList/TransactionList';
// import Charts from './components/Charts/Charts';

function Header() {
  console.log("Header loaded");
  return (
    <header>
        <div className='navbar'>
            <nav>
                <Link to="/"><h1>NUBEX</h1></Link>
                <ul className='right-nav'>
                    <Link to="/blocks"><li>Blocks</li></Link>
                    <Link to="/transactions"><li>Transactions</li></Link>
                    <Link to="/charts"><li>Charts</li></Link>
                </ul>
            </nav>
        </div>
    </header>
  );
}

export default Header;