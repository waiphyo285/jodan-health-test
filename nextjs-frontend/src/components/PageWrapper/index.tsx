import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { Container, Grid } from '@mui/material';

import { AppState } from '@/redux/store';

import ShowAlertMessage from '../Stackbar';
import PageListTitle from '../PageTitle/List';
import PageTitleWrapper from '../PageTitleWrapper';

interface PageWrapperProps {
  pageValues?: any;
  createAction?: any;
  children?: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({
  children,
  pageValues,
  createAction
}) => {
  const { showAlert, severity, description } = useSelector(
    (state: AppState) => state?.alert.stackBar
  );

  const { head, title, subtitle } = pageValues;

  return (
    <>
      <Head>
        <title>
          {head} {title && ` | ${title}`}
        </title>
      </Head>

      <PageTitleWrapper>
        <PageListTitle
          title={title}
          subtitle={subtitle}
          actions={createAction}
        />
      </PageTitleWrapper>

      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          {children}
        </Grid>
      </Container>

      <ShowAlertMessage
        showAlert={showAlert}
        severity={severity}
        description={description}
      />
    </>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageWrapper;
