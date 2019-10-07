import * as React from "react";

import "semantic-ui-css/semantic.min.css";

import { Container } from "semantic-ui-react";
import logo from "../gfx/ahertava_logo.png";
import MenuContainer from "./MenuContainer";

class BasicLayout extends React.Component {
  public render() {
    return (
      <div>
        <MenuContainer siteLogo={logo} />
          <Container>
            {this.props.children}
          </Container>
      </div>
    );
  }
}

export default BasicLayout;