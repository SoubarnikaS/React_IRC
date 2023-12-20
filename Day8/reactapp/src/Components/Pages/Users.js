import React from 'react'
import { useState } from 'react'
import { getUser } from '../../Sevices/Api'
import { getUserid } from '../../Sevices/Api'
import { deleteUser } from '../../Sevices/Api'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Users = () => {

    const navigate = useNavigate();

    const handleAdd = () => {
        navigate('/add')
    }

    const [user, setUser] = useState([])

    const fetchData = async () => {

        try {
            const res = await getUser()
            console.log(res.data)
            setUser(res.data)
        }
        catch (e) {
            console.log(e)
        }
    }

    const handleDelete = async (id) => {
        try {
            const res = await deleteUser(id)
            if (res.status === 200) {
                alert('deleted')
            }
            fetchData()
        }
        catch (e) {
            console.log(e)
        }
    }

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }
    console.log(user)
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>
                            Username
                        </th>
                        <th>
                            Password
                        </th>
                        <th>
                            Add
                        </th>
                        <th>
                            Edit
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((user) => (

                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>
                                    <button onClick={() => handleAdd()} className='edit'>Add</button>
                                </td>
                                <td>
                                    <button className='edit' onClick={() => handleEdit(user.id)}>Edit</button>
                                </td>
                                <td>
                                    <button className='del' onClick={() => handleDelete(user.id)} >Delete</button>
                                </td>
                            </tr>

                        ))

                    }

                </tbody>
            </table>
        </>
    )
}

export default Users