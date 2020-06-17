/***************************************************
  Adafruit MQTT Library ESP8266 Example

  Must use ESP8266 Arduino from:
    https://github.com/esp8266/Arduino

  Works great with Adafruit's Huzzah ESP board & Feather
  ----> https://www.adafruit.com/product/2471
  ----> https://www.adafruit.com/products/2821

  Adafruit invests time and resources providing this open source code,
  please support Adafruit and open-source hardware by purchasing
  products from Adafruit!

  Written by Tony DiCola for Adafruit Industries.
  MIT license, all text above must be included in any redistribution
 ****************************************************/
#include "ESP8266WiFi.h"
#include "Adafruit_MQTT.h"
#include "Adafruit_MQTT_Client.h"
#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
  #include <avr/power.h>
#endif

/************************* WiFi Access Point *********************************/

#define WLAN_SSID       "OMRINIMRID"
#define WLAN_PASS       "0545421942"

/************************* Adafruit.io Setup *********************************/

#define AIO_SERVER      "io.adafruit.com"
#define AIO_SERVERPORT  1883                   // use 8883 for SSL
#define AIO_USERNAME    "gather1122"
#define AIO_KEY         "aio_HjFh48qbmclsyqjCi0hMaYeo5EBf"

/************ Global State (you don't need to change this!) ******************/

// Create an ESP8266 WiFiClient class to connect to the MQTT server.
WiFiClient client;
// or... use WiFiFlientSecure for SSL
//WiFiClientSecure client;

// Setup the MQTT client class by passing in the WiFi client and MQTT server and login details.
Adafruit_MQTT_Client mqtt(&client, AIO_SERVER, AIO_SERVERPORT, AIO_USERNAME, AIO_KEY);

/****************************** Feeds ***************************************/

// Setup a feed called 'photocell' for publishing.
// Notice MQTT paths for AIO follow the form: <username>/feeds/<feedname>
Adafruit_MQTT_Publish finishFeed = Adafruit_MQTT_Publish(&mqtt, AIO_USERNAME "/feeds/finish");

// Setup a feed called 'onoff' for subscribing to changes.
Adafruit_MQTT_Subscribe startFeed = Adafruit_MQTT_Subscribe(&mqtt, AIO_USERNAME "/feeds/start");


/*************************** NeoPixel PARTS **********************************/

#define PIN D6
Adafruit_NeoPixel strip = Adafruit_NeoPixel(30, PIN, NEO_GRB + NEO_KHZ800);
int currentPixel = 0;
long lastPlayed = millis();
uint32_t white = strip.Color(255, 255, 255);
uint32_t red = strip.Color(255, 0, 0);
uint32_t green = strip.Color(0, 255, 0);
uint32_t blue = strip.Color(0, 0, 255);
/*************************** ARDUINO PARTS **********************************/

#define TIME_OF_GAME 3000
#define buttonPin D1

int gameScore = 0;


/*************************** Sketch Code ************************************/

// Bug workaround for Arduino 1.6.6, it seems to need a function declaration
// for some reason (only affects ESP8266, likely an arduino-builder bug).
void MQTT_connect();

void setup() {
  // This is for Trinket 5V 16MHz, you can remove these three lines if you are not using a Trinket
  #if defined (__AVR_ATtiny85__)
    if (F_CPU == 16000000) clock_prescale_set(clock_div_1);
  #endif
  // End of trinket special code
  Serial.begin(115200);
  delay(10);

  pinMode(buttonPin, INPUT_PULLUP);
  strip.begin();
  strip.show(); // Initialize all pixels to 'off'
  
  Serial.println(F("Adafruit MQTT demo"));

  // Connect to WiFi access point.
  Serial.println(); Serial.println();
  Serial.print("Connecting to ");
  Serial.println(WLAN_SSID);

  WiFi.begin(WLAN_SSID, WLAN_PASS);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
    pixelOn(white);
  }
  Serial.println();

  Serial.println("WiFi connected");
  Serial.println("IP address: "); Serial.println(WiFi.localIP());

  // Setup MQTT subscription for onoff feed.
  mqtt.subscribe(&startFeed);
}

uint32_t x=0;

void loop() {
  // Ensure the connection to the MQTT server is alive (this will make the first
  // connection and automatically reconnect when disconnected).  See the MQTT_connect
  // function definition further below.
  MQTT_connect();
  currentPixel = 0;

  // this is our 'wait for incoming subscription packets' busy subloop
  // try to spend your time here

  Adafruit_MQTT_Subscribe *subscription;
  while ((subscription = mqtt.readSubscription(5000))) {
    if (subscription == &startFeed) {
      Serial.print(F("Got: "));
      Serial.println((char *)startFeed.lastread);
      gameScore = startPlaying();
      Serial.println("game score is: ");
      Serial.println(gameScore);
      Serial.print(F("\nSending finishFeed val "));
      if (! finishFeed.publish(gameScore)) {
        Serial.println(F("Failed"));
      } else {
        Serial.println(F("OK!"));
      }
    }
  }

  showLastPlayed(millis() - lastPlayed);
}

// Function to connect and reconnect as necessary to the MQTT server.
// Should be called in the loop function and it will take care if connecting.
void MQTT_connect() {
  int8_t ret;

  // Stop if already connected.
  if (mqtt.connected()) {
    return;
  }

  Serial.print("Connecting to MQTT... ");

  uint8_t retries = 3;
  while ((ret = mqtt.connect()) != 0) { // connect will return 0 for connected
       pixelOn(white);
       Serial.println(mqtt.connectErrorString(ret));
       Serial.println("Retrying MQTT connection in 5 seconds...");
       mqtt.disconnect();
       delay(5000);  // wait 5 seconds
       retries--;
       if (retries == 0) {
         // basically die and wait for WDT to reset me
         while (1);
       }
  }
  Serial.println("MQTT Connected!");
  showConnected();
}

int startPlaying(){
   int startTime = millis();
   int endTime = startTime;
   int buttonVal;
   int count = 0;
   Serial.println("Game started");
   while(endTime - startTime <= TIME_OF_GAME){
    buttonVal = digitalRead(buttonPin);
    if(buttonVal == LOW){
      Serial.println("BUTTON PRESSED");
      count++;
      if(count % 5 == 0){
        showTen(strip.Color(0, 255, 0), 10);
      }
      delay(100);
    }
    delay(100);
    endTime = millis();
  //    yield();
   }
   lastPlayed = millis();
   return count;
}

void pixelOn(uint32_t c) {
  strip.setPixelColor(currentPixel, c);
  strip.show();
  currentPixel++;
}

void showConnected() {
  rowOnRowOff(blue);
}

void resetStrip() {
  
}

void rowOnRowOff(uint32_t c) {
  colorWipe(strip.Color(0, 0, 255), 10);
  colorWipe(0, 10);
  colorWipe(strip.Color(0, 0, 255), 10);
  colorWipe(0, 10);
}

void showTen(uint32_t c, uint8_t wait){
    for (int j=0; j<10; j++) {  //do 10 cycles of chasing
    for (int q=0; q < 3; q++) {
      for (uint16_t i=0; i < strip.numPixels(); i=i+3) {
        strip.setPixelColor(i+q, c);    //turn every third pixel on
      }
      strip.show();

      delay(wait);

      for (uint16_t i=0; i < strip.numPixels(); i=i+3) {
        strip.setPixelColor(i+q, 0);        //turn every third pixel off
      }
    }
  }
  strip.show();
}

void colorWipe(uint32_t c, uint8_t wait) {
  for(uint16_t i=0; i<strip.numPixels(); i++) {
    strip.setPixelColor(i, c);
    strip.show();
    delay(wait);
  }
}

void showLastPlayed(long duration){
  if(duration > 765000) {
    duration = 765000;
  }

  duration = duration / 3000;

  Serial.print("Duration is:  ");
  Serial.println(duration);

  uint32_t c = strip.Color(duration * 2, 0, (255 - duration) / 2);
  for (uint16_t i=0; i < strip.numPixels(); i++){
    strip.setPixelColor(i, c);
  }
  strip.show();
}
