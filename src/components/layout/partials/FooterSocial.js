import React from 'react';
import classNames from 'classnames';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );
//https://www.instagram.com/bwhs.robotics/
  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://www.youtube.com/channel/UCwi_QWdhXd-1MDRp1ZOvGQQ" target="_blank"><YouTubeIcon  /></a>
        </li>
        <li>
        <a href="https://www.instagram.com/bwhs.robotics/" target="_blank"><InstagramIcon /></a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;