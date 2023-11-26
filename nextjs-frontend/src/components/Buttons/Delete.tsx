import { useRouter } from 'next/router';
import { pink } from '@mui/material/colors';
import { DeleteOutlined } from '@mui/icons-material';
import { GridActionsCellItem } from '@mui/x-data-grid-pro';

import { findAccessMenu } from '@/utilities/Helpers';
import { actionType } from '@/utilities/constants/application';
import { acccessComponents } from '@/utilities/constants/storeKeys';

export const DeleteButton = ({ id, key, handleClick }) => {
  const router = useRouter();
  const action = acccessComponents.CAN_DELETE_RECORD;
  const canAccess = findAccessMenu(action, router.pathname);

  return canAccess ? (
    <GridActionsCellItem
      key={key}
      label="Delete"
      icon={
        <DeleteOutlined
          sx={{
            width: 28,
            height: 28,
            color: pink[500]
          }}
        />
      }
      onClick={(_event) => handleClick({ id, type: actionType.DELETE })}
    />
  ) : (
    <></>
  );
};
