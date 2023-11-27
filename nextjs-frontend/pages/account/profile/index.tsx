import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { Grid } from '@mui/material';

import PageWrapper from '@/components/PageWrapper';
import SidebarLayout from '@/layouts/SidebarLayout';

import { AppState, store } from '@/redux/store';
import { getOneData } from '@/redux/entry/common.slice';

import { getCurrentUser } from '@/utilities/Getters';

import ProfileCover from '@/contents/Account/User/ProfileCard';
import UserActivity from '@/contents/Account/User/Activity';

import generateValues from '@/initialValues/pages/Profile';

function UserProfile() {
  const storeKey = generateValues.makeStoreKey();
  const endPoint = generateValues.makeEndPoint();
  const pageValues = generateValues.makePageValues();

  const { initialValues: currentUser } = useSelector(
    (state: AppState) => state?.commonEntry?.formData
  );

  const memoizedUser = useCallback(
    () =>
      store?.dispatch(
        getOneData({
          url: endPoint.default,
          id: getCurrentUser()?.id,
          storeKey: storeKey
        })
      ),
    [store?.dispatch]
  );

  useEffect(() => memoizedUser(), [memoizedUser]);
  return (
    <PageWrapper pageValues={pageValues} createAction={<></>}>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <ProfileCover user={currentUser} />
          </Grid>
          <Grid item xs={12} md={4}>
            <UserActivity user={currentUser} />
          </Grid>
        </Grid>
      </Grid>
    </PageWrapper>
  );
}

UserProfile.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default UserProfile;
