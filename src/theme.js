import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

// color design tokens
export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
        grey: {
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#525252',
          700: '#3d3d3d',
          800: '#292929',
          900: '#141414',
        },
        primary: {
          100: '#d0d1d5',
          200: '#a1a4ab',
          300: '#727681',
          400: '#1F2A40',
          500: '#141b2d',
          600: '#101624',
          700: '#0c101b',
          800: '#080b12',
          900: '#040509',
        },
        greenAccent: {
          100: '#dbf5ee',
          200: '#b7ebde',
          300: '#94e2cd',
          400: '#70d8bd',
          500: '#4cceac',
          600: '#3da58a',
          700: '#2e7c67',
          800: '#1e5245',
          900: '#0f2922',
        },
        redAccent: {
          100: '#f2dcdb',
          200: '#e5b9b7',
          300: '#d79592',
          400: '#ca726e',
          500: '#bd4f4a',
          600: '#973f3b',
          700: '#712f2c',
          800: '#4c201e',
          900: '#26100f',
        },
        blueAccent: {
          100: '#e1e2fe',
          200: '#c3c6fd',
          300: '#a4a9fc',
          400: '#868dfb',
          500: '#6870fa',
          600: '#535ac8',
          700: '#3e4396',
          800: '#2a2d64',
          900: '#151632',
        },
        yellowAccent: {
          100: '#faffe3',
          200: '#f1ffaa',
          300: '#e7ff71',
          400: '#deff39',
          500: '#d4ff00',
          600: '#a5c600',
          700: '#768e00',
          800: '#475500',
          900: '#181c00',
        },
        orangeAccent: {
          100: '#fff2e3',
          200: '#ffd7aa',
          300: '#ffbd71',
          400: '#ffa239',
          500: '#ff8800',
          600: '#c66a00',
          700: '#8e4c00',
          800: '#552d00',
          900: '#1c0f00',
        },
      }
    : {
        grey: {
          100: '#141414',
          200: '#292929',
          300: '#3d3d3d',
          400: '#525252',
          500: '#666666',
          600: '#858585',
          700: '#a3a3a3',
          800: '#c2c2c2',
          900: '#e0e0e0',
        },
        primary: {
          100: '#040509',
          200: '#080b12',
          300: '#0c101b',
          400: '#dddddd', //101624
          500: '#141b2d',
          600: '#434957',
          700: '#727681',
          800: '#a1a4ab',
          900: '#d0d1d5',
        },
        greenAccent: {
          100: '#0f2922',
          200: '#1e5245',
          300: '#2e7c67',
          400: '#3da58a',
          500: '#4cceac',
          600: '#70d8bd',
          700: '#94e2cd',
          800: '#b7ebde',
          900: '#dbf5ee',
        },
        redAccent: {
          100: '#26100f',
          200: '#f2dcdb',
          300: '#4c201e',
          400: '#712f2c',
          500: '#973f3b',
          600: '#bd4f4a',
          700: '#ca726e',
          800: '#d79592',
          900: '#e5b9b7',
        },
        blueAccent: {
          100: '#151632',
          200: '#2a2d64',
          300: '#3e4396',
          400: '#535ac8',
          500: '#6870fa',
          600: '#868dfb',
          700: '#a4a9fc',
          800: '#c3c6fd',
          900: '#e1e2fe',
        },
        yellowAccent: {
          100: '#181c00',
          200: '#475500',
          300: '#768e00',
          400: '#a5c600',
          500: '#d4ff00',
          600: '#deff39',
          700: '#e7ff71',
          800: '#f1ffaa',
          900: '#e1e2fe',
        },
        orangeAccent: {
          100: '#1c0f00',
          200: '#552d00',
          300: '#8e4c00',
          400: '#8e4c00',
          500: '#ff8800',
          600: '#ffa239',
          700: '#ffa239',
          800: '#ffd7aa',
          900: '#fff2e3',
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    components: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            MuiIconButton: {
              styleOverrides: {
                sizeMedium: {
                  color: colors.greenAccent[300],
                  fontSize: '2em',
                },
              },
            },
            MuiInputLabel: {
              styleOverrides: {
                root: {
                  color: colors.greenAccent[300],
                  fontSize: '1.5em',
                },
              },
            },
            MuiOutlinedInput: {
              styleOverrides: {
                root: {
                  color: colors.greenAccent[300],
                  fontSize: '1.5em',
                },
              },
            },
            MuiFilledInput: {
              styleOverrides: {
                root: {
                  color: colors.greenAccent[300],
                  fontSize: '1.5em',
                  backgroundColor: 'none',
                },
              },
            },
            MuiInputAdornment: {
              styleOverrides: {
                root: {
                  color: colors.greenAccent[300],
                  fontSize: '1.5em',
                  backgroundColor: 'none',
                },
              },
            },
            MuiSvgIcon: {
              styleOverrides: {
                root: {
                  color: colors.greenAccent[300],
                  backgroundColor: 'none',
                },
              },
            },
            MuiFormLabel: {
              styleOverrides: {
                root: {
                  color: colors.greenAccent[300],
                  backgroundColor: 'none',
                  fontSize: '1.5em',
                },
              },
            },
            MuiFormHelperText: {
              styleOverrides: {
                root: {
                  fontSize: '1.2em',
                },
              },
            },
          }
        : {
            MuiIconButton: {
              styleOverrides: {
                sizeMedium: {
                  color: colors.greenAccent[300],
                },
              },
            },
            MuiInputLabel: {
              styleOverrides: {
                root: {
                  backgroundColor: 'none',
                  color: colors.greenAccent[300],
                  fontSize: '1.5em',
                },
              },
            },
            MuiOutlinedInput: {
              styleOverrides: {
                root: {
                  backgroundColor: 'none',
                  color: colors.greenAccent[300],
                  fontSize: '1.5em',
                },
              },
            },
            MuiInputAdornment: {
              styleOverrides: {
                root: {
                  backgroundColor: 'none',
                  color: colors.greenAccent[300],
                  fontSize: '1.5em',
                },
              },
            },
            MuiSvgIcon: {
              styleOverrides: {
                root: {
                  color: colors.greenAccent[300],
                  backgroundColor: 'none',
                },
              },
            },
            MuiFormLabel: {
              styleOverrides: {
                root: {
                  color: colors.greenAccent[300],
                  backgroundColor: 'none',

                  fontSize: '1.5em',
                },
              },
            },
            MuiFormHelperText: {
              styleOverrides: {
                root: {
                  fontSize: '1.2em',
                },
              },
            },
          }),
    },
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            success: {
              main: colors.blueAccent[500],
            },
            info: {
              main: colors.greenAccent[300],
            },
            modal: {
              main: colors.blueAccent[300],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            danger: {
              main: colors.redAccent[500],
            },
            background: {
              default: colors.primary[500],
            },
            menu: {
              default: colors.greenAccent[300],
              hover: colors.yellowAccent[300],
              active: colors.blueAccent[300],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            success: {
              main: colors.blueAccent[500],
            },
            info: {
              main: colors.greenAccent[300],
            },
            modal: {
              main: colors.blueAccent[300],
            },
            danger: {
              main: colors.redAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: '#fcfcfc',
            },
            menu: {
              default: colors.greenAccent[300],
              hover: colors.yellowAccent[300],
              active: colors.blueAccent[300],
            },
          }),
    },
    typography: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
    transitions: {
      easing: {
        // This is the most common easing curve.
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
