import { Theme } from 'theme-ui';
import { keyframes } from "@emotion/react";

const makeTheme = <T extends Theme>(t: T) => t
const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

export const theme = makeTheme({
    // example colors with dark mode
    colors: {
      text: '#343D48', // body color and primary color
      heading: '#6610f2', // primary heading color
      border_color: '#000000', // border color
      primary: '#6610f2', // primary button and link color
      secondary: '#6f42c1', // secondary color - can be used for hover states
      white: '#FFFFFF'
    },
    breakpoints: [
      '480px',
      '640px',
      '768px',
      '1024px',
      '1220px',
      '1366px',
      '1620px',
    ],
    fonts: {
      body: "TSR",
      heading: "TSR",
    },
    fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
    fontWeights: {
      body: 'normal',
      heading: 500,
      bold: 700,
    },
    lineHeights: {
      body: 1.8,
      heading: 1.5,
    },
    letterSpacings: {
      body: 'normal',
      caps: '0.2em',
      heading: '-0.5px',
    },
    space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
    layout: {
      container: {
        maxWidth: [
          '100%',
          null,
          null,
          '780px',
          '1020px',
          '1200px',
          null,
          '1310px',
        ],
        px: [4, 6],
      },
      header: {
        color: 'white',
        fontWeight: 'body',
        py: 4,
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'primary',
        transition: 'all 0.4s ease',
        animation: `${positionAnim} 0.4s ease`,
      },
    },
    forms: {
      label: {
        fontSize: 1,
        fontWeight: 'bold',
      },
      input: {
        borderRadius: 8,
        borderColor: 'border_color',
        height: 60,
        '&:focus': {
          borderColor: 'primary',
          boxShadow: (t: Theme) => `0 0 0 2px ${t.colors?.primary}`,
          outline: 'none',
        },
      },
    },
    buttons: {
      defaultBtn: {
        borderRadius: '45px',
        fontSize: ['14px', null, null, 2],
        letterSpacings: '-0.15px',
        padding: ['12px 20px', null, '15px 30px'],
        fontFamily: 'body',
        cursor: 'pointer',
        lineHeight: 1.2,
        transition: 'all 0.25s',
        fontWeight: 500,
        '&:focus': {
          outline: 0,
        },
      },
    }
  });