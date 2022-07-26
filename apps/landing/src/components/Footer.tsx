import { Box, Typography } from '@mui/material';
import theme from '../theme/theme';
import Links from './Links';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        justifyItems: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: '10px 4px',
        width: 'calc( 100% - 8px )',
        maxWidth: theme.spacing(190),
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '1.125rem' }} color="secondary">
        ingl.io
      </Typography>
      <Typography variant="caption" sx={{ color: 'white' }}>
        Copyright &copy; {`${new Date().getFullYear()}`}
      </Typography>
      <Links />
    </Box>
  );
}
