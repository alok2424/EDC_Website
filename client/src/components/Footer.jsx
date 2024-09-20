import { NavLink } from "react-router-dom";
import "./Footer.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <>
      {/* <!-- Code for Footer section --> */}
      <footer className="footer">
        <div className="container">
          <div className="footer_container">
            <div className="footer_container_left">
              <div className="footer_logo">
                <img src="../imgs/EDC_logo.png" alt="" />
              </div>
             
              <div className="footer_img">
                <img src="../imgs/Herosection.png" alt="" />
              </div>

              <div className="icon">
                <p>Stay Updated!</p>
                <p>Follow us on Social Media.</p>
                <div className="footer_icons">
                  <div>
                    <NavLink
                      to="https://www.linkedin.com/company/edc-jssate/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="https://www.youtube.com/@edcjss9486"
                      target="_blank"
                    >
                      <AiOutlineYoutube />
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="https://www.instagram.com/ecelljss/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </NavLink>
                  </div>
                  <div>
                    <NavLink to="https://twitter.com/cell_edc" target="_blank">
                      <RiTwitterXFill />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <hr />
             
            <div class="footer_container_map">
              <p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.579064674369!2d77.35669767520196!3d28.612402184995087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56a46bcf20d%3A0xb8dae57f4172c44e!2sJSS%20STEP%20Incubator!5e0!3m2!1sen!2sin!4v1726851172089!5m2!1sen!2sin" 
              width="300" height="300"  allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </p>
            </div>
            <div className="tabletBottom">
              <div className="footer_container_middle">
                <ul>
                  <h4>Quick Links</h4>
                  <li><NavLink to="/team">Team Members</NavLink></li>
                  <li><NavLink to="https://jssaten.ac.in/" target="_blank">JSSATE Noida</NavLink></li>
                  <li><a href="/ #our_events">Upcoming Event</a></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink>Collaborate</NavLink></li>
                  <li><NavLink to="/aboutus">Gallery</NavLink></li>
                  <li><NavLink to="/events">Events</NavLink></li>
                </ul>
              </div>

              <div className="footer_container_right">
                <form className="enquiry">
                  <label htmlFor="email">Join Newsletter</label>
                  <div className="enquiry_email">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                    />
                    <button>&rarr;</button>
                  </div>
                  <label htmlFor="">Love to hear you...</label>
                  <div>
                    <button type="button">edc@gmail.com</button>
                  </div>
                </form>
                <div>
                  <p>
                    JSS Academy of Technical Education, Noida. C-20/1,
                    Sector-62, U.P. INDIA-201301
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="divsion">
            <hr style={{ border: "1px solid grey" }} />
          </div>
          <div id="policy">
            <h4>Copyright&nbsp;</h4>
            <p>&copy; 2024 EDC JSS</p>
          </div>
        </div>
      </footer>
    </>
  );
};
