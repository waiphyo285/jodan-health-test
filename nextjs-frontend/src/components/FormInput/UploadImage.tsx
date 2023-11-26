import Image from 'next/image';
import React, { ReactNode, useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

import { dataURLtoBlob, readFileAsDataURL } from '@/utilities/Helpers';
import CommonService from '@/services/general/Common';
import { useFormikContext } from 'formik';

const CustomizedUpload = ({ name }) => {
  const [_file, setFile] = useState(null);
  const { values, setFieldValue } = useFormikContext();

  const handleChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    handleUpload(selectedFile);
  };

  const handleUpload = async (file: any) => {
    if (file instanceof File) {
      const formData = new FormData();

      try {
        const dataUrl: any = await readFileAsDataURL(file);
        const blob: any = await dataURLtoBlob(dataUrl);

        formData.append('file', blob, file.name);

        const uploadFile = await CommonService.createOne(
          '/upload/file',
          formData,
          null
        );

        setFieldValue(name, uploadFile);
      } catch (error) {
        console.error('🍒 File error ', error);
      }
    }
  };

  return (
    <div>
      {values?.[name] ? (
        <Box sx={{ mb: 2, p: 2, border: '1px solid #ccc' }}>
          <Image src={values?.[name]} alt="Uploaded" width={180} height={180} />
        </Box>
      ) : (
        <></>
      )}

      <input
        type="file"
        accept="image/*"
        id="file-upload-input"
        style={{ display: 'none' }}
        onChange={handleChange}
      />

      <label htmlFor="file-upload-input">
        <Button
          variant="outlined"
          color="primary"
          component="span"
          fullWidth={true}
          startIcon={<CloudUpload />}
        >
          Upload file
        </Button>
      </label>
    </div>
  );
};

export const MyUploadField = ({ key, name, xsGrid = 12 }) => {
  return {
    carve(): ReactNode {
      return (
        <Grid item xs={xsGrid} key={key}>
          <CustomizedUpload name={name} />
        </Grid>
      );
    }
  };
};
