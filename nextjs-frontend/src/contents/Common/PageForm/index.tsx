import { Stack } from '@mui/material';
import { ButtonGroup } from '@/components/Buttons';
import { buttonType } from '@/utilities/constants/application';

import FormikEditForm from '../EditForm';
import FormikEntryForm from '../EntryForm';

function FormPages({
  formRef,
  formFields,
  pageValues,
  initialValues,
  validationSchema,
  handleFormSubmit
}) {
  const handleRefSubmit = () => {
    // don't remove this output meanwhile development!
    console.error('🍒 Fromik error ', formRef?.current?.errors);

    formRef && formRef?.current?.handleSubmit();
  };

  return (
    <>
      {initialValues?.id ? (
        <FormikEditForm
          innerRef={formRef}
          formFields={formFields}
          initialValues={initialValues}
          validationSchema={validationSchema}
          handleFormSubmit={handleFormSubmit}
        />
      ) : (
        <FormikEntryForm
          innerRef={formRef}
          formFields={formFields}
          initialValues={initialValues}
          validationSchema={validationSchema}
          handleFormSubmit={handleFormSubmit}
        />
      )}

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '-26px',
          marginTop: '16px'
        }}
      >
        <Stack direction="row" spacing={1}>
          <ButtonGroup
            buttonList={[
              {
                text: pageValues.saveText,
                type: buttonType.PERMIT,
                onClick: handleRefSubmit,
                attribute: {}
              }
            ]}
          />
        </Stack>
      </div>
    </>
  );
}

export default FormPages;
