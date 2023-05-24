
import amenititesStyles from './Amenitites.module.scss';
import petsIcon from '../../../assets/icons/Pets.svg';
import wifiIcon from '../../../assets/icons/wifi.svg';
import parkingIcon from '../../../assets/icons/parking.svg'
import breakfastIcon from '../../../assets/icons/breakfast.svg'
const Amenities=(props)=>{
    const {wifi,parking,breakfast,pets}=props;
    return (
        <section className={amenititesStyles.amenitiesContainer}>
            <section className={!wifi?amenititesStyles.amenitiesContainer__notAvaiable: amenititesStyles.amenitiesContainer__wrapper}>
                <img src={wifiIcon} alt='wifi'/>
                <p>Wifi</p>
            </section>
            <section className={!parking?amenititesStyles.amenitiesContainer__notAvaiable: amenititesStyles.amenitiesContainer__wrapper}>
                <img src={parkingIcon} alt='wifi'/>
                <p>Parking</p>
            </section>
            <section className={!breakfast?amenititesStyles.amenitiesContainer__notAvaiable: amenititesStyles.amenitiesContainer__wrapper}>
                <img src={breakfastIcon} alt='wifi'/>
                <p>breakfast</p>
            </section>
            <section className={!pets?amenititesStyles.amenitiesContainer__notAvaiable: amenititesStyles.amenitiesContainer__wrapper}>
                <img src={petsIcon} alt='wifi'/>
                <p>pets</p>
            </section>
        </section>
    )
}

export default Amenities;