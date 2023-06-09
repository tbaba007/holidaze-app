import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import venueStyles from "./Venue.module.scss";

const Venue = ({venuList}) => {
  const navigate=useNavigate()
  const onView=(view)=>{
    navigate(`/details/${view.id}`,{state:view})
  }

  return (
    <>
      <section className={venueStyles.container__wrapper}>
        {venuList.slice(33,36).map((item) => {
          const {address,city,country}=item.location
          return (
            <section className={venueStyles.container} key={item.id}>
                <img src={item?.media[0]} alt={item?.media[0]} className={venueStyles.container__img}/>
              <label className={venueStyles.container__header}>
              {address.toString()?.concat(','+city).toString()?.concat(','+country)}
              </label>
              <label className={venueStyles.container__duration}>
                {/* {item.duration} */}
              </label> 
               {/* <section className={venueStyles.container__features}>
                {
                    item.features.split(' ').map((features,index)=>{
                        return <label key={index+features}>{features}</label>
                    })
                }
              </section> */}
              <label className={venueStyles.container__price}>
                &nbsp;   {item?.price.toString()?.concat(' KR/Night')}
              </label>
              <section className={venueStyles.container__footer}>
                <button className={venueStyles.container__viewDetails} onClick={()=>onView(item)}>View Details</button>
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
