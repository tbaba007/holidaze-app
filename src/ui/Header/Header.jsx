import Button from '../Button/Button';
import HeaderStyles from './Header.module.scss';
//import navIcon from '../../assets/icons/drawer.svg'
const Header=()=>{
    return (
        <div className={HeaderStyles.container}>
            <div className={HeaderStyles.container__left}>
                Holidaze
            </div>
            <div className={HeaderStyles.container__middle}>
               <label>Explore</label>
               <label>Rooms</label>
               <label>About Us</label>
               <label>List your property</label>
            </div>
            <div className={HeaderStyles.container__right}>
               <Button text="Login"></Button>
               <Button text="Sign Up"></Button>
            </div>
         
        </div>
    )
}

export default Header;