import { useRouter } from 'next/router';
import { EditOutlined } from '@mui/icons-material';
import { GridActionsCellItem } from '@mui/x-data-grid-pro';

import { findAccessMenu } from '@/utilities/Helpers';
import { actionType } from '@/utilities/constants/application';
import { accessComponents } from '@/utilities/constants/storeKeys';

export const EditButton = ({ id, key, handleClick }) => {
  const router = useRouter();
  const action = accessComponents.CAN_EDIT_RECORD;
  const canAccess = findAccessMenu(action, router.pathname);

  return canAccess ? (
    <GridActionsCellItem
      key={key}
      label="Edit"
      className="textPrimary"
      icon={
        <EditOutlined
          sx={{
            width: 28,
            height: 28
          }}
          color="primary"
        />
      }
      onClick={(_event) => handleClick({ id, type: actionType.EDIT })}
    />
  ) : (
    <></>
  );
};
