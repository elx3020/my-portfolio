const fullPage = {
  width: "100%",
  height: "113vh",
  marginTop: "13vh",
};

const quickContainer = (maxWidth) => {
  if (maxWidth === undefined) {
    return { margin: "auto", maxWidth: "65%" };
  } else {
    return { margin: "auto", maxWidth: maxWidth };
  }
};

export { fullPage, quickContainer };
