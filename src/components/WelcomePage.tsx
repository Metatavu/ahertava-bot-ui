import * as React from "react";

import BasicLayout from "./BasicLayout";
import Bot from "./Bot";

class WelcomePage extends React.Component<any, any> {

  public render() {
    return (
      <BasicLayout>
        <Bot storyId={ process.env.REACT_APP_STORY_ID || "" } locale="fi" timeZone="Europe/Helsinki" visitor="From outerspace"/>
      </BasicLayout>
    );
  }
}

export default WelcomePage;