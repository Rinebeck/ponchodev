import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import TabsComponent from "../components/Tabs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProjectCard from "../components/ProjectCard"
import SectionTitle from "../components/SectionTitle"

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "400px",
  },
  cardRow: {
    marginTop: "5em",
  },
}));

export default function Works() {
  const classes = useStyles();

  const sections = [
    {
      title: "React",
      icon: (
        <FontAwesomeIcon icon={["fab", "react"]} color="secondary" size="2x" />
      ),
      content: (
        <Grid container spacing={3}>
          <Grid item md>
            <ProjectCard
              body="Interior design preview tool, with lots of variants and cool stuff! Has it's own app (unplublished per client request)"
              heading="QuarellaDesign"
              overline="Quarella & Decor"
              image="https://yt3.ggpht.com/ytc/AAUvwngkCAxYei50qACVdXnEFzcUKfzjxHDq5sBdAoUH=s900-c-k-c0x00ffffff-no-rj"
              extra="May, 2021"
              link="https://quarelladesign.com/"
            />
          </Grid>
          <Grid item md>
            <ProjectCard
              body="Yes! this very site! You can find info about me, I try to update the site regularly."
              heading="poncho.dev"
              overline="Myself"
              image="img/assets/ponchodev.jpg"
              extra="June, 2021 - Ongoing"
            />
          </Grid>
          <Grid item md>
            <ProjectCard
              body="It's a secret to everybody... Can't tell yet!"
              heading="Secret project!"
              overline="Etsy"
              image="https://icon-library.com/images/2018/3892730_etsy-logo-transparent-etsy-circle-logo-png-png.png"
              extra="May, 2021 - Ongoing"
            />
          </Grid>
        </Grid>
      ),
    },
    {
      title: "WordPress",
      icon: (
        <FontAwesomeIcon
          icon={["fab", "wordpress"]}
          color="secondary"
          size="2x"
        />
      ),
      content: (
        <>
          <Grid container spacing={3}>
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
          <Grid container className={classes.cardRow}>
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
          <Grid container className={classes.cardRow}>
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
          <Grid container className={classes.cardRow}>
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
    },
    {
      title: "PHP",
      icon: (
        <FontAwesomeIcon icon={["fab", "php"]} color="secondary" size="2x" />
      ),
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
        </>
      ),
    },
  ];

  return (
    <div id="works" className={classes.root}>
      <SectionTitle title="Some of my Works" />
      <Grid container spacing={3}>
        <Grid item md />
        <Grid item xs={12} md={11}>
          <TabsComponent
            sections={sections}
            centered
            variant="standard"
            indicatorColor="secondary"
            textColor="secondary"
          />
        </Grid>
      </Grid>
    </div>
  );
}
