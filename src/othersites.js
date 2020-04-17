import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { deepOrange, deepPurple, blue } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import { IconButton, Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: "1",
    margin: theme.spacing(2),
    maxWidth: 290,
    marginBottom: 15,
    width: "45ch",
    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)"
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
  },
  blur: {
    opacity: "0.4"
  }
}));

const otherSiteDetails = [
  {
    siteName: "Cellular Bio M, China",
    siteHead: "XXXXXXX XXXXX",
    currentBatches: "X"
  },
  {
    siteName: "Oxford BioM, Japan",
    siteHead: "XXXXXXXX XXXXX",
    currentBatches: "X"
  },
  {
    siteName: "Cell for Cure, France",
    siteHead: "XXXXXXXX XXXXX",
    currentBatches: "X"
  }
];

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.blur}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={3}
      >
        {otherSiteDetails.map((order, i) => (
          <Grid item xs={3}>
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
                  <IconButton>
                    <Avatar>T4</Avatar>
                  </IconButton>
                  <IconButton>
                    <Avatar>T3</Avatar>
                  </IconButton>
                  <IconButton>
                    <Avatar>T2</Avatar>
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
