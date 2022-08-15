import { Avatar, Checkbox, TableCell, TableRow } from '@mui/material';
import theme from '../../theme/theme';

export default function NftRow({
  isChecked,
  selectNft,
  isClaimingDialog,
  isNftsLoading,
  rowData: { image_ref, vote_account_id, rewards },
}: {
  isChecked: boolean;
  selectNft: () => void;
  isClaimingDialog: boolean;
  isNftsLoading: boolean;
  rowData: { image_ref: string; vote_account_id: string; rewards: number };
}) {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        <Checkbox
          checked={isChecked}
          onChange={selectNft}
          color="secondary"
          disabled={isClaimingDialog || isNftsLoading}
        />
      </TableCell>
      <TableCell component="th" scope="row">
        <Avatar
          src={image_ref}
          alt="ingl gem"
          sx={{ height: '75px', width: '75px' }}
        />
      </TableCell>
      <TableCell width="100%" align="left" sx={{ color: theme.common.line }}>
        {vote_account_id}
      </TableCell>
      <TableCell
        align="right"
        sx={{ color: theme.palette.secondary.main }}
      >{`${rewards}`}</TableCell>
    </TableRow>
  );
}
