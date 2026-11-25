
import './layout.css'
import Nav from './nav';
function Header(){
return(
      <header className='header'>
            <h1 className='title'>
                  <span className='sp1'>Byte</span>
                  <span className='sp2'>Academy</span>
            </h1>
            <Nav/>
      </header>
)
}

export default Header;