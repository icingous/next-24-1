import React from "react";

const Landing = (props: { params: { locale: string } }) => {
  return <div>{`Landing ${props.params.locale}`}</div>;
};

export default Landing;
