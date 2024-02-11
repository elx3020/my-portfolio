import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { marked, } from 'marked';

import { useScrollContext } from '../../hooks/useScrollContext';
import "./blogStyles.scss";
import useCurrentPage from '../../hooks/useCurrentPage';
import Prism from 'prismjs';

// if you are intending to use Prism functions manually, you will need to set:

const BlogPostPage = (props: { handlePage: (value: string) => void }) => {
    const { postId } = useParams();
    const [markdownContent, setMarkdownContent] = useState('');
    const postContainerRef = useRef<HTMLDivElement>(null);
    const containertwo = useRef<HTMLDivElement>(null);
    const scroll = useScrollContext().scroll;
    useCurrentPage(props.handlePage);


    useEffect(() => {
        async function getFile() {
            return await fetch(`/files/${postId}.md`).then((response) => {
                return response.text()
            }).catch((err) => { console.log(err) }).then(async (data) => {
                if (data) setMarkdownContent(await marked.parse(data));
                scroll?.update();
                Prism.highlightAll();
                return data
            })
        }

        getFile();
        containertwo.current!.innerHTML = markdownContent;


    }, [markdownContent, postId]);


    return (
        <div data-scroll-section className='content-container'>

            <div ref={postContainerRef}></div>
            <div ref={containertwo} ></div>
        </div>
    );
};

export default BlogPostPage;
