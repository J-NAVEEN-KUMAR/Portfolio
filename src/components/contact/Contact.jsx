import "./contact.scss";
import { forwardRef, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useLottie } from "lottie-react";
import mail from "./Mail_animation.json";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const formRef = useRef();
  const [open, setOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vtm2iiq",
        "template_0j5wxch",
        formRef.current,
        "user_4n5N40zXLahKBa09OHyco"
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //Snackbar

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  //Lottie animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mail,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mod = {
    height: 200,
    width: 300,
  };
  const { View } = useLottie(defaultOptions, mod);

  return (
    <div className="main">
      <div className="Contact" id="Contact">
        {/* <div className="bg"></div> */}
        <div className="wrapper">
          <div className="left">
            <h1 className="title">Get in Touch!</h1>
            <div className="info">
              <div className="infoItem">
                <img src="./assets/phone.png" alt="" className="icon" />
                +91 7661071399
              </div>
              <div className="infoItem">
                <img src="./assets/mail.png" alt="" className="icon" />
                naveen.jeruban@gmail.com
              </div>
              <div className="infoItem">
                <img src="./assets/location.png" alt="" className="icon" />
                15/414, Victoria pet, Adoni - 518301, Kurnool(Dist), AP.
              </div>
              <div className="infoItemLink">
                <a
                  href="https://www.linkedin.com/in/j-naveen-kumar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./assets/linkedin.png" alt="" className="icon" />
                </a>
                Connect with me on LinkedIn
              </div>
              <div className="infoItemLink">
                <a
                  href="https://github.com/J-NAVEEN-KUMAR"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./assets/github.png" alt="" className="icon" />
                </a>
                See my GitHub profile
              </div>
            </div>
          </div>
          <div className="right">
            <p className="desc">
              <strong>What's on your mind?</strong> Get in touch. Always ready
              to colloborate if the right project comes along.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="input-section">
                <div className="left-section">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="user_name"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email address"
                    name="user_email"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Email Subject"
                    name="user_subject"
                    required
                  />
                </div>
                <div className="lottie">{View}</div>
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                required
              ></textarea>
              <Stack spacing={2}>
                <button>
                  Send
                  <img src="./assets/send.png" alt="" />
                </button>
                <Snackbar
                  open={open}
                  autoHideDuration={3000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    Thanks for contacting! Will reply soon.
                  </Alert>
                </Snackbar>
              </Stack>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footerbg">
          <p>
            Created by{" "}
            <strong style={{ color: "crimson" }}> Naveen Kumar J </strong> |
            &#169; 2022 All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
