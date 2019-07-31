import React from "react";
import axios from "axios";
import Suggestions from "./Suggestions";

const API_URL = "https://mfwkweb-api.clarovideo.net/services/content/list";

class InputSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: []
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  getInfoMovies = () => {
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
        this.setState({ results: response.data.response.groups });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  onChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfoMovies();
          }
        }
        if (this.state.query.length === 0) {
          this.setState({ results: [] });
        }
      }
    );
  };

  onKeyPress(e) {
    if (e.key === "Enter") {
      this.setState({
        query: e.target.value
      });
      console.log(this.state.query);
    }
  }

  render() {
    return (
      <div className="divSearch">
        <label className="labelS">Buscar: </label>
        <input
          className="inputS"
          name="search"
          placeholder="Introduce tu busqueda"
          ref={input => (this.search = input)}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />
        <Suggestions results={this.state.results} />
      </div>
    );
  }
}

export default InputSearch;
