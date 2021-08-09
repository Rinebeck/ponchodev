import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import SectionTitle from "../components/SectionTitle"
import { useForm } from "react-hook-form"
import Loader from "../components/Loader"
import Button from "@material-ui/core/Button"
import Fade from "react-reveal/Fade"

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "400px",
    flexGrow: 1,
    marginBottom: '20px',
  },
  textArea: {
    height: "300px",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.6,
  },
  areaWrapper: {
    width: "100%",
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
    borderRadius: "30px",
    padding: "10px 55px",
    fontWeight: "bold",
    textTransform: "none",
    "&:hover": {
      background: "#fff",
      color: "#ff4c60",
    },
  },
  sendEmail: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
  question: {
    padding: '0 15px',
  }
}));

function ResponseMessage({ body, success }) {
  const className = success === true ? 'success message' : 'error message';
  return body ? <div className={className}>{body}</div> : <></>;
}

export default function Contact() {
  
  const classes = useStyles();

  const formId = "contact-form";

  const [showLoader, setShowLoader] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [responseMessage, setResponseMessage] = React.useState();
  const [responseStatus, setResponseStatus] = React.useState();

  const resetForm = () => {
     document.getElementById(formId).reset();
  }

  const handleResponse = (response) => {
    setShowLoader(false);
    setResponseStatus(response.result);
    setResponseMessage(response.message);
    setIsDisabled(true);
    resetForm();
  }

  const sendMail = (data) => {
    setShowLoader(true);
    let formdata = new FormData();
    formdata.append("api_token", process.env.REACT_APP_MAIL_API_KEY);
    formdata.append("name", data.name);
    formdata.append("email", data.email);
    formdata.append("subject", data.subject);
    formdata.append("message", data.message);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(process.env.REACT_APP_MAIL_API_URL+"mail/send", requestOptions)
      .then((response) => response.json())
      .then((result) => handleResponse(result))
      .catch((error) => console.log("error", error));
  };

  const handleSendMeClick = () => {
    window.open(
      "mailto:ponchopdev@gmail.com?subject=Dev Question&body=Hi Poncho! I'd like to get more info about..."
    );
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (data) => {
    sendMail(data);
  };

  return (
    <div id="contact">
      <Loader open={showLoader} />
      <SectionTitle title="Get in touch!" />
      <Grid container className={classes.root}>
        <Grid item md />
        <Grid item md />
        <Grid item md={2}>
          <h3 className={classes.question}>
            Don't like forms?{" "}
            <a
              href="#!"
              className={classes.sendEmail}
              onClick={handleSendMeClick}
            >
              Send me an email. 👋
            </a>
          </h3>
        </Grid>
        <Grid item md />
        <Grid item md={6} xs={12}>
          <form
            id={formId}
            autoComplete="off"
            className="p-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Fade top>
                  <input
                    placeholder="Your name"
                    {...register("name", { required: "Name is required" })}
                  />
                </Fade>
                {errors.name ? (
                  <p className="input-error">{errors.name?.message}</p>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <Fade right>
                  <input
                    placeholder="Email address"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Please provde a valid email address",
                      },
                    })}
                  />
                </Fade>
                {errors.email ? (
                  <p className="input-error">{errors.email?.message}</p>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12}>
                <Fade left>
                  <input
                    placeholder="Subject"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />
                </Fade>
                {errors.subject ? (
                  <p className="input-error">{errors.subject?.message}</p>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12}>
                <div className={classes.areaWrapper}>
                  <Fade bottom>
                    <textarea
                      rows={5}
                      placeholder="Message"
                      className={classes.textArea}
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                  </Fade>
                  {errors.message ? (
                    <p className="input-error">{errors.message?.message}</p>
                  ) : (
                    ""
                  )}
                </div>
              </Grid>
              <Grid item xs={12}>
                <Fade bottom>
                  <Button
                    variant="contained"
                    size="large"
                    className={classes.button}
                    type="submit"
                    disabled={isDisabled}
                  >
                    Send
                  </Button>
                </Fade>
              </Grid>
              <Grid item xs={12}>
                <ResponseMessage
                  body={responseMessage}
                  success={responseStatus}
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item md />
      </Grid>
    </div>
  );
}
