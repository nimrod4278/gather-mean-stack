/*
    This sketch demonstrates how to scan WiFi networks.
    The API is almost the same as with the WiFi Shield library,
    the most obvious difference being the different file you need to include:
*/
#include "ESP8266WiFi.h"
#include "ESP8266WebServer.h"
#include "ESP8266HTTPClient.h"
//#include "AutoConnect.h"

#define buttonPin D1

const char* ssid     = "***";
const char* password = "***";

const char* serverURL = "localhost:3000/api/games/";

HTTPMethod post = HTTP_POST;

ESP8266WebServer server(80);
//AutoConnect Portal(server);

void setup() {
  Serial.begin(115200);
  Serial.println();

  pinMode(buttonPin, INPUT_PULLUP);
//  Serial.println(digitalRead(buttonPin));

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {   //Wait for connection
     delay(500);
     Serial.println("Waiting to connect...");
   
  }
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
  Serial.println(WiFi.macAddress());

  server.on("/", handleRootPath);

//  Portal.begin();                    //Start the server
  server.begin();                    //Start the server
  Serial.println("Server listening");
//  initHTTPReq();
}

void loop() {
   server.handleClient();
//  Portal.handleClient();
}

//void initHTTPReq(){
//   if(WiFi.status()== WL_CONNECTED){   //Check WiFi connection status
// 
//     HTTPClient http;    //Declare object of class HTTPClient
//   
//     http.begin(serverURL);      //Specify request destination
//     http.addHeader("Content-Type", "text/plain");  //Specify content-type header
//     int httpCode = http.POST(WiFi.localIP());   //Send the request
//     String payload = http.getString();                  //Get the response payload
//   
//     Serial.println(httpCode);   //Print HTTP return code
//     Serial.println(payload);    //Print request response payload
//   
//     http.end();  //Close connection
//   }
//}

void handleRootPath() {
//   server.send(200, "text/plain", "Start Playing on ESP89266");
   int startTime = millis();
   int endTime = startTime;
   int buttonVal;
   int count = 0;
   Serial.println(startTime);
   while(endTime - startTime <= 3000){
    buttonVal = digitalRead(buttonPin);
    if(buttonVal == LOW){
      count++;
    }
    delay(10);
    endTime = millis();
//    yield();
   }
   Serial.println("Game ended");
   server.send(200, "text/plain", (String)count);
//   server.send(200, "text/plain", "Start Playing on ESP89266");
//   Serial.println(server.args());
}

void startPlaying(){
  
}

