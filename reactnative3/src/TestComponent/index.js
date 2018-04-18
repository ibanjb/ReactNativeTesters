import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';
import GoogleMapView from '../GoogleMap';

export default class TestComponent extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
     <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.container}>  
          <GoogleMapView />
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
      width: '50%',
  },  
});