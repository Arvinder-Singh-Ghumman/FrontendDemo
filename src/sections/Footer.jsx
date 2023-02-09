import headset from "../assets/headset.png";
import submit from "../assets/paper-plane.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="main">
        <div className="contacts">
        <h1 className="footerHeadingContact">Contacts</h1>
          <div className="contactDouble">
            <img src={headset} alt="" />
            <div className="contactNumber">
              <p>Having questions?</p>
              <p className="contactBold">+62 542 54136495</p>
            </div>
          </div>
          <p>Address: the above number,<br /> and this adress,both are fake</p>
          <p>email: fakeaswell@fake</p>
        </div>
        <div className="links">
          <h1 className="footerHeading">Links</h1>
          <div className="linkcols">
            <div className="linkscol1">
              <p>About company</p>
              <p>our services</p>
              <p>Team members</p>
              <p>portfolio</p>
            </div>
            <div className="linkscol2">
              <p>Pricing</p>
              <p>Testimonials</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <div className="subscribeUs">
          <h1 className="footerHeading">Subscribe </h1>
          <div className="input">
            <input type="text" placeholder="Enter your email" />
            <img
              src={submit}
              alt="submit"
              onClick={() => alert("This is not yet working :)")}
            />
          </div>
          <p>Thanks for seeing this till here</p>
        </div>
      </div>
      <div className="copyright">
        <p>© This is just a portfolio Website built by Arvinder Singh</p>
      </div>
    </div>
  );
};

export default Footer;
