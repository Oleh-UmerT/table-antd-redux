import { types } from './types';
import { api } from '../api';

export const usersActions = Object.freeze({
    startFetching: () => {
        return {
            type: types.USERS_START_FETCHING
        };
    },
    stopFetching: () => {
        return {
            type: types.USERS_STOP_FETCHING
        };
    },
    fill: (payload) => {
        return {
            type: types.USERS_FILL,
            payload
        };
    },
    setFetchingError: (error) => {
        return {
            type: types.USERS_SET_FETCHING_ERROR,
            error: true,
            payload: error
        };
    },
    fetchAsync: () => async (dispatch) => {
        dispatch(usersActions.startFetching());

        let response = await api.users.fetch();
        if (response.status === 200) {
            const props = response.data.map((item) => ({
                key: String(item?.id),
                name: item?.name,
                email: item?.email,
                city: item?.address.city,
                suite: item?.address.suite,
                zipcode: item?.address.zipcode,
                phone: item?.phone,
                company: item?.company.name,
                catchPhrase: item?.company.catchPhrase,
                website: item?.website
            }))
            dispatch(usersActions.fill(props));
        } else {
            const error = {
                status: response.status
            };
            dispatch(usersActions.setFetchingError(error));
        }
        dispatch(usersActions.stopFetching());
    }
});