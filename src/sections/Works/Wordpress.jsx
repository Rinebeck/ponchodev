import React from "react";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "components/ProjectCard";

export const wordpressWorks = {
  title: "WordPress",
  icon: (
    <FontAwesomeIcon icon={["fab", "wordpress"]} color="secondary" size="2x" />
  ),
  content: (
    <>
      <Grid container spacing={3}>
        <Grid item md>
          <ProjectCard
            body="Woocommerce site, made major modifications to the templates and multiple scripts to customize UI behaviour."
            overline="NexDeal"
            heading="nexdeal.com"
            image="/img/assets/cropped-nexdeal-logo4.png"
            extra="Jun - Oct, 2021"
            link="https://nexdeal.com/"
          />
        </Grid>
        <Grid item md>
          <ProjectCard
            body="Woocommerce site, created a plugin that helps handle with purchase minimum amounts."
            overline="Sir Speedy"
            heading="sirspeedyprintonline.com"
            image="https://sirspeedyprintonline.com/wp-content/uploads/2020/10/logo.png"
            extra="Feb - Sep, 2021"
            link="https://sirspeedyprintonline.com/"
          />
        </Grid>
        <Grid item md>
          <ProjectCard
            body="Financial education site, made an integration with an external platform to link the accounts and give access to those users to full articles."
            overline="Succession Advisors"
            heading="successionadvisors.com"
            image="https://successionadvisors.com/wp-content/uploads/2019/07/gold-logo-gradient.png"
            extra="Jul - Oct, 2021"
            link="https://r360.successionadvisors.com/"
          />
        </Grid>
      </Grid>
      <Grid container className="card-row" spacing={3}>
        <Grid item md>
          <ProjectCard
            body="Main site for one of the bigest checken selling companys in Mexico."
            overline="Nutrypollo"
            heading="nutrypollo.com"
            image="/img/assets/nutrypollo.png"
            extra="2019"
            link="https://nutrypollo.com/"
          />
        </Grid>
        <Grid item md>
          <ProjectCard
            body="Main site for a growing Marketing Agency"
            overline="Click Clack"
            heading="clickclack.mx"
            image="/img/assets/clickclack.png"
            extra="2020"
            link="https://clickclack.mx/"
          />
        </Grid>
        <Grid item md>
          <ProjectCard
            body="Marketing site for a big Mexican industrial transportation company."
            overline="Mexpur"
            heading="mexpur.pw"
            image="/img/assets/mexpur.png"
            extra="2020"
            link="https://mexpur.pw/"
          />
        </Grid>
      </Grid>
      <Grid container className="card-row" spacing={3}>
        <Grid item md>
          <ProjectCard
            body="Information site for a construction company's new urban project."
            overline="Cadaqués Residencial"
            heading="Cadaqués"
            image="/img/assets/cadaques.png"
            extra="2019"
            link="https://cadaquesresidencial.com/"
          />
        </Grid>
        <Grid item md>
          <ProjectCard
            body="E-commerce platform for pedagogical materials and other products to help kids to learn various topics."
            overline="Mundidactico"
            heading="mundidactico.com"
            image="/img/assets/mundidactico.png"
            extra="2020"
            link="https://mundidactico.com.mx/"
          />
        </Grid>
        <Grid item md>
          <ProjectCard
            body="Completely customized web blog full of usefull health tips and other nutrition related topics."
            overline="Lebasi"
            heading="Bienestar y Salud"
            image="/img/assets/bysu.png"
            extra="2020"
            link="https://bienestarysaluduniversal.com/"
          />
        </Grid>
      </Grid>
      <Grid container className="card-row" spacing={3}>
        <Grid item md>
          <ProjectCard
            body="Another completely customized web blog, this time with finantial articles for both companies and employees."
            overline="Lebasi"
            heading="Evolución en los Negocios"
            image="/img/assets/eeln.png"
            extra="2020"
            link="https://evolucionenlosnegocios.com/"
          />
        </Grid>
        <Grid item md>
          <ProjectCard
            body="E-learning platform with tons of paid courses of finance, focused on companies and entrepreneurs."
            overline="Morgan Consultores"
            heading="morganonline.com"
            image="/img/assets/morganonline.png"
            extra="2019"
            link="https://morganonline.com.mx/"
          />
        </Grid>
        <Grid item md>
          <ProjectCard
            body="Fancy dresses booking site, not in production yet due pandemic related issues, will soon become available! (you can try the demos site)"
            overline="Olivia Vestidos"
            heading="olivia.com (demo site)"
            image="/img/assets/olivia.png"
            extra="2019"
            link="https://digitaleriamx.com/olivia/"
          />
        </Grid>
      </Grid>
      <Grid container className="card-row" spacing={3}>
        <Grid item md>
          <ProjectCard
            body="E-learning platform for one of the most popular Mexican high schools in the country."
            overline="Conalep"
            heading="cursosconalep.com"
            image="/img/assets/conalep.png"
            extra="2019"
            link="https://cursosconalep.com/"
          />
        </Grid>
      </Grid>
    </>
  ),
};
