import {useEffect, useState} from "react";
import axios from "axios";
import {ports} from "../../utils/ports";


function BlogsApp() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.post(`${ports}/blog/list`).then(res => {
            if (typeof (res.data) === 'string')
                console.log('error: -> ', res.data);
            setPosts(res.data);
        })
    }, [])

    return (
        <div className="bg-white pt-10 pb-24 sm:pt-16 sm:pb-32">
            <div className="mx-auto max-w-8xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">文档</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        查看我们的技术文档和使用说明.
                    </p>
                    <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime} className="text-gray-500">
                                        {post.date}
                                    </time>
                                    <a className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                        {post.category}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={`/blogs/${post.id}`}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img src={post.author.imageUrl} alt="/" className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <a>
                                                <span className="absolute inset-0" />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-600">{post.author.role}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BlogsApp;
