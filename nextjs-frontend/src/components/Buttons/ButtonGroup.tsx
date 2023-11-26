import { Button } from '@mui/material';
import { CheckOutlined } from '@mui/icons-material';
import { buttonType } from '@/utilities/constants/application';

export const ButtonGroup = ({ buttonList }) => {
  return (
    <>
      {buttonList.map(
        (
          { text, type, startIcon, attribute, onClick: handleClick }: any,
          index: number
        ) => {
          switch (type) {
            case buttonType.CANCEL:
              return (
                <Button
                  key={index}
                  variant="text"
                  onClick={(_event) => handleClick(attribute)}
                  // startIcon={<CancelOutlined fontSize="small" />}
                >
                  {text}
                </Button>
              );

            case buttonType.PERMIT:
              return (
                <Button
                  key={index}
                  variant="contained"
                  onClick={(_event) => handleClick(attribute)}
                  startIcon={startIcon || <CheckOutlined fontSize="small" />}
                >
                  {text}
                </Button>
              );

            default:
              return <></>;
          }
        }
      )}
    </>
  );
};
