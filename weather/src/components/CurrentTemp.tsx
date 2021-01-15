import * as React from "react";

import { Temperature } from "../Widget";
import styled from "styled-components";

interface CurrentTempProps {
  tempParams: Temperature | null;
}

const TempText = styled.p`
  font-size: 14px;
`;

const FeelsLike = styled.span`
  font-size: 12px;
`;

export const CurrentTemp = (props: CurrentTempProps) => {
  const { temp, feelsLike } = props.tempParams as Temperature;
  return (
    <TempText>
      {temp}&#176;
      <FeelsLike> (feels like {feelsLike})&#176;</FeelsLike>
    </TempText>
  );
};
