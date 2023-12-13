import React, {useState, useEffect, useCallback} from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import '@wangeditor/editor/dist/css/style.css'
import axios from "axios";
import {ports} from "../../utils/ports";
import {inject, observer} from "mobx-react";
import Input from "../component/Input";


function AdminEditorApp(props) {

    const [editor, setEditor] = useState(null)
    const [html, setHtml] = useState('')

    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [cateError, setCateError] = useState('');
    const [descError, setDescError] = useState('');

    const toolbarConfig = { }

    const editorConfig = {
        placeholder: '请输入内容...',
    }

    const {userStore} = props;

    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    const handleSubmit = () => {


        if (title.length === 0) {
            setTitleError('标题不能为空！');
            if (category.length === 0)
                setCateError('分类不要为空！！');
            if (description.length === 0)
                setDescError('描述不要 为 空 ！！！');
            return;
        }

        if (html.length === 0 || html === ''){
            console.log('你小子，起码输入一个字符吧？！');
            return;
        }

        axios.post(`${ports}/blog/add`, {
            id: userStore.userId, // TODO改成user.id
            blog: {
                title: title,
                description: description,
                category: category,
            },
            article: html,
        }).then(res => {
            const {data} = res;

            if (data === 'author'){
                console.log('作者信息错误');
                return;
            }
            if (data === 'error'){
                console.log('文章创建失败');
                return;
            }
            console.log('创建成功');
        })
    }

    return  (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">文章编辑器</h1>
                </div>
            </header>
            <main>
                <div className="mx-auto container py-6 sm:px-6 lg:px-8">

                    <div className='grid grid-cols-2 gap-x-10'>
                        <div className=''>
                            <Input
                                type='text'
                                value={title}
                                setValue={e => setTitle(e.target.value)}
                                placeholder={"标题"}
                                label='标题'
                                error={titleError}
                            />
                        </div>
                        <div className=''>
                            <Input
                                type='text'
                                value={category}
                                setValue={e => setCategory(e.target.value)}
                                placeholder={"分类"}
                                label='分类'
                                error={cateError}
                            />
                        </div>
                    </div>
                    <div className='w-full'>
                        <Input
                            type='text'
                            value={description}
                            setValue={e => setDescription(e.target.value)}
                            placeholder={"描述"}
                            label='描述'
                            error={descError}
                        />
                    </div>


                    <div style={{ border: '1px solid #ccc', zIndex: 100}}>
                        <Toolbar
                            editor={editor}
                            defaultConfig={toolbarConfig}
                            mode="default"
                            style={{ borderBottom: '1px solid #ccc' }}
                        />
                        <Editor
                            defaultConfig={editorConfig}
                            value={html}
                            onCreated={setEditor}
                            onChange={editor => setHtml(editor.getHtml())}
                            mode="default"
                            style={{ height: '500px', overflowY: 'hidden' }}
                        />
                    </div>
                    <div className='w-full flex justify-end mt-4'>
                        <button className="px-8 py-2 border rounded" style={{borderRadius: '8px'}} onClick={handleSubmit}>发布</button>
                    </div>

                </div>
            </main>
        </>
    )
}


export default inject('userStore')(observer(AdminEditorApp));
