// Все импорты должны находиться в начале файла
import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './GoogleMap.scss';
// Удалите или комментируйте неиспользуемые импорты
// import Marker from './../../img/icon/marker.svg'

// Устанавливаем кастомные опции для иконок маркеров
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const customIcon = new L.Icon({
    iconUrl: require('./../../img/icon/marker.png'), // Замените на URL вашей иконки маркера
    // iconRetinaUrl: 'marker-icon-2x.png', // Опционально для ретина-дисплеев
    // shadowUrl: 'marker-shadow.png', // Опционально тень для иконки
    iconSize: [30, 30], // Размер иконки
    iconAnchor: [12, 41], // Точка иконки, которая будет соответствовать местоположению маркера
    popupAnchor: [1, -34], // Точка, от которой будет открываться всплывающее окно относительно iconAnchor
    // shadowSize: [41, 41] // Размер тени
});

const MapView = () => {
    const position = [50.468271506989495, 30.514615626985847]; // Широта и долгота
    return (
        <MapContainer center={position} zoom={20} style={{height: '246px', width: '273px', borderRadius: '24px'}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>
                {/*<Popup>*/}
                {/*    Вы здесь! /!* Можете настроить сообщение всплывающего окна *!/*/}
                {/*</Popup>*/}
            </Marker>
        </MapContainer>
    );
};

export default MapView;
