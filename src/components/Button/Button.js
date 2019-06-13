import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/styles';
import MUIButton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import cx from 'clsx';

const styleClasses = makeStyles({
  root: {
    border: 0,
    height: '48px',
    boxShadow: 'none',

    //Applying Null Coalescing with themes
    color: props => props.styles.root.color || props.theme.palette.common.white,

    paddingTop: '0',
    paddingRight: '16px',
    paddingBottom: '0',
    paddingLeft: '16px',
    textTransform: 'none',

    //Applying Null Coalescing with default
    width: props => props.styles.root.width || '100%',
    [props => props.theme.breakpoints.up('md')]: {
      width: props => props.styles.root.width.md || '314px'
    }
  },
  label: {
    fontSize: '18px',

    [props => props.theme.breakpoints.up('md')]: {
      fontSize: '20px'
    }
  },
  containedPrimary: {
    marginTop: 10,
    backgroundColor: props => props.theme.palette.primary.main,
    '&:active,&:hover': {
      backgroundColor: props => props.theme.palette.primary.dark
    },
    '&:disabled': {
      backgroundColor: props => props.theme.palette.disabled.main,
      color: props => props.theme.palette.common.white
    }
  },
  containedSecondary: {
    height: '500px',
    color: props => props.theme.palette.primary.main,
    border: '1px solid',
    borderColor: props => props.theme.palette.primary.main,
    backgroundColor: props => props.theme.palette.colorVariables.TRANSPARENT,
    '&:active,&:hover': {
      backgroundColor: props =>
        props.theme.palette.colorVariables.SECONDARY_HOVER
    },
    '&:disabled': {
      backgroundColor: props => props.theme.palette.colorVariables.TRANSPARENT,
      borderColor: props => props.theme.palette.disabled.main
    }
  }
});

const Button = props => {
  const {
    children,
    className,
    disabled,
    id,
    color,
    href,
    forwardedRef,
    onClick
  } = props;

  const classes = styleClasses(props);

  return React.createElement(
    MUIButton,
    {
      className: cx('zButton', className),
      classes: classes,
      disabled: disabled,
      disableRipple: true,
      'data-quid': id,
      color: color,
      variant: 'contained',
      href: href,
      ref: forwardedRef,
      onClick: onClick
    },
    children
  );
};

Button.defaultProps = {
  color: 'primary',
  href: null,
  forwardedRef: React.createRef(),
  styles: {
    root: {}
  }
};

export default withTheme(Button);
