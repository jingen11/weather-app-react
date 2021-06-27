import React from "react";
import MapView from "./MapView";
import WeatherList from "./weatherList";
import ImageList from "./ImageList";

import { connect } from "react-redux";

class App extends React.Component {
  emptyPlaceholder() {
    return (
      <div className="column">
        <div className="ui raised segment" style={{ borderRadius: "10px" }}>
          <div className="ui placeholder">
            <div
              className="rectangle image"
              style={{ height: "160px", margin: "10px" }}
            ></div>
            <div className="paragraph">
              <div className="full line"></div>
              <div className="full line"></div>
              <div className="full line"></div>
              <div className="full line"></div>
              <div className="full line"></div>
              <div className="full line"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  emptyPlaceholders() {
    return (
      <div className="three column row">
        {this.emptyPlaceholder()}
        {this.emptyPlaceholder()}
        {this.emptyPlaceholder()}
      </div>
    );
  }

  render() {
    return (
      <div style={{ backgroundColor: "#e2e3f4" }}>
        <MapView />
        <br />
        <div className="ui container">
          <div className="ui grid">
            {this.props.cities.length > 0 && this.props.weathers.length > 0 ? (
              <div className="three column row">
                <WeatherList
                  cities={this.props.cities}
                  weathers={this.props.weathers}
                />
              </div>
            ) : (
              this.emptyPlaceholders()
            )}
          </div>
          <br />
          <br />
          <br />
          <div className="ui container">
            <ImageList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cities: state.cities, weathers: state.weathers };
};

export default connect(mapStateToProps)(App);
