import React, { Component } from 'react';
import './App.css';
import FeatureList from './FeatureList';
import farm from './farm.png';
import bot from './bot.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          
          <div className="Row">
            <div className="Col-6">
              <div>
                <FeatureList title="PRECISION AGRICULTURE WITH AI" details="Traditionally agriculture is practiced by performing a particular task, such as planting or harvesting, against a predetermined schedule. But by collecting real-time data on weather, soil and air quality, crop maturity and even equipment and labor costs and availability, ShareQube uses predictive analytics to make smarter decisions for farmers .Control centers collect and process data in real time to help farmers make the best decisions with regard to planting, fertilizing and harvesting crops. precision agriculture drones and empowering them with machine learning that create actionable insights from drone farm data that can reduce crop loss, water and chemical usage."/>
              </div>
            </div>
            <div className="Col-6">
              <div>
                <img src={farm} className="Image-responsive" alt="" />
              </div>
            </div>
          </div>
          <div className="Row Second-feature">
            <div className="Col-6">
              <div>
                <img src={bot} className="Image-responsive" alt="" />
              </div>
            </div>
            <div className="Col-6">
              <div>
                <FeatureList title="CHATBOTS FOR FARMERS" details="ShareQube is building a conversational virtual assistants to automate interactions with farmers. An Artificial intelligence powered chatbots that uses machine learning techniques, natural language processing and interact with farmers in a personalized way, assisting farmers with answers to their questions, giving advice and recommendations on specific farm problems. we use AI cognitive technologies to predict exciting times ahead for agriculture towards efficiency, sustainability and meeting the Africa’s food needs."/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
