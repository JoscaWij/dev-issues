import { createElement } from "../utils/elements";

function Results(props) {
  const listItems = [];
  props.values.forEach((value) => {
    const li = createElement("li", { innerText: value.title });
    listItems.push(createElement("a", { href: value.url }, [li]));
  });

  const list = createElement("ul", {}, listItems);
  return list;
}

export default Results;
