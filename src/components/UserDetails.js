import { Table } from "antd";
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function UsersDetails() {
    const { id } = useParams();
    const [details, setDetails] = useState()
    const [user, setUser] = useState()
    const { data } = useSelector((state) => state.users);

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
            setUser(props.filter(item => item.key === id))
            const detailsOfUser = data.map((item) => ({
                key: String(item?.id),
                company: item?.company.name,
                catchPhrase: item?.company.catchPhrase,
                website: item?.website
            }))
            setDetails(detailsOfUser.filter(item => item.key === id))
        }
    }, [data, id])

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

    return (
        <>
            <Table columns={columnsUser} dataSource={user} pagination={false} />
            <hr />
            <h2>Details</h2>
            <Table columns={columnDetails} dataSource={details} pagination={false} />
        </>
    )
}