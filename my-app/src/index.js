import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Grid } from 'semantic-ui-react';

class Minami extends React.Component {

  render() {
    return (
        <Grid centered container>
          <Grid.Row><LogoRow/></Grid.Row>
          <Grid.Row><MenuRow/></Grid.Row>
          <Grid.Row><BannerRow/></Grid.Row>
          <Grid.Row><Links/></Grid.Row>
          <Grid.Row><Tours/></Grid.Row>
          <Grid.Row><Videos/></Grid.Row>
          <Grid.Row><FooterRow/></Grid.Row>
        </Grid>
    );
  }
}

ReactDOM.render(<Minami/>, document.getElementById('root'));