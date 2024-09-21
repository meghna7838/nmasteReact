//React code
const h= React.createElement("h1",{},"Hello World from React!!");
const r = ReactDOM.createRoot(document.getElementById("root"));
r.render(h);
//JS equivalent code
/**const h= document.createElement("h1");
h.innerHTML = "HelloWorld from JS!!";
const r = document.getElementById("root");
r.appendChild(h);**/