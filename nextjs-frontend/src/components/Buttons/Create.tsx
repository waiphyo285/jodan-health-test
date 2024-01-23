import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { findAccessMenu } from '@/utilities/Helpers';
import { accessComponents } from '@/utilities/constants/storeKeys';

export const AddButton = ({ color, variant, handleClick, buttonText }) => {
  const router = useRouter();
  const action = accessComponents.CAN_CREATE_RECORD;
  const canAccess = findAccessMenu(action, router.pathname);

  return canAccess ? (
    <Button
      color={color}
      variant={variant}
      sx={{ mt: { xs: 2, md: 0 } }}
      onClick={(_event) =>
        handleClick({
          recordId: '',
          openEntryModal: true
        })
      }
      startIcon={<AddOutlined fontSize="small" />}
    >
      {buttonText}
    </Button>
  ) : (
    <></>
  );
};
