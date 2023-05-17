import venueStyles from './Venue.module.scss'
const Venue=()=>{
    return (
        <>
        <div className={venueStyles.container__wrapper}>
        <div className={venueStyles.container}>
            <label className={venueStyles.container__header}>13th Avenue, Lisbay Street, Graz</label>
            <label className={venueStyles.container__duration}>March 2 -10</label>
        </div>
        <div className={venueStyles.container}>
            <label className={venueStyles.container__header}>13th Avenue, Lisbay Street, Graz</label>
            <label className={venueStyles.container__duration}>March 2 -10</label>
        </div>
        <div className={venueStyles.container}>
            <label className={venueStyles.container__header}>13th Avenue, Lisbay Street, Graz</label>
            <label className={venueStyles.container__duration}>March 2 -10</label>
        </div>
        </div>
       
     </>
    )
}

export default Venue;