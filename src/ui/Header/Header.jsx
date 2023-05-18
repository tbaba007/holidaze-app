import Button from '../Button/Button';
import HeaderStyles from './Header.module.scss';
//import navIcon from '../../assets/icons/drawer.svg'
const Header=()=>{
    return (
        <section className={HeaderStyles.container}>
            <section className={HeaderStyles.container__left}>
                Holidaze
            </section>
            <section className={HeaderStyles.container__middle}>
               <label>Explore</label>
               <label>Rooms</label>
               <label>About Us</label>
               <label>List your property</label>
            </section>
            <section className={HeaderStyles.container__right}>
               <button className={HeaderStyles.login}>Login</button>
               <Button text="Sign Up"></Button>
            </section>
         
        </section>
    )
}

export default Header;