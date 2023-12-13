import App from "../App";
import {createBrowserRouter} from "react-router-dom";
import GenerateLayoutApp from "../app/generate/GenerateLayoutApp";
import GenerateContentApp from "../app/generate/GenerateContentApp";
import BlogsApp from "../app/blog/BlogsApp";
import ArticleApp from "../app/blog/ArticleApp";
import AuthLayoutApp from "../app/auth/AuthLayoutApp";
import LoginApp from "../app/auth/LoginApp";
import RegisterApp from "../app/auth/RegisterApp";
import AdminLayoutApp from "../app/admin/AdminLayoutApp";
import AdminEditorApp from "../app/admin/AdminEditorApp";
import AdminMessageApp from "../app/admin/AdminMessageApp";



const routes = [
    {
        path: '/admin',
        element: <AdminLayoutApp />,
        children: [
            {
                path: '/admin/message',
                element: <AdminMessageApp />
            },
            {
                path: '/admin/editor',
                element: <AdminEditorApp/>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayoutApp />,
        children: [
            {
                path: '/auth/register',
                element: <RegisterApp />
            },
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

