import * as React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton
} from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

import { ButtonGroup } from '../Buttons';
import { buttonType } from '@/utilities/constants/application';

export default function ModalConfirmForm({
  modalValues,
  actionsValues,
  handleToggleModal,
  handleConfirmModal
}) {
  const open = actionsValues.openConfirmAlert;
  const { title, message, confirmText, cancelText } = modalValues;

  return (
    <div>
      <Dialog
        open={open}
        sx={{
          '& .MuiIconButton-root': {
            position: 'absolute',
            top: '8px',
            right: '8px'
          }
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-message"
        onClose={(_event) => handleToggleModal({ openConfirmAlert: false })}
      >
        <IconButton
          aria-label="close"
          onClick={(_event) => handleToggleModal({ openEntryModal: false })}
        >
          <CloseOutlined />
        </IconButton>
        <DialogTitle
          sx={{
            fontSize: '20px',
            fontWeight: 'bold'
          }}
          id="alert-dialog-title"
        >
          {title || 'Untitled'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-message">
            {message || 'Message not found!'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonGroup
            buttonList={[
              {
                text: cancelText,
                type: buttonType.CANCEL,
                attribute: { openConfirmAlert: false },
                onClick: handleToggleModal
              },
              {
                text: confirmText,
                type: buttonType.PERMIT,
                attribute: { doAction: true },
                onClick: handleConfirmModal
              }
            ]}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
