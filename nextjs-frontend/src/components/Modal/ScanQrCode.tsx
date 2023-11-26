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
import { buttonType, submitText } from '@/utilities/constants/application';

interface ScanQrCodeProps {
  children?: React.ReactNode;
  isOpen: boolean;
  modalValues: any;
  handleToggleModal: any;
}

export default function ScanQrCode({
  children,
  isOpen,
  modalValues,
  handleToggleModal
}: ScanQrCodeProps) {
  const { title, minHeight = 300 } = modalValues.new;

  return (
    <div>
      <Dialog
        open={isOpen}
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
        onClose={(_event) => handleToggleModal(false)}
      >
        <IconButton
          aria-label="close"
          onClick={(_event) => handleToggleModal(false)}
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
                text: submitText.CLOSE,
                type: buttonType.CANCEL,
                attribute: false,
                onClick: handleToggleModal
              }
            ]}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
