import ListItem from "../components/List/ListItem";

function ProjectDetails(arrayId, id) {
  let arr = arrayId.filter((item) => item.id === id);
  return arr[0];
}

function mapToList(array) {
  const htmlElemt = array.map((item) => {
    return (
      <ListItem
        key={item.id}
        description={item.description}
        projectId={item.id}
        arrId={item.arr_Id}
        project_url={item.project_url}
        project_Name={item.project_Name}
      />
    );
  });
  return htmlElemt;
}

function addClass(className, classtoAdd, state, setState) {
  // check input
  if (!className instanceof Array) {
    console.error(
      "The function required a className parameter the type Array[string]"
    );
    return;
  }
  const elements = className.map((item) => {
    if (typeof item !== "string") {
      console.error(
        "The function required a className parameter the type Array[string]"
      );
      return null;
    } else {
      return document.querySelector(`.${item}`);
    }
  });

  // elements.forEach((element) => {
  //   if (!state) {
  //     element.classList.add(classtoAdd);
  //     setState((prev) => (prev = !prev));
  //   }
  // });

  for (let i = 0; i < elements.length; i++) {
    if (!state) {
      elements[i].classList.add(classtoAdd);
      setState(true);
    } else {
      elements[i].classList.remove(classtoAdd);
      setState(false);
    }
  }
}

// Vector Class
function Vector2(x, y) {
  this.x = x;
  this.y = y;

  this.add = function (vector) {
    const x = this.x + vector.x;
    const y = this.y + vector.y;
    return new Vector2(x, y);
  };
  this.rest = function (vector) {
    const x = this.x - vector.x;
    const y = this.y - vector.y;
    return new Vector2(x, y);
  };
  this.dot = function (vector) {
    const x = this.x * vector.x;
    const y = this.y * vector.y;
    return x + y;
  };

  this.scale = function (number) {
    this.x = this.x * number;
    this.y = this.y * number;
  };
  this.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };

  this.normalized = function () {
    return new Vector2(this.x / this.length(), this.y / this.length());
  };

  this.isEqual = function (vector) {
    if (this.x === vector.x && this.y === vector.y) {
      return true;
    }
    return false;
  };
}

function DrawLine(ctx, x, y, lenx, leny, color) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(lenx, leny);
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.closePath();
}

export { ProjectDetails, mapToList, addClass, Vector2, DrawLine };
