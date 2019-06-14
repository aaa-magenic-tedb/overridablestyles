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
    //Applying Null Coalescing with themes
    color: props =>
      props.styles.label.color || props.theme.palette.common.white,
    [props => props.theme.breakpoints.up('md')]: {
      fontSize: '20px'
    }
  },
  containedPrimary: {
    marginTop: 20,
    marginBottom: 20,
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
  },
  fadeUp: {
    transform: 'translateY(-8px)'
  },
  iconButton: {
    display: 'inline-block',
    verticalAlign: `bottom`,
    width: 48,
    height: 48,
    border: `1px solid ${props => props.theme.palette.colorVariables.GRAY}`,
    borderRadius: 4,
    backgroundColor: `${props => props.theme.palette.colorVariables.WHITE}`,
    '&:active,&:hover': {
      borderWidth: 1,
      backgroundColor: `${props =>
        props.theme.palette.colorVariables.SECONDARY_HOVER}`,
      borderColor: `${props => props.theme.palette.colorVariables.DARKER_BLUE}`,
      '& svg': {
        color: `${props => props.theme.palette.primary.main}`
      }
    },
    '&:disabled': {
      background: `${props => props.theme.palette.disabled.main}`,
      border: `none`,
      '&:hover': {
        backgroundColor: `${props => props.theme.palette.disabled.main}`
      },
      '& svg': {
        color: `${props => props.theme.palette.colorVariables.GRAY}`
      }
    },
    '&:nth-child(n+1)': {
      marginRight: 8
    },
    '&:nth-child(n+2)': {
      marginLeft: 8
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
    onClick,
    fadeUp,
    isIconButton
  } = props;

  const classes = styleClasses(props);

  return (
    <MUIButton
      className={cx(
        'Button',
        {
          [classes.fadeUp]: fadeUp,
          [classes.iconButton]: isIconButton
        },
        className
      )}
      classes={{
        root: classes.root,
        containedPrimary: classes.containedPrimary,
        containedSecondary: classes.containedSecondary,
        label: classes.label
      }}
      disabled={disabled}
      disableRipple
      data-quid={id}
      color={color}
      variant='contained'
      href={href}
      ref={forwardedRef}
      onClick={onClick}
    >
      {children}
    </MUIButton>
  );
};

Button.defaultProps = {
  color: 'primary',
  href: null,
  forwardedRef: React.createRef(),
  styles: {
    root: {},
    label: {}
  }
};

export default withTheme(Button);
