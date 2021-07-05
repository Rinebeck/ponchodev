import React from "react"
import cx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand"
import TextInfoContent from "@mui-treasury/components/content/textInfo"
import { useN03TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n03"
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop"

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    borderRadius: 20,
    height: '100%',
    cursor: 'pointer',
  },
  content: {
    padding: 24,
  },
}));

export default function ProjectCard(props) {
  const { body, overline, heading, image, extra } = props;
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();

  const handleClick = () => {
    return props.link && window.open(props.link);
  }

  return (
    <Card
      className={cx(cardStyles.root, shadowStyles.root, "project-card")}
      onClick={handleClick}
    >
      <BrandCardHeader image={image} extra={extra} />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={styles}
          overline={overline}
          heading={heading}
          body={body}
        />
      </CardContent>
    </Card>
  );
}
