import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import HeaderStyles from './Header.module.scss';
import navIcon from '../../assets/icons/drawer.svg'
const menuList=[
    {
        id:1,
        title:'Explore',
        path:''
    },
    {
        id:2,
        title:'Rooms',
        path:''
    },
    {
        id:3,
        title:'About Us',
        path:''
    },
    {
        id:4,
        title:'List your property',
        path:''
    }
]
const Header=()=>{
    return (
        <div className={HeaderStyles.container}>
            <div className={HeaderStyles.container__left}>
                Holidaze
            </div>
            <div className={HeaderStyles.container__middle}>
              {
                menuList.map(menu=>{
                    return <label key={menu.id}>{menu.title}</label>
                })
              }
            </div>
            <div className={HeaderStyles.container__right}>
               <Link to="/login"><button className={HeaderStyles.login}>Login</button></Link>
               <Link to="/register"><Button text="Sign Up"></Button></Link>
               <img src={navIcon} alt='navIcon'/>
            </div>
         
        </div>
    )
}

export default Header;