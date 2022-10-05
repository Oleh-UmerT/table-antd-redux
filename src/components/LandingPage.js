import { useUsers } from '../users/hooks/useUsers'
import { Table } from "antd";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    const { data, isFetching, error } = useUsers()
    const [users, setUsers] = useState()

    useEffect(() => {
        if (data) {
            const props = data.map((item) => ({
                key: String(item?.id),
                name: item?.name,
                email: item?.email,
                city: item?.address.city,
                suite: item?.address.suite,
                zipcode: item?.address.zipcode,
                phone: item?.phone
            }))
            setUsers(props)
        }
    }, [data])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 10
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
            width: 15,
        },
        {
            title: 'city',
            dataIndex: 'city',
            key: 'city',
            width: 10
        },
        {
            title: 'suite',
            dataIndex: 'suite',
            key: 'suite',
            width: 10,
        },
        {
            title: 'zipcode',
            dataIndex: 'zipcode',
            key: 'zipcode',
            width: 10,
        },
        {
            title: 'phone',
            dataIndex: 'phone',
            key: 'phone',
            width: 20,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 10,
            render: (item) => <Link to={`/${item.key}`}>View Details</Link>,
        },

    ];

    if (isFetching) {
        return (
            <div>
                <h1>Loading</h1>
            </div>
        )
    }

    if (error) {
        console.error(error)
    }


    return (
        <div>
            <Table columns={columns} dataSource={users} pagination={false} />
        </div>
    )
}