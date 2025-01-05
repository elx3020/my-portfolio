import './style.scss';

export default function CardImage(props: { data: ProjectDataT }) {
    const { description, project_Name, image_Url, project_url } = props.data;
    return (<div className='card-image'>
        <div className='back'></div>
        <div className='content'>
            <div>
                <a href={project_url}>
                    <img src={image_Url} alt={image_Url} />
                </a>
            </div>
            <div className='text'>
                <p>• {project_Name} •</p>
                <p style={{ fontWeight: 'lighter', fontSize: '16px' }}>{description}</p>
            </div>
        </div>
    </div>
    )
}
