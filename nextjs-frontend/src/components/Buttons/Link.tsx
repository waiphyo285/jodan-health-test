import Link from 'next/link';
import { Button } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

export const LinkButton = ({ href, color, variant, linkText }) => {
  return (
    <Link href={href}>
      <Button
        color={color}
        variant={variant}
        sx={{ mt: { xs: 2, md: 0 } }}
        startIcon={<AddOutlined fontSize="small" />}
      >
        {linkText}
      </Button>
    </Link>
  );
};

export default LinkButton;
