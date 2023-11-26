import FormikEditForm from '../EditForm';
import FormikEntryForm from '../EntryForm';
import ModalEntryForm from '@/components/Modal/EntryForm';
import ModalConfirmForm from '@/components/Modal/ConfirmForm';

function FormModals({
  formRef,
  formFields,
  initialValues,
  actionsValues,
  modalValues,
  validationSchema,
  handleRefSubmit,
  handleFormSubmit,
  handleToggleModal,
  handleConfirmModal
}) {
  const isEntryForm =
    actionsValues?.recordId && actionsValues?.recordId === initialValues?.id;

  return (
    <div>
      {isEntryForm ? (
        <ModalEntryForm
          modalValues={modalValues.edit}
          actionsValues={actionsValues}
          handleToggleModal={handleToggleModal}
          handleRefSubmit={handleRefSubmit}
        >
          <FormikEditForm
            innerRef={formRef}
            formFields={formFields}
            initialValues={initialValues}
            validationSchema={validationSchema}
            handleFormSubmit={handleFormSubmit}
          />
        </ModalEntryForm>
      ) : (
        <ModalEntryForm
          modalValues={modalValues.new}
          actionsValues={actionsValues}
          handleToggleModal={handleToggleModal}
          handleRefSubmit={handleRefSubmit}
        >
          <FormikEntryForm
            innerRef={formRef}
            formFields={formFields}
            initialValues={initialValues}
            validationSchema={validationSchema}
            handleFormSubmit={handleFormSubmit}
          />
        </ModalEntryForm>
      )}
      <ModalConfirmForm
        actionsValues={actionsValues}
        modalValues={modalValues.confirm}
        handleToggleModal={handleToggleModal}
        handleConfirmModal={handleConfirmModal}
      />
    </div>
  );
}

export default FormModals;
