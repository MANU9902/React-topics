const heading = React.createElement("h1", { id: "heading" }, "Hello");

const parent = React.createElement("div", { id: "parent" }, "", [
  React.createElement("div", { id: "child" }, "", [
    React.createElement("h1", {}, "Hello this is h1 tag"),
    React.createElement("h1", {}, "Hello this is h2 tag"),
  ]),
  React.createElement("div", { id: "child1" }, "", [
    React.createElement("h1", {}, "Hello this is h3 tag"),
    React.createElement("h1", {}, "Hello this is h4 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log(parent);
