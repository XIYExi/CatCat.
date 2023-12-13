import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {ports} from "../../utils/ports";
import '@wangeditor/editor/dist/css/style.css';

function ArticleApp() {
    let params = useParams();

    const [article, setArticle] = useState('');

    useEffect(() => {
        const blogId = params.id;

        axios.post(`${ports}/blog/read`, {id: blogId}).then(res => setArticle(res.data.content))
    }, [])

    return (
        <div className='bg-white pt-16 pb-24 sm:pt-24 sm:pb-32'>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    <div dangerouslySetInnerHTML={{__html: article}}/>
                </div>
            </div>
        </div>
    )
}


export default ArticleApp;
