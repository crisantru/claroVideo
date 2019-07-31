import React, { Component } from "react";
import axios from "axios";
import Portrait from "./Portrait";

const API_URL = "https://mfwkweb-api.clarovideo.net/services/content/list";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }

  componentDidMount() {
    axios
      .get(API_URL, {
        crossDomain: true,
        params: {
          api_version: "v5.87",
          authpn: "webclient",
          authpt: "tfg1h3j4k6fd7",
          format: "json",
          region: "mexico",
          device_id: "web",
          device_category: "web",
          device_model: "web",
          device_type: "web",
          HKS: "aldvd92kttc77ici1701ui1ds2",
          quantity: "10",
          node_id: "43864"
        }
      })
      .then(response => {
        console.log(response.data.response.groups);
        this.setState({ photos: response.data.response.groups });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  cardImage() {
    return this.state.photos.map(function(object, i) {
      return <Portrait obj={object} key={i} />;
    });
  }

  render() {
    return <div className="gridPhotos">{this.cardImage()}</div>;
  }
}

export default Movie;
