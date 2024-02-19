import React, { Component } from "react";
import { SvgXml } from "react-native-svg";
import { View, TouchableOpacity } from "react-native";
import { CrossIcon, LeftArrowIcon, RightArrowIcon } from "../assets/svgs";

interface IProps {
  show?: boolean;
  preserveAspectRatio?: string;
  name?: string;
  fill?: string;
  width?: string;
  height?: string;
  style?: any;
  buttonViewProps?: any;
  viewProps?: any;
}
export class AssetSvg extends Component<IProps> {
  static icons = {
    left_arrow: LeftArrowIcon,
    right_arrow_2: RightArrowIcon,
    cross: CrossIcon,
  };
  static defaultProps = {
    show: true,
    width: "22",
  };
  render() {
    const {
      show = true,
      preserveAspectRatio,
      name,
      fill,
      width,
      height,
      style,
      buttonViewProps,
      viewProps,
    } = this.props;
    if (!show || !name) {
      return <React.Fragment />;
    }
    const Container: any = buttonViewProps ? TouchableOpacity : View;
    return (
      <Container {...viewProps} {...buttonViewProps}>
        <SvgXml
          preserveAspectRatio={preserveAspectRatio}
          xml={name}
          width={width}
          {...(height && { height })}
          stroke={fill}
          style={style}
        />
      </Container>
    );
  }
}
