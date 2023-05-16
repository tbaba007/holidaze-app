import footerStyles from "./Footer.module.scss";
const Footer = () => {
  return (
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
          <label>Explore</label>
          <label>Sign Up</label>
          <label>Login</label>
          <label>About us</label>
          <label>Rooms</label>
          <label>Bookings</label>
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
  );
};

export default Footer;
