import * as React from "react";
import { Container, Image, Menu } from "semantic-ui-react";
import "../styles/menu.css";

export interface Props {
  siteLogo: string;
}

class MenuContainer extends React.Component<Props, object> {
  public render() {
    return (
      <Menu fixed="top" inverted>
        <Container>
          <Image inline src={this.props.siteLogo} style={{ maxHeight: "76px", maxWidth: "200px", marginLeft: "15px", padding: "5px" }} />
        </Container>
      </Menu>
    );
  }
}

export default MenuContainer;