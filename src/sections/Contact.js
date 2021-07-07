import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import SectionTitle from "../components/SectionTitle"
import { useForm } from "react-hook-form"
import Loader from "../components/Loader"
import Button from "@material-ui/core/Button"

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
}));

function ResponseMessage({ body, success }) {
  const className = success === true ? 'success message' : 'error message';
  return body ? <div className={className}>{body}</div> : <></>;
}

export default function Contact() {

  const [showLoader, setShowLoader] = React.useState(false);
  const [responseMessage, setResponseMessage] = React.useState();
  const [responseStatus, setResponseStatus] = React.useState();

  const classes = useStyles();

  const handleResponse = (response) => {
    setShowLoader(false);
    setResponseStatus(response.result);
    setResponseMessage(response.message);
  }

  const sendMail = (data) => {
    setShowLoader(true);
    let formdata = new FormData();
    formdata.append(
      "api_token",
      "be493c1eb7e1d8c9329c09094c49abcecfa5677d5533fc64cf3a119608152f9e"
    );
    formdata.append("name", data.name);
    formdata.append("email", data.email);
    formdata.append("subject", data.subject);
    formdata.append("message", data.message);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://quarellapi.herokuapp.com/mail/send", requestOptions)
      .then((response) => response.json())
      .then((result) => handleResponse(result))
      .catch((error) => console.log("error", error));
  };

  const handleSendMeClick = () => {
    window.open(
      "mailto:e.alfonsopedroza58@gmail.com?subject=Dev Question&body=Hi Poncho! I'd like to get more info about..."
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
          <h3>
            Don't like forms?{" "}
            <a href="#!" className={classes.sendEmail} onClick={handleSendMeClick}>
              Send me an email. 👋
            </a>
          </h3>
        </Grid>
        <Grid item md />
        <Grid item md={6} xs={12}>
          <form
            autoComplete="off"
            className="p-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <input
                  placeholder="Your name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name ? (
                  <p className="input-error">{errors.name?.message}</p>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12} md={6}>
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
                {errors.email ? (
                  <p className="input-error">{errors.email?.message}</p>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12}>
                <input
                  placeholder="Subject"
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                />
                {errors.subject ? (
                  <p className="input-error">{errors.subject?.message}</p>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12}>
                <div className={classes.areaWrapper}>
                  <textarea
                    rows={7}
                    placeholder="Message"
                    className={classes.textArea}
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message ? (
                    <p className="input-error">{errors.message?.message}</p>
                  ) : (
                    ""
                  )}
                </div>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.button}
                  type="submit"
                >
                  Send
                </Button>
              </Grid>
              <Grid item xs={12}>
                <ResponseMessage body={responseMessage} success={responseStatus} />
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item md />
      </Grid>
    </div>
  );
}
