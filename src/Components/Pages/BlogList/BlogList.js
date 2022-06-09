import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../../Shared/Modal';

const BlogList = () => {
    const [blog, setBlog] = useState([])
    const [m,setM]=useState(null)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    return (
        <div className='my-10 '>
             <p className='text-2xl '>Blogs List Page</p>
            <h1 className='my-2'>Total Blogs: {blog.length}</h1>
           
            <table class="table w-full mx-auto my-3 ">
                <thead>
                    <tr>

                        <th scope="col">SL</th>
                        <th scope="col">Title</th>
                        <th scope="col">Content</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>

                {
                    blog.map((p,index) =>

                        <tbody key={index}>
                            <tr>
                                <td >{index+1} </td>
                                <td className='hover:'>{p.title} </td>
                                <td title={p.content.length > 15 ? p.content : ''}>{p.content.length > 15 ? p.content.slice(0, 15) + '...' : p.content}</td>
                                <td>{p.date}</td>
                            </tr>
                        </tbody>

                    )
                }

            </table>
            <label onClick={()=>setM(true)} for="my-modal-6" class="btn modal-button ">Add new post</label>
            {
                m && <Modal setM={setM} />
            }
        </div>
    );
};

export default BlogList;