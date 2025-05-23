// HtmlContentComponent.jsx
import React from "react";

const HtmlContentComponent = ({ htmlContent }: any) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default HtmlContentComponent;
