import { Box, Typography } from '@mui/material';

export default function DaoGem({
  isSelected,
  isUnusable,
  image,
  selectGem,
}: {
  isSelected: boolean;
  isUnusable: boolean;
  image: string;
  selectGem: () => void;
}) {
  return (
    <Box
      onClick={selectGem}
      sx={{
        position: 'relative',
        height: '200px',
        width: '200px',
        cursor: 'pointer',
      }}
    >
      <img src={image} height="200px" alt="nft" width="200px" style={{borderRadius: '14px'}} />
      {(isUnusable || isSelected) && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(9, 44, 76, 0.6)',
            height: '200px',
            width: '200px',
            display: 'grid',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography>
            {isUnusable ? 'Already used' : isSelected ? 'Selected' : null}
          </Typography>
        </Box>
      )}
    </Box>
  );
}