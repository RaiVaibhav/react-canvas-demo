import React, { Component } from "react";
import "./App.css";
import ButtonBase from "@material-ui/core/ButtonBase";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Mail from "@material-ui/icons/Mail";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';


import SvgIcon from '@material-ui/core/SvgIcon';

function GitHub(props) {
  return (
    <SvgIcon {...props} >
      <path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z" />
    </SvgIcon>
  );
}
function Linkdein(props) {
  return (
    <SvgIcon {...props} >
      <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
    </SvgIcon>
  );
}
function Twitter(props) {
  return (
    <SvgIcon {...props} >
      <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />    </SvgIcon>
  );
}

const styles = theme => ({
  card: {
    maxWidth: 400,
    display: "inline-block",
    position: "absolute",
    margin: "0 auto",
    top: "10%",
    left: "20%",
    right: "20%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex",
    "justify-content": "center"
  }
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title="Vaibhav Kumar Rai"
          subheader="Software Engineer"
        />
        <CardMedia
          className={classes.media}
          image="/images/vaibhav.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p">
          I am a final year student of Computer Science and Engineering. 
          A Python and Open Source enthusiast. A full stack developer who 
          also loves machine learning and Deep learning. Love to do a backend 
          development using Django-Python web framework.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          {/* <IconButton aria-label="Add to favorites">
            <Mail/>
          </IconButton> */}
        <FormControlLabel
            control={
                <a target="_top"
                    rel="noopener noreferrer"
                    href="mailto:raivaibhav08@gmail.com">
                    <IconButton color="primary">
                        <Mail /> {/* icon */}
                    </IconButton>
                </a>
            } 
        />
          <IconButton color="primary">
            <Link href={"https://github.com/RaiVaibhav"} target="_blank">
              <GitHub />
            </Link>
          </IconButton>
          <IconButton color="primary">
            <Link href={"https://www.linkedin.com/in/raivaibhav08/"} target="_blank">
              <Linkdein />
            </Link>
          </IconButton>
          <IconButton color="primary">
            <Link href={"https://twitter.com/raivaibhav08"} target="_blank">
              <Twitter />
            </Link>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};
var Demo = withStyles(styles)(RecipeReviewCard);

class Graphic extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      width:window.innerWidth,
      height:window.innerHeight
    }
    this.mousemove = this.mousemove.bind(this);
    this.updateDimensions=this.updateDimensions.bind(this);
  }
  updateDimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }
  mousemove(evt) {
    const g = this.refs.canvas.getContext("2d");
    g.clearRect(0, 0, window.innerWidth, window.innerHeight);
    var mouseX = evt.clientX;
    var mouseY = evt.clientY;
    if (evt.type === "touchmove") {
      mouseX = evt.touches[0].pageX;
      mouseY = evt.touches[0].pageY;
    }
    
    g.strokeStyle = "white";
    g.beginPath();
    g.arc(mouseX, mouseY, 40, 0, 2 * Math.PI);
    g.stroke();
  }
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    return (
      <div className="w3-container">
        <canvas
          // style={{ border: "1px solid grey" }}
          ref="canvas"
          width={this.state.width}
          height={this.state.height}
          onMouseMove={evt => {
            this.mousemove(evt);
          }}
          onTouchMove={evt => {
            this.mousemove(evt);
          }}
        />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Demo />

        <div className="background">
          <ButtonBase style={{ color: "#00ff00" }}>
            <Graphic />
          </ButtonBase>
        </div>
      </div>
    );
  }
}

export default App;
