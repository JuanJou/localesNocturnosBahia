import React from 'react';
import {Image, Text, View} from 'react-native';
import * as images from '../../core/images/images';
import {Marker} from 'react-native-maps';

export class MarkerForMap {
  id;
  location;
  name;
  friendlyType;
  type;
  clickMarker;

  constructor(props) {
    Object.assign(this, props);
  }

  render() {
    console.log(this);
    return (
      <Marker
        identifier={this.id.toString()}
        onPress={this.clickMarker}
        key={this.name}
        coordinate={{
          latitude: this.location.latitude,
          longitude: this.location.longitude,
        }}
        description={this.friendlyType}
        title={this.name}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Roboto-Regular',
              fontSize: 10,
              fontWeight: 'bold',
            }}>
            {this.name}
          </Text>
          <Image
            source={images[this.type + 'IMAGE']}
            style={{
              height: 32,
              width: 32,
            }}></Image>
        </View>
      </Marker>
    );
  }
}
