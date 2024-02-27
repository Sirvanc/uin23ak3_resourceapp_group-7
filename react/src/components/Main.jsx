import React from "react";

export default function Main(props) {
  const { activeTab } = props;
  const uppercaseActiveTab = activeTab.toUpperCase();
  return (
    <>
      <h1>{uppercaseActiveTab}</h1>
    </>
  );
}
