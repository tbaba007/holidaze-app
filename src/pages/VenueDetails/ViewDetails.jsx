import { useLocation } from "react-router-dom"
import Footer from "../../Components/ui/Footer"
import Header from "../../Components/ui/Header"
import detailsStyles from "./ViewDetails.module.scss"
import Amenities from "../../Components/ui/Amenities"
import map from "../../assets/images/map.svg"
import Button from "../../Components/ui/Button"
import Rating from "../../Components/ui/Ratings"
document.title = "Details"
const ViewDetails = () => {
  const { state } = useLocation()
  const {
    name,
    price,
    rating,
    meta,
    media,
    created,
    updated,
    location,
    maxGuests
  } = state
  return (
    <>
      <Header />
      <section className={detailsStyles.ViewDetailsContainer__title}>
        {name}
        <section><Rating score={rating} /> <label>{location?.address}</label></section>
      </section>
      <section className={detailsStyles.ViewDetailsContainer__img}>
        <img
          src={media[0]}
          alt="img"
          className={detailsStyles.ViewDetailsContainer__img}
        />
      </section>
      <section className={detailsStyles.ViewDetailsContainer__body}>
        <section className={detailsStyles.ViewDetailsContainer__body__left}>
          <p>{maxGuests} Guests</p>
          <p>Created:{created.split("T")[0]}</p>
          <p>Updated:{updated.split("T")[0]}</p>
          <hr />
          <label>Enjoy our amenities</label>
          <br />
          <Amenities {...meta} />
          <br />
          <label>Where you will be </label>
          <br />
          <img src={map} alt="map" />
          <br />
        </section>

        <section className={detailsStyles.ViewDetailsContainer__body__right}>
          <p
            className={
              detailsStyles.ViewDetailsContainer__body__right__unitPrice
            }
          >
            {price}kr NOK night
          </p>
          <section
            className={
              detailsStyles.ViewDetailsContainer__body__right__inputContainer
            }
          >
            <section
              className={detailsStyles.ViewDetailsContainer__body__right__input}
            >
              <div>
                <label>CHECK-IN</label>
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div
                className={
                  detailsStyles.ViewDetailsContainer__body__right__verticalDivider
                }
              />
              <div>
                <label>CHECK-OUT</label>
                <input type="date" />
              </div>

              <div
                className={
                  detailsStyles.ViewDetailsContainer__body__right__horizontalDivider
                }
              ></div>

              <div
                className={
                  detailsStyles.ViewDetailsContainer__body__right__ddlGuests
                }
              >
                <select>
                  <option>1 guest</option>
                  <option>2 guest</option>
                  <option>3 guest</option>
                  <option>4 guest</option>
                </select>
              </div>
            </section>
          </section>
          <Button text="Reserve"></Button>
        <label className={detailsStyles.ViewDetailsContainer__body__right__footer}>You won’t be charged yet</label>
         <section className={detailsStyles.ViewDetailsContainer__body__right__Pricing}>
            <label>{price}kr NOK night</label>
            <label>{price}kr NOK night</label>
         </section>
        </section>

      </section>
      <Footer />
    </>
  )
}

export default ViewDetails
