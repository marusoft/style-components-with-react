import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { SocialIconWrapper } from "./styles/SocialIcons.styled";

const SocialIcons = () => {
  return (
    <SocialIconWrapper>
      <li>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </li>
    </SocialIconWrapper>
  );
};

export default SocialIcons;
