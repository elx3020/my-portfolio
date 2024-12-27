
export default function DropDown(props: { title: string, children: JSX.Element[] }) {
    const { title, children } = props;
    return (<div className="dropdown">
        <button className="dropbtn">{title}</button>
        <div className="dropdown-content">
            {children}
        </div>
    </div>
    )
}
