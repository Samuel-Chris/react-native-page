import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import CheckIcon from "./components/CheckIcon";
import BulletPoint from "./components/BulletPoint";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
        <View style={[styles.innerContainer, styles.mb25]}>
          <Text style={[styles.header1, styles.bold]}>Go Premium Now</Text>
        </View>

        <View style={[styles.innerContainer, styles.mb25]}>
          <View style={{width: 220}}>
             <View style={[styles.flexRow, styles.alignCenter, styles.mb10]}> 
            <CheckIcon style={{marginRight: 10}}/>
            <Text style={[styles.bold, styles.font16]}>Instant access</Text>
          </View>

          <View style={[styles.flexRow, styles.alignCenter, styles.mb10]}>
            <CheckIcon style={{marginRight: 10}}/>
            <Text style={[styles.bold, styles.font16]}>Unlimited programs.</Text>
          </View>

          <View style={[styles.flexRow, styles.alignCenter, styles.mb10]}>
            <CheckIcon style={{marginRight: 10}}/>
            <Text style={[styles.bold, styles.font16]}>Personalised training.</Text>
          </View>

          <View style={[styles.flexRow, styles.alignCenter, styles.mb10]}>
            <CheckIcon style={{marginRight: 10}}/>
            <Text style={[styles.bold, styles.font16]}>Progress tracking.</Text>
          </View>
          </View>
        </View>

        <View style={[styles.innerContainer, styles.flexRow, styles.mb25, styles.justifyBetween, styles.px25]}>

          <View style={{marginRight: 30}}>
            <View style={[styles.flexColumn, styles.card, styles.mb10, styles.p20]}>
             <View style={[styles.flexRow, styles.mb25, styles.alignCenter]}>
              <Text style={[styles.bold, styles.font20]}>£59.99 </Text>             
              <Text style={styles.bold}>/ year</Text>
             </View>
             <FlatList
                data={[
                  {key: '£1.61/week'},
                  {key: 'Start immediately'},
                  {key: 'Cancel anytime'},
                ]}
                style={styles.mb25}
                renderItem={({item}) => 
                <View style={[styles.flexRow, styles.alignCenter, styles.mb5]}>
                  <BulletPoint  style={{marginRight: 10}}/>
                  <Text style={styles.bold2}>{item.key}</Text>
                </View>
                }
              />
            </View>
             <TouchableOpacity
               style={[styles.btn, styles.btnMuted]}
               >
               <Text style={[styles.textWhite, styles.bold]}>Suscribe</Text>
             </TouchableOpacity>
          </View>

          <View>
            <View style={[styles.flexColumn, styles.card, styles.mb10, styles.p20]}>
             <View style={[styles.cardHighlight2, {position: 'absolute', top: -25, right: -25}]}>
             <Text style={[styles.bold, {color: '#FFFFFF', fontSize: 16, lineHeight: 16}]}>
              40%
             </Text>
             <Text style={[styles.bold, {color: '#FFFFFF', fontSize: 16, lineHeight: 16}]}>
              Off
             </Text>
             </View>
             <View style={[styles.flexRow, styles.mb25, styles.alignCenter]}>
              <Text style={[styles.bold, styles.font20]}>£59.99 </Text>             
              <Text style={styles.bold}>/ year</Text>
             </View>
             <FlatList
                data={[
                  {key: '£1.61/week'},
                  {key: 'Start immediately'},
                  {key: 'Cancel anytime'},
                ]}
                style={styles.mb25}
                renderItem={({item}) => 
                <View style={[styles.flexRow, styles.alignCenter, styles.mb5]}>
                  <BulletPoint  style={{marginRight: 10}}/>
                  <Text style={styles.bold2}>{item.key}</Text>
                </View>
                }
              />
            </View>
            <TouchableOpacity
              style={styles.btn}
              >
              <Text style={[styles.textWhite, styles.bold]}> Start free trial</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.mb30}>
          <Text style={[styles.paragraphMuted, styles.px25, styles.bold]}>Select a plan. You can change or cancel at any time. </Text>
        </View>

        <View style={[styles.flexColumn, styles.card, styles.mb25, styles.px30, styles.py20]}>
          <View style={[styles.cardHighlight, {position: 'absolute', top: -15}]}><Text style={[styles.bold, {color: '#FFFFFF', fontSize: 16, lineHeight: 12}]}>Most Popular</Text></View>
          <View style={[styles.flexRow, styles.mb20, styles.justifyBetween]}>
            <Text style={[styles.bold, styles.font16]}>Start 2-week free now</Text>
            <View style={[styles.flexRow, styles.alignCenter]}>
              <Text style={[styles.bold, styles.font16]}>£59.99 </Text>
              <Text style={[styles.bold, styles.font12]}>/ year</Text>
            </View>
          </View>
          <TouchableOpacity
           style={styles.btn}
           >
           <Text style={[styles.textWhite, styles.bold]}> Start free trial</Text>
         </TouchableOpacity>
        </View>
      
        <View>
          <Text style={[styles.paragraphMuted, styles.px25, styles.bold2]}>In app purchases and auto renewal will be handled, managed, maintained and governed by the Apple Media Services Terms and Conditions which can be accessed here. In line with these terms, the subscription will automatically renew unless turned off in your iTunes Account Settings at least 24 hours before the current period ends. You can go to your iTunes Account settings manage your subscription and turn off auto-renew. Your iTunes Account will be charged when the purchase in confirmed. By continuing you accept Apple’s Billing Terms, our Privacy Policy , and The App User Agreement. 
          </Text>
        </View>
        </ScrollView>
      </SafeAreaView>
      </>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      paddingTop: 500,
      paddingBottom: 200,
    },
    px25: {
      paddingLeft: 25,
      paddingRight: 25
    },
    px35: {
      paddingLeft: 35,
      paddingRight: 35
    },
    py20: {
      paddingHorizontal: 20
    },
    justifyCenter: {
      justifyContent: 'center'
    },
    alignCenter: {
      alignItems: 'center'
    },
    innerContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    flexRow: {
      flexDirection: 'row',
    },
    flexColumn: {
      flexDirection: 'column',
    },
    header1: {
      fontSize: 30,
      textAlign: 'center'
    },
    textWhite: {
      color: '#FFFFFF',
      fontSize: 14
    },
    bold: {
      fontWeight: 800,
    },
    bold2: {
      fontWeight: 700,
    },
    font20: {
      fontSize: 20,
    },
    font12: {
      fontSize: 12,
    },
    card: {
      padding: 10,
      borderRadius: 5,
      shadowOffset:{  width: 0,  height: 0,},
      shadowColor: 'black',
      shadowOpacity: 0.16,
      shadowRadius: 10
    },
    cardHighlight: {
      borderRadius: 5,
      height: 30,
      width: 150,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#F5B761'
    },
    justifyBetween: {
      justifyContent: 'space-between'
    },
    cardHighlight2: {
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      backgroundColor: '#00E6C2'
    },
    paragraphMuted: {
      textAlign: 'center',
      fontSize: 12,
      color: '#7C7B80',
      fontWeight: 600
    },
    mb25: {
      marginBottom: 25
    },
    mb10: {
      marginBottom: 10
    },
    mb5: {
      marginBottom: 5
    },
    mr7: {
      marginRight: 7
    },
    mb20: {
      marginBottom: 20
    },
    mb30: {
      marginBottom: 30
    },
    px30: {
      paddingVertical: 30
    },
    p30: {
      paddingVertical: 30,
      paddingHorizontal: 30
    },
    p20: {
      padding: 20
    },
    btn: {
      alignItems: "center",
      justifyContent: "center",
      padding: 8,
      borderRadius: 5,
      backgroundColor: '#000000',
      color: "#FFFFFF"
    },
    btnMuted: {
      backgroundColor: '#C7C7C7'
    },
    font16: {
      fontSize: 16
    },
    absolute: {
      position: 'absolute',
    }
  });
  