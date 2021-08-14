import React, {Component} from 'react';
import { StyleSheet, Text, ScrollView, } from 'react-native';

export default class PostLoader extends Component {

    constructor() {
        super();
        this.state = {
            
        };
      }

    render() {

        if (this.props.selectedItem !== '' && this.props.postError === false) { //only run below code if selectedItem is not blank and postcode is correct

            return(

                <ScrollView contentContainerStyle={styles.contentContainer}>

                    <Text style={styles.titleText}>
                        {this.props.selectedCity}
                    </Text>
                    <Text style={styles.baseText}>
                        this week*, had a total of
                        <Text style={styles.resultText}> {this.props.totalDeaths} deaths</Text>
                    </Text>
                    <Text style={styles.baseText}>
                        giving it a mortality rate (per 10,000 people) of 
                        <Text style={styles.resultText}> {this.props.deathRate} </Text>
                    </Text>
                    <Text style={styles.baseText}>
                        making it 
                        <Text style={styles.resultText}> {this.props.stringlihood} deadly </Text>
                        <Text style={styles.baseText}>than England and Wales </Text>
                    </Text>
                    <Text style={styles.baseText}> 
                        which had a total of 
                        <Text style={styles.resultText}> {this.props.totalDeathsEW} deaths</Text>
                    </Text>
                    <Text style={styles.baseText}>
                        and a mortality rate (per 10,000 people) of 
                        <Text style={styles.resultText}> {this.props.deathRateEW}</Text>
                    </Text>
                    <Text style={styles.footerText}>
                        *{this.props.week} of 52.
                        <Text style={styles.quoteText}>"To allow time for registration and processing, these figures are published 11 days after the week ends." - ONS.GOV.UK</Text>
                    </Text>
                    
                </ScrollView>
        
            );
        
        }
        else {
            return null
        }

    }

}

const styles = StyleSheet.create({
    contentContainer: {
        borderWidth: 3,
        borderColor: '#10c62d',
        borderRadius: 10,
        maxWidth: '100%',
        backgroundColor: '#a446de',
        marginTop: 5,
        marginHorizontal: 25,
    },
    baseText: {
        padding: 5,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#10c62d',
        marginHorizontal: 7,
      },
    resultText: {
        padding: 5,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
    },
    titleText: {
        padding: 5,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
    },
    footerText: {
        padding: 10,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#10c62d',
        marginBottom: 30,
    },
    quoteText: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'normal',
        color: '#10c62d',
        fontStyle: 'italic',
    },
});