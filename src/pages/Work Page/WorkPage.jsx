import HeroGenericComponent from "../../components/Layout/HeroGenericComponent";
import ColumnLayout from "../../components/Layout/ColumnLayout";
import { mapToList } from "../../utils/utils";
import useLocoScroll from "../../hooks/useLocoScroll";
import CardContainer from "../../components/Layout/CardContainer";
import window1 from "../../images/WorkPage/left-window.png";
import window2 from "../../images/WorkPage/window2.png";
import window3 from "../../images/WorkPage/windows3.png";
import window4 from "../../images/WorkPage/window4.png";

import useCurrentPage from "../../hooks/useCurrentPage";

import "./style.sass";

const WorkPage = (props) => {
  const { projectsData } = props;

  useLocoScroll(true);

  const { showcase_Data, web_Proj } = projectsData;

  const webList = mapToList(web_Proj);

  // pass current Page

  useCurrentPage(props.handlePage);

  const lineFigure = (
    <svg
      width="1920"
      height="753"
      viewBox="0 0 1920 753"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-78.0621 458.296C-91.3838 472.022 -88.1245 483.184 -66.8696 481.549C-47.2226 480.038 -29.6867 468.823 -13.6835 458.296C14.051 440.054 37.8085 419.58 59.0244 393.918C95.9892 349.206 118.744 295.264 128.001 238.177C129.437 229.326 133.891 169.437 111.256 197.485C98.9518 212.732 94.4985 238.788 89.8255 257.178C79.9933 295.873 72.7116 334.874 69.6963 374.743C67.0434 409.82 70.3986 444.837 81.5829 478.252C91.0827 506.634 104.265 537.856 133.988 549.745C160.347 560.289 183.521 555.253 208.518 543.064C245.3 525.129 274.795 498.553 301.615 468.101C358.924 403.032 385.036 316.081 415.796 236.529C441.819 169.228 480.627 97.5343 543.252 57.2751C584.028 31.0618 640.28 19.0078 682.16 49.4664C727.677 82.5696 732.572 142.479 723.72 193.667C709.714 274.66 677.277 351.214 637.217 422.376C619.464 453.912 602.47 485.623 586.287 517.99C570.036 550.492 553.641 583.817 544.467 619.156C534.2 658.702 528.902 711.787 567.633 737.849C601.826 760.857 644.935 752.057 678.777 732.122C721.056 707.218 750.681 671.93 763.718 624.362C774.672 584.394 785.135 540.054 818.379 512.35C843.917 491.069 884.776 477.368 913.646 500.464C945.081 525.612 952.639 573.08 998.934 579.071C1060.85 587.084 1125.92 552.552 1165.09 506.363C1183.92 484.15 1218.61 436.634 1201.53 405.197C1186.64 377.813 1154.95 391.375 1139.75 410.229C1112.79 443.681 1119.9 482.132 1134.03 519.378C1140.45 536.323 1151.49 553.93 1165.43 565.71C1190.41 586.807 1218.62 586.346 1249.94 582.021C1302.86 574.716 1333.88 519.192 1346.94 472.352C1366.75 401.331 1361.53 326.884 1376.62 255.096C1385.88 211.035 1400.82 170.324 1426.68 133.28C1456.2 90.9863 1496 57.0713 1541.29 32.721C1603.94 -0.956009 1703.55 -21.568 1754.73 43.5665C1778.66 74.0261 1775.64 117.473 1769.05 153.322C1758.82 208.998 1740.69 264.702 1723.32 318.52C1708.08 365.743 1690.46 412.561 1679.59 461.073C1670.35 502.362 1668.5 547.808 1686.02 587.227C1700.17 619.085 1733.67 641.048 1767.23 646.92C1828.34 657.616 1888.82 634.699 1940.41 603.105C2039.95 542.14 2113.67 433.75 2130.24 317.739"
        stroke="#fff"
        stroke-linecap="round"
      />
    </svg>
  );

  return (
    <div className="work-page" data-scroll-section>
      <HeroGenericComponent
        className="generic-hero-wrapper"
        fontSize="150px"
        text="PORTFOLIO"
      >
        <div className="figure-wrapper">{lineFigure}</div>
      </HeroGenericComponent>

      <div className="work-section">
        <div className="header-workpage">
          <h1 data-scroll data-scroll-offset="200px">
            WEB DEVELOPMENT
          </h1>
          <div className="windows-wrapper">
            <div data-scroll data-scroll-speed="1.3">
              <img src={window1} alt="window" />
            </div>
            <div data-scroll data-scroll-speed="-1.2">
              <img src={window2} alt="window" />
            </div>
            <div data-scroll data-scroll-speed="1.1">
              <img src={window3} alt="window" />
            </div>
            <div data-scroll data-scroll-speed="-1.2">
              <img src={window4} alt="window" />
            </div>
          </div>
        </div>

        <h2>Live Projects</h2>
        <div className="c-wrapper">
          <CardContainer data={showcase_Data} />
        </div>
      </div>

      <div
        className="work-section black"
        data-scroll
        data-scroll-offset="200px"
      >
        <h2>Large Projects</h2>
        <ColumnLayout className="projects-wrapper">{webList}</ColumnLayout>
      </div>

      <div className="work-section">
        <h2>Mini Projects</h2>
        <ColumnLayout className="projects-wrapper">{webList}</ColumnLayout>
      </div>
    </div>
  );
};

export default WorkPage;
