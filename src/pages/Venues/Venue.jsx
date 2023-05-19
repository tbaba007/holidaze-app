import Button from "../Button/Button";
import venueStyles from "./Venue.module.scss";
import sampleImage from '../../assets/images/sampleImage.svg'

const stubVenue = [
  {
    id: 1,
    address: "13th Avenue, Lisbay Street, Graz",
    duration: "March 2-10",
    price: "1100 KR/Night",
    features: "4Beds 4Baths",
    image:sampleImage
  },
  {
    id: 2,
    address: "13th Avenue, Lisbay Street, Graz",
    duration: "March 2-10",
    price: "1100 KR/Night",
    features: "4Beds 4Baths",
    image:sampleImage
  },
  {
    id: 3,
    address: "13th Avenue, Lisbay Street, Graz",
    duration: "March 2-10",
    price: "1100 KR/Night",
    features: "4Beds 4Baths",
    image:sampleImage
  },
  
];
const Venue = () => {
  return (
    <>
      <section className={venueStyles.container__wrapper}>
        {stubVenue.map((item) => {
          return (
            <section className={venueStyles.container} key={item.id}>
                <img src={item.image} alt={item.id+item.image} className={venueStyles.container__img}/>
              <label className={venueStyles.container__header}>
                {item.address}
              </label>
              <label className={venueStyles.container__duration}>
                {item.duration}
              </label>
              <section className={venueStyles.container__features}>
                {
                    item.features.split(' ').map((features,index)=>{
                        return <label key={index+features}>{features}</label>
                    })
                }
              </section>
              <label className={venueStyles.container__price}>
                {item.price}
              </label>
              <section className={venueStyles.container__footer}>
                <button className={venueStyles.container__viewDetails}>View Details</button>
                <Button text="Book Now"></Button>
              </section>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default Venue;
