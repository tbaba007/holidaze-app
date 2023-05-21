import navIcon from '../../../assets/icons/drawer.svg'
import profileIcon from '../../../assets/icons/Profile.svg'
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import Button from '../Button';
import HeaderStyles from './Header.module.scss';
import { Link } from 'react-router-dom';

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
    const isUserLoggedIn=useLocalStorage('user');
    
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
                {!isUserLoggedIn[0] &&
                <>
               <Link to="/login"><button className={HeaderStyles.login}>Login</button></Link>
               <Link to="/register"><Button text="Sign Up"></Button></Link>
               <img src={navIcon} alt='navIcon' className={HeaderStyles.container__right__navimg}/>
               </>
                }
                {
                   
                    isUserLoggedIn[0] && <><img src={profileIcon} alt='profile'/> <label>Hello {isUserLoggedIn[0].name}</label></>
                }
            </div>
         
        </div>
    )
}

export default Header;