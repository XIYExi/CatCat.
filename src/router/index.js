import App from "../App";
import {createBrowserRouter} from "react-router-dom";
import GenerateLayoutApp from "../app/generate/GenerateLayoutApp";
import GenerateContentApp from "../app/generate/GenerateContentApp";
import BlogsApp from "../app/blog/BlogsApp";
import ArticleApp from "../app/blog/ArticleApp";
import AuthLayoutApp from "../app/auth/AuthLayoutApp";
import LoginApp from "../app/auth/LoginApp";



const routes = [
    {
        path: '/auth',
        element: <AuthLayoutApp />,
        children: [
            {
                path: '/auth/login',
                element: <LoginApp />
            },
            {
                path: '/auth',
                element: <LoginApp />
            }
        ]
    },
    {
        path: '/blogs',
        element: <GenerateLayoutApp />,
        children: [
            {
                path: '/blogs/:id',
                element: <ArticleApp />
            },
            {
                path: '/blogs',
                element: <BlogsApp />
            }
        ]
    },
    {
        path: '/generate',
        element: <GenerateLayoutApp />,
        children: [
            {
                path: '/generate',
                element: <GenerateContentApp />
            }
        ]
    },
    {
        path: '/',
        element: <App />
    }
]


const router = createBrowserRouter(routes);

export default router;

