import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { marked, } from 'marked';

import { useScrollContext } from '../../hooks/useScrollContext';
import "./blogStyles.scss";
import useCurrentPage from '../../hooks/useCurrentPage';
import Prism from 'prismjs';
import LoadingBlogContent from '../../components/Layout/LoadingBlogContent/LoadingBlogContent';
import { useGlobalContext } from '../../hooks/useGlobalContext';

// if you are intending to use Prism functions manually, you will need to set:

const BlogPostPage = (props: { handlePage: (value: string) => void }) => {
    const { postId } = useParams();

    const params = useSearchParams();

    const [markdownContent, setMarkdownContent] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
    const scroll = useScrollContext().scroll;
    useCurrentPage(props.handlePage);

    const globalContext = useGlobalContext();



    let postUrl = postId;

    if (globalContext.language === 'en') {
        postUrl = postId;
    } else if (globalContext.language === 'es') {
        postUrl = postId! + '-es';

    }

    useEffect(() => {
        async function getFile() {
            return await fetch(`/files/${postUrl}.md`).then((response) => {
                return response.text()
            }).catch((err) => { console.log(err) }).then(async (data) => {
                if (data) setMarkdownContent(await marked.parse(data));
                setIsLoaded(true);
                divRef.current!.innerHTML = markdownContent;
                scroll?.update();
                Prism.highlightAll();
            })
        }

        getFile();


    }, [isLoaded, globalContext.language, markdownContent]);


    return (
        <div data-scroll-section className='content-container'>
            {isLoaded ? (<div ref={divRef} className='blog-post' />) : (<LoadingBlogContent />)}
        </div>
    );
};

export default BlogPostPage;
