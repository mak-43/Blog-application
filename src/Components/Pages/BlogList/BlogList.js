import React, { useEffect, useState } from 'react';

const BlogList = () => {
    const [blog,setBlog]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBlog(blog))
    },[])
    return (
        <div>
            <h1>Blog List Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores neque, qui cum nisi odit unde non eum distinctio veniam!</p>

        </div>
    );
};

export default BlogList;