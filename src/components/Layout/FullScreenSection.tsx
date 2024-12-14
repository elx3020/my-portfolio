import "../../styles/layoutStyles/layoutContainers.sass";


const FullScreenSection = (props: {children: any}) => {

    return (
        <section className="section-wrapper">
        <div className="container-wrapper">
          {props.children}
        </div>
      </section>
    )
}

export default FullScreenSection;