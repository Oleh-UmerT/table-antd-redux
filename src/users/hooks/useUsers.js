import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersActions } from '../actions';

export const useUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersActions.fetchAsync());

    }, [dispatch]);

    const {
        data,
        isFetching,
        error
    } = useSelector((state) => state.users);

    return {
        data,
        isFetching,
        error
    }

}