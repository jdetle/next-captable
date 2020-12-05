import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

export default function Home() {
  return (
    <Grid container={true}>
      <Grid item={true}>
        <Card>
          <CardHeader>Create a New Cap Table</CardHeader>
          <CardContent></CardContent>
          <CardActionArea>
            <Button>Get Started</Button>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
