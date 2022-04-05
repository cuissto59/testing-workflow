import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";


const avatarSize = {
    full: 'w-full', /* 100% */
    xs: 'w-8',  /* 32px */
    sm: 'w-10',  /* 40px */
    base: 'w-24', /* 96px */
    l: 'w-32', /* 128px */ 
    xl: 'w-40', /* 160px */
};

export const Avatar = ({size, alt, src}) => {
    return <img
        className={clsx(avatarSize[size], 'rounded-full overflow-hidden shadow-inner')}
        src={src}
        alt={alt}
    />

}

Avatar.propTypes = {
    size: PropTypes.oneOf(['xs', 'sm', 'base', 'l', 'xl', 'full']),
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
    size: 'full',
}
