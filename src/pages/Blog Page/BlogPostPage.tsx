import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { marked, use, } from 'marked';

import "./blogStyles.scss";
import useCurrentPage from '../../hooks/useCurrentPage';
import Prism from 'prismjs';
import LoadingBlogContent from '../../components/Layout/LoadingBlogContent/LoadingBlogContent';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import browserDetect from 'browser-detect';
import PageIndex from './PageIndex';

// if you are intending to use Prism functions manually, you will need to set:

const BlogPostPage = (props: { handlePage: (value: string) => void }) => {

    const { postId } = useParams();
    const [markdownContent, setMarkdownContent] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [indices, setIndices] = useState<string[]>([]);
    const divRef = useRef<HTMLDivElement>(null);
    useCurrentPage(props.handlePage);

    const globalContext = useGlobalContext();
    const result = browserDetect()

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
                Prism.highlightAll();
                // generate indices
                const ids: string[] = [];
                divRef.current!.querySelectorAll('div').forEach((divEl) => {
                    const id = divEl.id;
                    ids.push(id);
                });
                setIndices([...ids]);
            })
        }
        getFile();
    }, [isLoaded, globalContext.language]);


    const mobileLayout = (<article className='page-content stretch'>
        {isLoaded ? (<div ref={divRef} className='blog-post' />) : (<LoadingBlogContent />)}
    </article>)

    const desktopLayout = (<article className='page-content blog' style={{ minHeight: '150vh' }}>
        {isLoaded ? (<div><PageIndex ids={indices} />
            <div style={{ marginLeft: '320px', maxWidth: '900px', padding: '25px' }}>
                <div ref={divRef} className='blog-post' />
            </div></div>) : (<LoadingBlogContent />)}
    </article>);

    const page = result.mobile ? mobileLayout : desktopLayout;

    return (page);
};

export default BlogPostPage;
