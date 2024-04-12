import './Footer.css'



const Footer = ({email, nummber, link}) =>{
    return( 
<div className='footer'>
 <div className='email'>{email}</div>
 <div className='nummber'>{nummber}</div>
 <div className='info'>{link}</div>
 
</div>


        )
}
export default Footer;