
import footerStyles from "./Footer.module.scss";

const usefulLinks=[
  {
    id:1,
    title:'Explore',
    path:''
  },
  {
    id:2,
    title:'Sign Up',
    path:''
  },
  {
    id:3,
    title:'Login',
    path:''
  },
  {
    id:4,
    title:'About us',
    path:''
  },
  {
    id:5,
    title:'Rooms',
    path:''
  },
  {
    id:6,
    title:'Bookings',
    path:''
  },

]
const Footer = () => {
  return (
    <>
    <div className={footerStyles.container}>
      <div className={footerStyles.container__wrapper}>
        <section>
          <h3>HOLIDAZE</h3>
          <label>
            Your home away from where <br />
            you stay with comfort
          </label>
        </section>

        <section>
          <label>USEFUL LINKS</label>
          {usefulLinks.map((links)=>{
            // return <Link key={links.id} to={links.path}>{links.title}</Link>
            return <label key={links.id}>{links.title}</label>
          })}
        </section>

        <section>
          <label>SOCIALS</label>
          <div className={footerStyles.socials}>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </section>

        <section>
          <label>CONTACT</label>
          <div className={footerStyles.contact}>
            <p>furuset,1053 Oslo</p>
            <p>furuset@gmail.com</p>
            <p>+4747960268</p>
          </div>
        </section>
      </div>
      <div className={footerStyles.container__divider}/>
    </div>

    <div className={footerStyles.container__mobile}>
      <div className={footerStyles.container__wrapper}>
        <div className={footerStyles.top}>
        <section>
          <h3>HOLIDAZE</h3>
          <label>
            Your home away from where <br />
            you stay with comfort
          </label>
        </section>

        <section>
          <span>CONTACT</span>
          <div className={footerStyles.contact}>
            <p>furuset,1053 Oslo</p>
            <p>furuset@gmail.com</p>
            <p>+4747960268</p>
          </div>
        </section>
        </div>
       

       <div className={footerStyles.bottom}>
       <section>
          <span>USEFUL LINKS</span>
          {usefulLinks.map((links)=>{
            // return <Link key={links.id} to={links.path}>{links.title}</Link>
            return <label key={links.id}>{links.title}</label>
          })}
        </section>
       
        <section>
          <span>SOCIALS</span>
          <div className={footerStyles.socials}>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </section>
       </div>
       
     
      </div>
      <div className={footerStyles.container__divider}/>
    </div>
    
    <div className={footerStyles.container__copyright}>
    Copyright © {new Date().getFullYear()} | Holidaze, designed and programmed by Nsebo  
    </div>
    </>
    
  );
};

export default Footer;
