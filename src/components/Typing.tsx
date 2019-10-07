import * as React from "react";
import "../styles/typing.css";

class Typing extends React.Component<any, object> {
  public render() {
    return (
      <p className="typing-txt">Kirjoittaa<span>.</span><span>.</span><span>.</span></p>
    );
  }
}

export default Typing;