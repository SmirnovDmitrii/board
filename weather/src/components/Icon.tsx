import * as React from "react";
import { api } from "../constants";
import styled from "styled-components";

interface IconProps {
  icon: string;
  description: string;
  size?: number;
}

const IconContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img<Pick<IconProps, "size">>`
  width: ${(props) => (props.size ? props.size : "100px")};
  height: ${(props) => (props.size ? props.size : "100px")};
`;

const IconDescription = styled.div`
  position: absolute;
`;

export const Icon = (props: IconProps) => {
  const { icon, description, size } = props;
  return (
    <IconContainer>
      <Image src={api.icon(icon)} alt="weather icon" size={size} />
      <IconDescription>{description}</IconDescription>
    </IconContainer>
  );
};
