import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,Dimensions, ImageBackground } from 'react-native';
import { Left, Right, Icon, Body, Header, Content, Container, Card,CardItem, Thumbnail } from 'native-base';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
//image

//Budget
const background = require('../../icon/drawable-mdpi/Budget/Rectangle43.png');
const budget =  require('../../icon/drawable-mdpi/Budget/budget.png');
const intersection  =  require('../../icon/drawable-mdpi/Budget/Intersection12.png');
const exculison = require('../../icon/drawable-mdpi/Budget/Exclusion3.png');
//Education
const maskgroup6 = require('../../icon/drawable-mdpi/Education/MaskGroup6.png');
const Path1757 = require('../../icon/drawable-mdpi/Education/Path1757.png');
const Ellipse99 = require('../../icon/drawable-mdpi/Education/Ellipse99.png');

//Car
const exculison3 = require('../../icon/drawable-mdpi/car/Exclusion3.png')
const Intersection13 = require('../../icon/drawable-mdpi/car/Intersection13.png')
const Intersection17 = require('../../icon/drawable-mdpi/car/Intersection17.png')
const MaskGroup4 = require('../../icon/drawable-mdpi/car/MaskGroup4.png')
const Rectangle45 = require('../../icon/drawable-mdpi/car/Rectangle45.png')


//Moving

const Rectangle46 = require('../../icon/drawable-mdpi/Moving/Rectangle46.png')
const Exclusion4 = require('../../icon/drawable-mdpi/Moving/Exclusion3.png')
const Group1493 = require('../../icon/drawable-mdpi/Moving/Group1493.png')

//Empoyment

const Rectangle48 = require('../../icon/drawable-mdpi/Employment/Rectangle48.png')
const MaskGroup5 = require('../../icon/drawable-mdpi/Employment/MaskGroup5.png')



export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <Header transparent>
                    <Left>
                        <Icon name="cog" />
                    </Left>
                    <Body />
                    <Right>
                        <Icon name="ios-notifications" />
                    </Right>
                </Header>
                <Content>
                    <Text style={styles.text}>
                        Hello. What do you want to learn today?
                    </Text>
            {/* BUDGET */}
                    <Card style ={{ justifyContent:'center',marginTop : 40}} >
                        <CardItem style={styles.card} button onPress = {()=> this.props.navigation.navigate('Quiz')}>
                            <ImageBackground source = {background}
                                style= {styles.background}
                            >
                                <Left style={styles.left}>
                                    <Image source = {exculison} style={{height: 70,width: 70}}/> 
                                </Left>
                                <Body style={{flex: 0.79}}>
                                    <Text style={styles.title}>Budgeting</Text>
                                    <Text
                                        style={styles.textDescription}
                                    >A plan that outlines an organization's financial and operational goals</Text>
                                    <Text style={styles.result}> 3/6 lessons completed</Text>
                                </Body>
                                <Right style={styles.right}>
                                    <Image source = {budget} style={{height:150,width:150}}/>
                                    </Right>
                            </ImageBackground>
                        </CardItem>
                    </Card>
        {/* EDUCATION */}
                    <Card>
                        <CardItem style={styles.card} >
                            <ImageBackground source = {Path1757}
                                style= {styles.background}
                            >
                                <Left style={styles.left}>
                                    <Image source = {Ellipse99} style = {{height: 70,width: 70}}/> 
                                </Left>
                                <Body style={{flex: 0.79}}>
                                    <Text style={styles.title}>Budgeting</Text>
                                    <Text
                                        style={styles.textDescription}
                                    >A plan that outlines an organization's financial and operational goals</Text>
                                    <Text style={styles.result}> 3/6 lessons completed</Text>
                                </Body>
                                <Right style={styles.right}>
                                    <Image source = {maskgroup6} style={{height:150,width:150}}/>
                                    </Right>
                            </ImageBackground>
                        </CardItem>
                    </Card>
        {/* CAR */}
                    <Card>
                        <CardItem style={styles.card} >
                            <ImageBackground source = {Rectangle45}
                                style= {styles.background}
                            >
                                <Left style={styles.left}>
                                    <Image source = {exculison3} style = {{height: 70,width: 70}}/> 
                                </Left>
                                <Body style={{flex: 0.79}}>
                                    <Text style={styles.title}>Budgeting</Text>
                                    <Text
                                        style={styles.textDescription}
                                    >A plan that outlines an organization's financial and operational goals</Text>
                                    <Text style={styles.result}> 3/6 lessons completed</Text>
                                </Body>
                                <Right style={styles.right}>
                                    <Image source = {MaskGroup4} style={{height:150,width:150}}/>
                                    </Right>
                            </ImageBackground>
                        </CardItem>
                    </Card>
{/* MOVING */}
                    <Card>
                        <CardItem style={styles.card} >
                            <ImageBackground source = {Rectangle46}
                                style= {styles.background}
                            >
                                <Left style={styles.left}>
                                    <Image source = {Exclusion4} style = {{height: 70,width: 70}}/> 
                                </Left>
                                <Body style={{flex: 0.79}}>
                                    <Text style={styles.title}>Budgeting</Text>
                                    <Text
                                        style={styles.textDescription}
                                    >A plan that outlines an organization's financial and operational goals</Text>
                                    <Text style={styles.result}> 3/6 lessons completed</Text>
                                </Body>
                                <Right style={styles.right}>
                                    <Image source = {Group1493} style={{}}/>
                                    </Right>
                            </ImageBackground>
                        </CardItem>
                    </Card>
    {/* EMPLOYMENT */}
                    <Card>
                        <CardItem style={styles.card} >
                            <ImageBackground source = {Rectangle48}
                                style= {styles.background}
                            >
                                <Left style={styles.left}>
                                    <Image source = {Exclusion4} style = {{height: 70,width: 70}}/> 
                                </Left>
                                <Body style={{flex: 0.79}}>
                                    <Text style={styles.title}>Budgeting</Text>
                                    <Text
                                        style={styles.textDescription}
                                    >A plan that outlines an organization's financial and operational goals</Text>
                                    <Text style={styles.result}> 3/6 lessons completed</Text>
                                </Body>
                                <Right style={styles.right}>
                                    <Image source = {MaskGroup5} style={{}}/>
                                    </Right>
                            </ImageBackground>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins',
        fontSize: 26,
        fontWeight: 'bold',
        marginHorizontal: 30
    },
    background: {
        height: screenHeight / 4, width: screenWidth - 40,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    title:{
        color: '#fff', 
        fontFamily: "Poppins", 
        fontSize: 26, 
        marginTop: 30,
        fontWeight: 'bold'
    },
    textDescription: {
        color: '#fff', 
        fontFamily: "Poppins", 
        fontSize: 18, 
    },
    result: {
        color: '#fff', 
        fontFamily: "Poppins", 
        fontSize: 18, 
        marginTop: 10,
    },
    left: {
        flex: 0.2, 
        marginHorizontal: 10, 
        marginBottom: 40
    },
    right: {
        marginRight: 10,
        marginBottom: -30, 
        flex: 0.01
    },
    card: {
        height: screenHeight /4, 
        width: screenWidth - 40,
        
    }
})