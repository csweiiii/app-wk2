import React from "react";
import {StyleSheet,ScrollView} from "react-native";
import albumJson from "../json/album.json";

import AlbumDetail from "../components/AlbumDetail";


const AlbumList = () => {

    console.log('rendering AlbumList...');

    return (
    <ScrollView>
      <AlbumDetail album = {albumJson[0]} />
      <AlbumDetail album = {albumJson[1]} />
      <AlbumDetail album = {albumJson[2]} />
      <AlbumDetail album = {albumJson[3]} />
      <AlbumDetail album = {albumJson[4]} />
    </ScrollView>
    );
}

export default AlbumList;