import * as React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

import { ButtonGroup } from '../Buttons';
import { buttonType } from '@/utilities/constants/application';

interface ModalEntryProps {
  children?: React.ReactNode;
  modalValues: any;
  actionsValues: any;
  handleRefSubmit: any;
  handleToggleModal: any;
}

export default function ModalEntryForm({
  children,
  modalValues,
  actionsValues,
  handleRefSubmit,
  handleToggleModal
}: ModalEntryProps) {
  const open = actionsValues.openEntryModal;
  const {
    title,
    saveText,
    updateText,
    cancelText,
    minHeight = 300
  } = modalValues;

  return (
    <div>
      <Dialog
        open={open}
        maxWidth="md"
        scroll={'paper'}
        sx={{
          '& .MuiIconButton-root': {
            position: 'absolute',
            top: '8px',
            right: '8px'
          }
        }}
        fullWidth
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        onClose={(_event) => handleToggleModal({ openEntryModal: false })}
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
          id="scroll-dialog-title"
        >
          {title || 'Untitled'}
        </DialogTitle>
        <DialogContent dividers={true} sx={{ minHeight }}>
          {children}
        </DialogContent>
        <DialogActions>
          <ButtonGroup
            buttonList={[
              {
                text: cancelText,
                type: buttonType.CANCEL,
                attribute: { openEntryModal: false },
                onClick: handleToggleModal
              },
              {
                text: saveText || updateText,
                type: buttonType.PERMIT,
                attribute: {},
                onClick: handleRefSubmit
              }
            ]}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
