import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-native-maps';
import { MarkersFactory } from '../../../core/factories/markersFactories';
import firestore from '@react-native-firebase/firestore';

export default class ObjectsOnMap extends Component {
    
    markersFactory = new MarkersFactory();

    constructor(props) {
        super(props);
        this.state = {
            places: []
        }
    }

    componentDidMount() {
		firestore()
		.collection('Places')
			.get().then(
				(documents) => {
                    this.setState({places: documents.docs});
				}
			);
   }
    
	clickMarker(e) {
        console.log(e.nativeEvent);
		this.props.onMarkerSelect(e.nativeEvent);
    }

    render() {
        let places = [];
        if (this.state.places !== []) {
            places = this.state.places.map(
                (place) => {
                    console.log('Place',place.data().location);
                    return (<Marker
                                onPress={this.clickMarker}
                                key={place.data().name}
                                coordinate= {{
                                    latitude: place.data().location.latitude,
                                    longitude: place.data().location.longitude}}
                                description= {place.data().type}
                                title={place.data().name}>
                            </Marker>);
                }
            );
        }
        
        return places;
    }
}

ObjectsOnMap.propTypes = {
    onMarkerSelect: PropTypes.func
};