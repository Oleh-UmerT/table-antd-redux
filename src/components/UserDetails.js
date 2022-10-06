import { Table } from "antd";
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const columnDetails = [
    {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
        width: 10
    },
    {
        title: 'CatchPhrase',
        dataIndex: 'catchPhrase',
        key: 'catchPhrase',
        width: 15,
    },
    {
        title: 'Website',
        dataIndex: 'website',
        key: 'website',
        width: 10
    }

];

const columnsUser = [
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

];

export default function UsersDetails() {
    const { id } = useParams();
    const [user, setUser] = useState()
    const { data } = useSelector((state) => state.users);

    useEffect(() => {
        setUser(data.filter(item => item.key === id))
    }, [data, id])

    return (
        <>
            <Table columns={columnsUser} dataSource={user} pagination={false} />
            <hr />
            <h2>Details</h2>
            <Table columns={columnDetails} dataSource={user} pagination={false} />
        </>
    )
}