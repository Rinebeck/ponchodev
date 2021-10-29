import React from "react";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "components/ProjectCard";

export const phpWorks = {
  title: "PHP",
  icon: <FontAwesomeIcon icon={["fab", "php"]} color="secondary" size="2x" />,
  content: (
    <>
      <Grid container spacing={3}>
        <Grid item md>
          <ProjectCard
            body="Job offering site for the other big chicken selling company in Mexico. (You must sign up to check the entire site.)"
            overline="Sabropollo"
            heading="SabropolloBT"
            image="/img/assets/sabropollobt.png"
            extra="2016"
            link="http://bdet.sabro.com.mx:8091/bolsa_de_trabajo/web/index.php"
          />
        </Grid>
        <Grid item md>
          <ProjectCard
            body="Made major contributions to this E-commerce platform, as well as design and build around 80% of the 
                mobile-friendly version. One of the biggest Mexican tech-selling companies."
            overline="Zegucom Computo"
            heading="Zegucom"
            image="/img/assets/zg.png"
            extra="2017 - 2018"
            link="https://www.zegucom.com.mx/"
          />
        </Grid>
        <Grid item md>
          <ProjectCard
            body="API for securely access Zegucom stock and display it on your site, also support for making purchases and other cool features. Contributed around 60%."
            overline="Zegucom Computo"
            heading="Zegucom API"
            image="/img/assets/zg-api.png"
            extra="2018"
            link="https://api.zegucom.com.mx/"
          />
        </Grid>
      </Grid>
      <Grid container className="card-row" spacing={3}>
        <Grid item md>
          <ProjectCard
            body="I made this ERP as a freelance work but it got cancelled at the end, I kept the code ownership so I can customize it to anybody's needs."
            heading="Untitled ERP"
            overline="Freelancing"
            image="https://img.icons8.com/bubbles/50/000000/question-mark.png"
            extra="Nov, 2020 - June 2021"
          />
        </Grid>
      </Grid>
    </>
  ),
};
