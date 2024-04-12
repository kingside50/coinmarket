import Button from '../button/Button';
import './Navbar.css'



const Navbar = ({header, content, msg}) =>{
    return( 
<div className='navBar'>
 <div className='header'>{header}</div>
  <Button style={"button"} content={content} action={msg}></Button> 
</div>


        )
}
export default Navbar;