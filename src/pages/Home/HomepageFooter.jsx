import placeIcon from "../../assets/icons/map-pin.svg";
import searchIcon from "../../assets/icons/search.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import userIcon from "../../assets/icons/user.svg";
import HomepageStyles from './Home.module.scss'

const bookingUrls = [
    {
      id: 1,
      title: "Where are you going",
      icon: placeIcon,
    },
    {
      id: 2,
      title: "Check in date - Check out date",
      icon: calendarIcon,
    },
    {
      id: 3,
      title: "1 adult,0 children, 1 room",
      icon: userIcon,
    },
    {
      id: 4,
      title: "Search",
      icon: searchIcon,
    },
  ];
const HomepageFooter=()=>{
    return (
        <div className={HomepageStyles.banner__footer}>
        {bookingUrls.map((item) => {
          return (
            <div
              key={item.id}
              className={HomepageStyles.banner__footer__container}
            >
              {
                <img
                  src={item.icon}
                  alt={item.title}
                  className={HomepageStyles.banner__footer__container__img}
                />
              }
              {item.title}
            </div>
          );
        })}
      </div>
    )
}

export default HomepageFooter;