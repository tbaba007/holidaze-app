import { lazy, useEffect, useState } from "react"

import beachImage from "../../assets/images/Beach.svg"
import cultureImage from "../../assets/images/Culture.svg"
import mountainImage from "../../assets/images/Mountains.svg"
import outdoorImage from "../../assets/images/Outdoor.svg"
import Button from "../../Components/ui/Button"
import Footer from "../../Components/ui/Footer"
import Header from "../../Components/ui/Header"
import { getVenueList } from "../../services"
import HomepageStyles from "./Home.module.scss"
import HomepageFooter from "./HomepageFooter"

const Venue = lazy(() => import("../../Components/Venues"))

const Home = () => {
  document.title = "Home"
  const [venueList, setVenueList] = useState([])
  useEffect(() => {
    const getVenues = async () => {
      const response = await getVenueList()
      setVenueList(response)
    }
    getVenues()
  }, [])
  return (
    <>
      <Header />

      <div className={HomepageStyles.HeaderContainer}>
        
            <div className={HomepageStyles.headerText}>
              <h1>STAY WITH COMFORT</h1>
              <label>
                Your home away from home where you stay with comfort
              </label>
              <Button text="Book Now">Book Now</Button>
            </div>
          
        
      </div>
        <HomepageFooter />
      <section className={HomepageStyles.venuHeader}>
        <section className={HomepageStyles.venuHeader__left}>
          Featured Venures
          <label>Explore our featured ventures</label>
        </section>
        <div className={HomepageStyles.venuHeader__right}>View all items</div>
      </section>
        <Venue venuList={venueList} />

         
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
          <img src={mountainImage} alt="MountainImage" />
        </div>
        <div className={HomepageStyles.browseByCategory__four}>
          <img src={beachImage} alt="BeachImage" />
        </div>
        <div className={HomepageStyles.browseByCategory__five}>
          <img src={cultureImage} alt="CultureImage" />
        </div>
        <div className={HomepageStyles.browseByCategory__six}>
          <img src={outdoorImage} alt="OutdoorImage" />
        </div>
      </section>
      

      <Footer />
    </>
  )
}

export default Home
