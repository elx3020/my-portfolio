import './style.scss';

const LoadingBlogContent = () => {

    const placholders = Array.from({ length: 10 }).map((_, index) => { return <div key={index} className="loadingAnim"></div> });

    return (
        <div className="bodyWrap">
            {placholders}

        </div>
    )
}

export default LoadingBlogContent;