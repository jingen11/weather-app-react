import "./image.css";
import React from "react";
import ImageItem from "./ImageItem";

import { connect } from "react-redux";

class ImageList extends React.Component {
  render() {
    const renderedImage = this.props.images.map((image) => {
      return <ImageItem key={image.id} image={image} />;
    });
    return <div className="image-list">{renderedImage}</div>;
  }
}

const mapStateToProps = (state) => {
  return { images: state.images };
};

export default connect(mapStateToProps)(ImageList);

// export default ImageList;
