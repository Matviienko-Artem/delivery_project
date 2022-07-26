import { makeStyles } from '@mui/material';

export const useStyles = makeStyles(theme => ({
  link: {
    transition: `border-color ${theme.transition}`,
    textDecoration: 'none',
    border: `1px solid ${theme.palette.primary}`,
    marginRight: '10px',
  },
  active: {
    borderColor: '#fff',
  },
}));
