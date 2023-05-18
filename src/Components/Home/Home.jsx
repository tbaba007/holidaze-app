import HomeImage from "../../assets/images/HomeImage.svg";
import Button from "../../ui/Button/Button";
import HomepageStyles from "./Home.module.scss";
import placeIcon from "../../assets/icons/map-pin.svg";
import searchIcon from "../../assets/icons/search.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import userIcon from "../../assets/icons/user.svg";
import mountainImage from '../../assets/images/Mountains.svg';
import cultureImage from '../../assets/images/Culture.svg';
import beachImage from '../../assets/images/Beach.svg';
import outdoorImage from '../../assets/images/Outdoor.svg';
import Venue from "../Venues";

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
const Home = () => {
  document.title = "Home";
  return (
    <>
      <div className={HomepageStyles}>
        <img src={HomeImage} alt="HomeImage" className={HomepageStyles.image} />
        <div className={HomepageStyles.headerText}>
          <h1>STAY WITH COMFORT</h1>
          <label>Your home away from home where you stay with comfort</label>
          <Button text="Book Now">Book Now</Button>
        </div>
      </div>
      <div className={HomepageStyles.banner__footer}>
        {bookingUrls.map((item) => {
          return (
            <div
              id={item.id}
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
      <section className={HomepageStyles.venuHeader}>
        <section className={HomepageStyles.venuHeader__left}>
          Featured Venures
          <label>Explore our featured ventures</label>
        </section>
        <div className={HomepageStyles.venuHeader__right}>View all items</div>
      </section>
      <Venue />

      <section className={HomepageStyles.subscriberContainer}>
        <span className={HomepageStyles.subscriberContainer__header}>
          Subscribe to get the latest
          <br />
          news about us.
        </span>
        <br />
        <span className={HomepageStyles.subscriberContainer__body}>
          Subscribe to get notified about our special offers. Enter your email
          below.
        </span>

        <section className={HomepageStyles.subscriberContainer__input}>
          <input type="email" placeholder="Enter Your Email Address" required />{" "}
          <section
            className={HomepageStyles.subscriberContainer__input__inputButton}
          >
            <Button text="Subscribe"></Button>
          </section>
        </section>
      </section>

      <section className={HomepageStyles.browseByCategory}>
        <div className={HomepageStyles.browseByCategory__one}>
        <img src={mountainImage} alt="HomeImage"  />
        </div>
        <div className={HomepageStyles.browseByCategory__four}>
        <img src={beachImage} alt="HomeImage"  />
        </div>
        <div className={HomepageStyles.browseByCategory__five}>
        <img src={cultureImage} alt="HomeImage"  />
        </div>
        <div className={HomepageStyles.browseByCategory__six}>
        <img src={outdoorImage} alt="HomeImage"  />
        </div>
     
      </section>
    </>
  );
};

export default Home;
