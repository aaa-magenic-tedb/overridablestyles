import React from 'react';
import { withTheme, makeStyles } from '@material-ui/styles';
import cx from 'clsx';
import { Link as MuiLink } from '@material-ui/core'; // used the Link instead of the button
import _ from 'lodash';

const styleClasses = makeStyles({
  primary: {
    color: props =>
      props.overrides.primary.color || props.theme.palette.primary.dark,
    cursor: 'pointer',
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 2.67,
    letterSpacing: 'normal',
    padding: '12px 0 12px 0',
    [props => props.theme.breakpoints.down('md')]: {
      fontSize: 16,
      lineHeight: 3,
      padding: '13.5px 0 13.5px 0'
    },
    '&:hover': {
      color: props =>
        _.get(
          props,
          'overrides.hover.color',
          props.theme.palette.primary.dark
        ) || 'orange'
    }
  },
  secondary: {
    color: props => props.theme.palette.colorVariables.SECONDARY_HOVER,
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: 16,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 2.75,
    letterSpacing: 'normal',
    padding: '13.5px 0 13.5px 0',
    [props => props.theme.breakpoints.down('md')]: {
      fontSize: 14,
      lineHeight: 3.14,
      letterSpacing: 'normal',
      padding: '14.5px 0 14.5px 0'
    },
    '&:hover': {
      color: props => props.theme.palette.colorVariables.VERY_DARK_BLUE
    }
  }
});

const Link = props => {
  const {
    id,
    className,
    onClick,
    //classes, NOTE: This is no longer needed.
    href,
    children,
    onBlur,
    target
  } = props;

  const classes = styleClasses(props);

  return (
    <MuiLink
      id={id}
      className={cx('Link', [
        className === 'primary' ? classes.primary : classes.secondary
      ])}
      href={href}
      onBlur={onBlur}
      onClick={onClick}
      target={target}
    >
      {children}
    </MuiLink>
  );
};

Link.defaultProps = {
  theme: {}
};

export default withTheme(Link);
