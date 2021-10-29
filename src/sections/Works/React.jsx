import React from "react";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "components/ProjectCard";

export const reactWorks = {
  title: "React",
  icon: <FontAwesomeIcon icon={["fab", "react"]} color="secondary" size="2x" />,
  content: (
    <>
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
            body="IP Infrignments reporting portal made with React, Redux Toolkit and a PHP API, don't worry if you can't access, it's still on closed beta."
            heading="Reporting Portal"
            overline="Etsy"
            image="https://icon-library.com/images/2018/3892730_etsy-logo-transparent-etsy-circle-logo-png-png.png"
            extra="May, 2021 - Oct 2021"
            link="https://www.etsy.com/ipmanager/"
          />
        </Grid>
      </Grid>
      <Grid container className="card-row" spacing={3}>
        <Grid item md>
          <ProjectCard
            body="Small personal project I did on a boring afternoon (like 15 minutes actually, is really not that complex). WARNING: I do NOT own or regulate the contents of the screenshots."
            heading="Random Screenshot"
            overline="Myself"
            image="http://random-screenshot.herokuapp.com/apple-touch-icon.png"
            extra="May, 2021 - Oct 2021"
            link="https://random-screenshot.herokuapp.com/"
          />
        </Grid>
      </Grid>
    </>
  ),
};
