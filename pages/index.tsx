import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Link from "next/link";

import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Image from "next/image";
import {
  createStyles,
  darken,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: 400,
      width: 400,
      minHeight: 400,
      minWidth: 300,
      display: "flex",
      justifyContent: "flex-start",
      alignContent: "flex-start",
      flexDirection: "column",
      backgroundColor: darken(theme.palette.background.paper, 0.1),
    },
    title: {
      fontSize: 16,
    },
    actions: {
      display: "flex",
      justifyContent: "flex-start",
      alignContent: "flex-start",
      flexDirection: "column",
      padding: theme.spacing(1),
    },
  });

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container={true}>
      <Grid item={true}>
        <Card raised={true} className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Make a New Cap Table
            </Typography>
            <Image height={250} width={200} src="/vercel.svg"></Image>
          </CardContent>
          <CardActionArea className={classes.actions}>
            <Link href="/new-captable" passHref={true}>
              <Button>Get Started</Button>
            </Link>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
