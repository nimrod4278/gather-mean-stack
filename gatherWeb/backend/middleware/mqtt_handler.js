const mqtt = require('mqtt');
const axios = require('axios');

const Team = require('../models/team');

class MqttHandler {
  constructor() {
    this.host = 'https://io.adafruit.com/';
    this.username = "gather1122"; //process.env.ADAFRUIT_USER; // mqtt credentials if these are needed to connect
    this.password = "aio_UNqL67055VEEiNZQaFlALTKsgSbV"; //process.env.ADAFRUIT_PASS;
    this.subscriptionTopic = `${this.username}/feeds/finish`;
    this.mqttClient = mqtt.connect(this.host, { port:1883, username: this.username, password: this.password });
    this.team = null;
    // this.lastScore = 0;
  }
  
  connect() {
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    // this.mqttClient = await mqtt.connect(this.host, { port:8883, username: this.username, password: this.password });

    // console.log(this.mqttClient)

    // this.mqttClient = await axios.get(`https://io.adafruit.com/api/v2/${this.username}/feeds?x-aio-key=${this.password}`)

    // Connection callback
    this.mqttClient.on('connect', () => {
      console.log(`mqtt client connected to:  ${this.host}`);
      this.mqttClient.subscribe(this.subscriptionTopic);
    });

    // Mqtt error calback
    this.mqttClient.on('error', (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    // mqtt subscriptions
    // this.mqttClient.subscribe(this.subscriptionTopic, {qos: 0});

    // When a message arrives, console.log it
    this.mqttClient.on('message', async (topic, message) => {
        console.log("number of presses:");
        const points = message.toString();
        console.log(points);
        console.log("team number:");
        console.log(this.team)
        // const points = message.points;
        // const teamName = message.teamName;
        const userTeam = await Team.findOne({name: this.team});
        // await userTeam.update({points: 0});
        console.log("team:")
        console.log(userTeam)
        console.log('new points:')
        const newPoints = userTeam.points + parseInt(points);
        console.log(newPoints)
        await userTeam.updateOne({points: newPoints});
        console.log("message recivied from MQTT broker and DB updated");
    });

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }

  setTeam(teamNumber){
    this.team = teamNumber;
  }

  
// Sends a mqtt message to topic: mytopic
  sendMessage(message) {
    const res =  this.mqttClient.publish(this.username + '/feeds/start', message.toString());
    // console.log(res);
    console.log("Messege is sent to MQTT broker");
  }

  sendJson(message) {
    const res = this.mqttClient.publish(this.username + '/feeds/start/json', `{"value": ${message}}`);
    console.log(res);
    console.log("Messege is sent to MQTT broker");
  }

}

module.exports = MqttHandler;