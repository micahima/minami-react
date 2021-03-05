import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Grid, Image, Menu, Button, Embed, Divider } from 'semantic-ui-react';

class LogoRow extends React.Component {
  render() {
    return (
        <Image
            src="https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/278619/44ad8d7ef62ca48108a22d9506324160_e5154ca6ec7fcdb959b7953cc35225f9.png?height=192"
            alt="美波" className={"logo"}/>
    );
  }
}

class MenuRow extends React.Component {
  render() {
    return (
        <Menu borderless className={"menuRow"}>
          <Menu.Item active link>HOME</Menu.Item>
          <Menu.Item link>LIVE SCHEDULE</Menu.Item>
          <Menu.Item link>BIOGRAPHY</Menu.Item>
          <Menu.Item link>DISCOGRAPHY</Menu.Item>
          <Menu.Item link>GOODS STORE</Menu.Item>
          <Menu.Item link>CONTACT</Menu.Item>
        </Menu>
    );
  }
}

class BannerRow extends React.Component {
  render() {
    return (
        <Image
            src="https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/278619/a5e5924b5a32c50ae50a861f2b847c35_df02426fc145c195684989859a82a971.png"
            fluid
            className={"banner"}/>
    );
  }
}

class Links extends React.Component {
  render() {
    const formatPadding = { marginTop: "40px", marginBottom: "40px" };
    return (
        <div className={"links"}>
          <Grid.Row>
            <Header as={"h3"} style={formatPadding}>美波 Official Web Site</Header>
          </Grid.Row>
          <Grid.Row>
            <Button basic color={"grey"} style={formatPadding} fluid>youtube</Button>
          </Grid.Row>
          <Grid.Row>
            <Button basic color={"grey"} style={formatPadding} fluid>Instagram</Button>
          </Grid.Row>
          <Grid.Row>
            <Button basic color={"grey"} style={formatPadding} fluid>Twitter</Button>
          </Grid.Row>
          <Grid.Row>
            <Button basic color={"grey"} style={formatPadding} fluid>TwitCasting</Button>
          </Grid.Row>
        </div>
    );
  }
}

class Tours extends React.Component {
  render() {
    const formatPadding = { marginTop: "20px", marginBottom: "10px" };
    return (
        <Grid centered container columns={3} className={"tourRow"}>
          <Grid.Row><Header as={"h3"} style={formatPadding}>HOME</Header></Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>2020.12.22 17:00</Grid.Column>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column>美波「DROP TOUR 2020」及び「Freiheit ONEMAN LIVE」全公演払い戻しのお知らせ</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>2020.08.03 17:00</Grid.Column>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column>美波「DROP TOUR 2020」及び「Freiheit ONEMAN LIVE」全公演払い戻しのお知らせ</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>2020.06.30 05:00</Grid.Column>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column>美波「アメヲマツ、」の配信を開始しました</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>2020.06.30 00:00</Grid.Column>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column>美波「アメヲマツ、」MVを公開しました</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>2020.06.13 17:00</Grid.Column>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column>美波「DROP TOUR 2020」及び「Freiheit ONEMAN LIVE」及び「伊江島ライブ」全公演延期のお知らせ</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>2020.03.31 00:00</Grid.Column>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column>美波 2020年7月 東京「NHKホール」、9月大阪「大阪城野外音楽堂」詳細決定</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>2020.03.24 00:30</Grid.Column>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column>美波「DROP TOUR 2020」オリジナルグッズのデザインを公開致しました。</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>2020.01.18 02:00</Grid.Column>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column>美波 2020年8月22日 沖縄 伊江島ライブ決定</Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

class Videos extends React.Component {
  render() {
    const formatPadding = { marginTop: "20px", marginBottom: "10px" };
    return (
        <Grid centered container className={"movieRow"}>
          <Grid.Row><Header as={"h3"} style={formatPadding}>MOVIE</Header></Grid.Row>
          <Grid.Row>
            <Grid.Column><Embed url="https://www.youtube.com/embed/766qmHTc2ro"/></Grid.Column>
          </Grid.Row>
          <Grid.Row>美波「アメヲマツ、」 Music Video</Grid.Row>
          <Grid.Row>
            <Grid.Column><Embed url="https://www.youtube.com/embed/0YF8vecQWYs"/></Grid.Column>
          </Grid.Row>
          <Grid.Row>美波「カワキヲアメク」 Music Video</Grid.Row>
          <Grid.Row>
            <Grid.Column><Embed url="https://www.youtube.com/embed/HIRiduzNLzQ"/></Grid.Column>
          </Grid.Row>
          <Grid.Row>美波「ホロネス」 Music Video</Grid.Row>
          <Grid.Row>
            <Grid.Column><Embed url="https://www.youtube.com/embed/GQ3V50XoLOM"/></Grid.Column>
          </Grid.Row>
          <Grid.Row>美波「ライラック」 Music Video</Grid.Row>
          <Grid.Row>
            <Grid.Column><Embed url="https://www.youtube.com/embed/jb4ybTQwcdw"/></Grid.Column>
          </Grid.Row>
          <Grid.Row>美波「main actor」 Music Video</Grid.Row>
        </Grid>
    );
  }
}

class FooterRow extends React.Component {
  render() {
    const formatPadding = { marginBottom: "10px", fontSize: "14px" };
    return (
        <Grid.Row><Header as={"h3"} style={formatPadding} color={"grey"}>© Water Reflection</Header></Grid.Row>
    );
  }
}

class Minami extends React.Component {

  render() {
    return (
        <div>
          <Grid centered container>
            <Grid.Row><LogoRow/></Grid.Row>
            <Grid.Row><MenuRow/></Grid.Row>
          </Grid>
          <BannerRow/>
          <Container className={"divider"}></Container>
          <Grid centered container>
            <Links/>
          </Grid>
          <Container className={"divider"}></Container>
          <Tours/>
          <Container className={"divider"}></Container>
          <Videos/>
          <Divider></Divider>
          <Grid centered container>
            <Grid.Row><FooterRow/></Grid.Row>
          </Grid>
        </div>
    )
        ;
  }
}

ReactDOM.render(
    <Minami/>
    , document.getElementById('root'));