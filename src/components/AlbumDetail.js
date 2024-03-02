import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";


const AlbumDetail = (props) => {
  const { thumbnail_image, title, artist, image } = props.album;
  return (
    <View style={styles.container}>
      <View style={styles.cardContainerStyle}>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{ uri: image }}
        />
      </View>
      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
        <Image
          style={styles.thumbnailStyle}
          source={{ uri: thumbnail_image }}
        />
        <View style={styles.headerContentStyle}>
          <Text style={styles.fontStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </View>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BBAA95',
    flex: 1,
  },
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5,
    borderRadius: 5,
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10
  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ddd",
    shadowColor: "#FFFFCC",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  cardSectionStyle: {
    padding: 20,
    backgroundColor: "#FFFFCC",
    borderColor: "#ddd",
    borderBottomWidth: 1,
  },
  imageStyle: {
    height: 350,
    width: null,
    borderRadius: 20,
  },
  fontStyle:{
    fontSize: 18,
    fontWeight: "bold",
  }
});

export default AlbumDetail;