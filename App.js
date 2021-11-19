
import React, { Component } from "react";
import {View } from "react-native";
import  MapmyIndiaGL  from  'mapmyindia-map-react-native-beta';

MapmyIndiaGL.setMapSDKKey("8ea478b985b81b46c49f4f6e92be6428");//place your mapsdkKey
MapmyIndiaGL.setRestAPIKey("8ea478b985b81b46c49f4f6e92be6428");//your restApiKey
MapmyIndiaGL.setAtlasClientId("33OkryzDZsIvAkeFr6v1kdezBurcDZycdVBIKsMiog0st8sWZYMZcVFEA0bQ8N0wmWUm4OOGTLPG-Awj6n4P0w==");//your atlasClientId key
MapmyIndiaGL.setAtlasClientSecret("lrFxI-iSEg8q1agsZl3kpwiNNNvriZIqxA8MGHgn9n_XuNuuC4AGWBLHqsgehC5yKEuR1XriqvjuoHJRaGvinxjbug_novLm"); //your atlasClientSecret key
MapmyIndiaGL.setAtlasGrantType("Client_credentials");


export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
          <MapmyIndiaGL.MapView style={{flex:1}} >
		  <MapmyIndiaGL.Camera
                ref={c  => (this.camera = c)}
                zoomLevel={12}
                minZoomLevel={4}
                maxZoomLevel={22}
                centerCoordinate={[77.231409,28.6162]}
                 />
		 </MapmyIndiaGL.MapView>
      </View>
    );
  }
}