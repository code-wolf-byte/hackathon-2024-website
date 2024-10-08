
import * as React from 'react';
import { Link } from 'react-router-dom';

import clsxm from '../../../utils/utils';
const NewTab = () => {
  return (
    <svg
      viewBox='0 0 17 16'
      focusable='false'
      className='ml-1 aspect-square w-5'
    >
      <rect
        x='1'
        y='0.499969'
        width='15'
        height='15'
        rx='3.5'
        stroke='currentColor'
        fill='none'
      ></rect>
      <path
        d='M5.14645 10.6464C4.95118 10.8417 4.95118 11.1583 5.14645 11.3535C5.34171 11.5488 5.65829 11.5488 5.85355 11.3535L5.14645 10.6464ZM12 4.99997C12 4.72383 11.7761 4.49997 11.5 4.49997H7C6.72386 4.49997 6.5 4.72383 6.5 4.99997C6.5 5.27611 6.72386 5.49997 7 5.49997H11V9.49997C11 9.77611 11.2239 9.99997 11.5 9.99997C11.7761 9.99997 12 9.77611 12 9.49997V4.99997ZM5.85355 11.3535L11.8536 5.35352L11.1464 4.64642L5.14645 10.6464L5.85355 11.3535Z'
        fill='currentColor'
      ></path>
    </svg>
  );
};


const UnstyledLink = React.forwardRef(
  (
    { children, href, openNewTab, openNewTabIcon = false, className, ...rest },
    ref
  ) => {
    // If href start with `#` then it will render Link Component from `react-router-dom`
    const isNewTab =
      openNewTab !== undefined ? openNewTab : href && !href.startsWith('/');

    // If it is not new tab then then
    if (!isNewTab) {
      return (
        <Link to={href} ref={ref} className={className} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        // If link start with # then it will not open in new tab
        {...(!href.startsWith('#') && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
        href={href}
        {...rest}
        className={clsxm('inline-flex', className)}
      >
        {children} {openNewTabIcon && <NewTab />}{' '}
      </a>
    );
  }
);

export default UnstyledLink;
