import React from 'react';
import first from './images/1.jpg'
import second from './images/2.jpg'
import third from './images/3.jpg'
import fourth from './images/4.jpg'
import fifth from './images/5.jpg'
import sixth from './images/6.jpg'
// import logo from './logo.svg';
import './App.css';

import Card from './Card'

class App extends React.Component{
  render(){
    return(
      <div className = "App">
        <div>
          <h3>News Headlines</h3>
          <div>
          <Card
            pic = {first}
            text = "Joker and joker Jr"
            topic = "father-son bonding"
            />
          <Card
            pic = {second}
            text = "a breath of fresh air"
            topic = "outdoors"
            />
          
          <Card
            pic = {third}
            text = "He has to shop in the child section. Click to find out why"
            topic = "childrens clothes are cheaper"
            />
          </div>
        <div>
          <div>
          <h3>Sports Headlines</h3>
          
          <Card
            pic = {fourth}
            text = "A cat who became sad"
            topic = "sad cats"
           />

          <Card
            pic = {fifth}
            text = "A cat whos food got stolen"
            topic = "food stealers"
          />

          <Card
            pic = {sixth}
            text = "This mans will never smile the same again"
            topic = "Married men"
            />

          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default App;

//change
