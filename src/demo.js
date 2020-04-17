import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { deepOrange, deepPurple, blue } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import { IconButton, Divider } from "@material-ui/core";
import OtherSites from "./othersites";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AdjustIcon from "@material-ui/icons/Adjust";
import { green } from "@material-ui/core/colors";

const otherSiteDetails = [
  {
    siteName: "Stein, Switzerland",
    siteHead: "XXXXXXX XXXXX",
    currentBatches: "Y"
  },
  {
    siteName: "Fraunhofer, Germany",
    siteHead: "XXXXXX XXXXX",
    currentBatches: "Y"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: "1",
    margin: theme.spacing(2),
    maxWidth: 290,
    marginBottom: 15,
    width: "42ch",
    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
    "&:hover": {
      boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
      transform: "scale(1.04)",
      margin: theme.spacing(2),
      width: "45ch"
    }
  },
  grid: {
    direction: "reverse",
    justify: "space-between",
    alignItems: "flex-start",
    color: theme.palette.text.primary
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: "#d38b1f"
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500]
  },
  blue: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: blue[600]
  },
  avatar: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <Container>
      <div>
        <Typography> Live </Typography>
        <Divider />
        <br />
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  variant="caption"
                  display="inline"
                  gutterBottom="false"
                >
                  Site Name:
                </Typography>
                <Typography variant="h5" gutterBottom="true">
                  <b> Morris Plains NJ</b>
                </Typography>
                <Typography
                  variant="caption"
                  display="inline"
                  gutterBottom="true"
                >
                  Head:
                </Typography>
                <Typography variant="subtitle1" gutterBottom="true">
                  <b> Stanley Howell</b>
                </Typography>

                <br />
                <Divider />
                <Typography variant="caption" gutterBottom="true">
                  Site health:{" "}
                  <AdjustIcon fontSize="small" style={{ color: green[800] }} />
                </Typography>
                <Typography variant="subtitle2" gutterBottom="true">
                  Currently processing X batches
                </Typography>
                <br />
                <br />
                <Divider />
                <Typography variant="caption">Dashboard:</Typography>

                <div className={classes.avatar}>
                  <IconButton>
                    <Avatar className={classes.orange}>T4</Avatar>
                  </IconButton>

                  <IconButton>
                    <Avatar className={classes.blue}>T3</Avatar>
                  </IconButton>

                  <IconButton>
                    <Avatar className={classes.purple}>T2</Avatar>
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>

          {otherSiteDetails.map((order, i) => (
            <Grid item>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    variant="caption"
                    display="inline"
                    gutterBottom="false"
                  >
                    Site Name:
                  </Typography>
                  <Typography variant="h5" gutterBottom="true">
                    <b> {order.siteName}</b>
                  </Typography>
                  <Typography
                    variant="caption"
                    display="inline"
                    gutterBottom="true"
                  >
                    Head:
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom="true">
                    <b> {order.siteHead}</b>
                  </Typography>

                  <br />
                  <Divider />
                  <Typography variant="caption" gutterBottom="true">
                    Site health:
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom="true">
                    Currently processing {order.currentBatches} batches
                  </Typography>
                  <br />
                  <br />
                  <Divider />
                  <Typography variant="caption">Dashboard:</Typography>
                  <div className={classes.avatar}>
                    <IconButton disabled={"true"}>
                      <Avatar className={classes.orange}>T4</Avatar>
                    </IconButton>

                    <IconButton disabled={"true"}>
                      <Avatar className={classes.blue}>T3</Avatar>
                    </IconButton>

                    <IconButton disabled={"true"}>
                      <Avatar className={classes.purple}>T2</Avatar>
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <br />
          <br />
          <br />
          <br />
          <br />
        </Grid>
        <Typography> Upcoming </Typography>
        <Divider />
        <br />
        <br />

        <OtherSites />
      </div>
    </Container>
  );
}
