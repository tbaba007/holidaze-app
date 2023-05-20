import Button from '../Button';
import venueStyles from "./Venue.module.scss";

const Venue = ({venuList}) => {
  return (
    <>
      <section className={venueStyles.container__wrapper}>
        {venuList.slice(7,10).map((item) => {
          const {address}=item.location
          return (
            <section className={venueStyles.container} key={item.id}>
                <img src={item?.media[0]} alt={item?.media[0]} className={venueStyles.container__img}/>
              <label className={venueStyles.container__header}>
              &nbsp;  &nbsp;{address}
              </label>
              {/* <label className={venueStyles.container__duration}>
                {item.duration}
              </label> */}
              {/* <section className={venueStyles.container__features}>
                {
                    item.features.split(' ').map((features,index)=>{
                        return <label key={index+features}>{features}</label>
                    })
                }
              </section> */}
              <label className={venueStyles.container__price}>
                &nbsp;   {item.price}
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
