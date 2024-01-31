import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { marked, } from 'marked';

import BlogPostData from '../../data/blog_Post_data.json';
import { useScrollContext } from '../../hooks/useScrollContext';
import "./blogStyles.scss";
import useCurrentPage from '../../hooks/useCurrentPage';
const BlogPostPage = (props: { handlePage: (value: string) => void }) => {
    const { postId } = useParams();
    const [markdownContent, setMarkdownContent] = useState('');
    const postContainerRef = useRef<HTMLDivElement>(null);
    const containertwo = useRef<HTMLDivElement>(null);
    const scroll = useScrollContext().scroll;
    useCurrentPage(props.handlePage);


    useEffect(() => { 
        async function renderPostContent(postContent: string) {
            postContainerRef.current!.innerHTML = await marked.parse(postContent)
            setTimeout(() => {
            scroll.update();

             }, 1000);

        }
        if (postId === undefined) return;
        
        const post = BlogPostData.blogPosts[postId]?.content as string;
        renderPostContent(post);


        
    }, [postId]);

    useEffect(() => { 
        async function getFile() {
            return await fetch('/files/ReadFileNodeJs.md').then((response) => { 
                console.log(response)
               return response.text()
            }).catch((err) => { console.log(err) }).then(async (data) => { if(data) setMarkdownContent(await marked.parse(data)); return data })
        }

        getFile();
        containertwo.current!.innerHTML = markdownContent;

    }, [markdownContent]);


    return (
        <div data-scroll-section className='content-container'>
          
            <div ref={postContainerRef}></div>
            <div ref={containertwo} ></div>
        </div>
    );
};

export default BlogPostPage;
