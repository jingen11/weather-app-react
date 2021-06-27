import "./mapview.css";
import React, { Component } from "react";
import { VectorMap } from "react-jvectormap";

import { connect } from "react-redux";
import { requestAllInfo, selectRegion, selectState } from "../actions";

class MapView extends Component {
  constructor(props) {
    super(props);

    this.mapRef = React.createRef();
  }

  componentDidUpdate() {
    Array.from(document.getElementsByClassName("jvectormap-tip")).forEach(
      (el) => {
        el.style.display = "none";
      }
    );
  }

  onRegionClicked = async (code) => {
    const usState = this.props.stateList.filter(
      (element) => element.code === code
    )[0];

    this.props.selectRegion(code);
    this.props.selectState(usState.state);
    await this.props.requestAllInfo(code);
  };

  displayState() {
    if (this.props.selectedState.length === 0)
      return (
        <div style={{ color: "#262abc" }}>Please select a state to start!</div>
      );
    else {
      return <div style={{ color: "#262abc" }}>{this.props.selectedState}</div>;
    }
  }

  render() {
    return (
      <div
        className="ui fluid container"
        style={{ backgroundColor: "#e2e3f4" }}
      >
        <VectorMap
          map={"us_aea"}
          backgroundColor="#e2e3f4"
          ref={this.mapRef}
          containerStyle={{
            display: "flex",
            width: "100%",
            height: "60vh",
          }}
          regionStyle={{
            initial: {
              fill: "#B3AEE9",
              "fill-opacity": 1,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 1,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
            selected: {
              fill: "#6871ea",
            },
            selectedHover: {},
          }}
          containerClassName="map"
          regionSelectable={true}
          selectedRegions={this.props.selectedRegion}
          onRegionClick={(e, code) => this.onRegionClicked(code)}
        />
        <div className="ui center aligned container">
          <h1 className="ui header">{this.displayState()}</h1>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    stateList: state.stateList,
    selectedRegion: state.selectedRegion,
    selectedState: state.selectedState,
  };
};

export default connect(mapStateToProps, {
  requestAllInfo,
  selectRegion,
  selectState,
})(MapView);
