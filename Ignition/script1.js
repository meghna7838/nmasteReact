//React code
// const h= React.createElement("h1",{},"Hello World from React!!");
// const r = ReactDOM.createRoot(document.getElementById("root"));
// r.render(h);
//JS equivalent code
/**const h= document.createElement("h1");
h.innerHTML = "HelloWorld from JS!!";
const r = document.getElementById("root");
r.appendChild(h);**/

//Nested Elements
//<div id=parent><div id = child><h1 id =h1></h1></div></div>

//Attempt 1 wrong attempt 
// const parent = React.createElement("div",{id:"parent"},"Parent");
// const child = React.createElement("div",{id:"child"},"Child");
// const h1 = React.createElement("h1",{id:"h1"},"H1");

// const root = ReactDOM.createRoot("root");
// root.render(parent);

// const rootP = ReactDOM.createRoot("parent");
// rootP.render(child);

// const rootC = ReactDOM.createRoot("child");
// rootP.render(h1);

//Right way of doing nesting 
/*const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        React.createElement("h1",{},"I am H1 Tag")
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/

//What to do if we want to create sibling h1 and h2 in same way from React

const parent = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child"},
            [ 
                React.createElement("h1",{},"I am H1 Tag"),
                React.createElement("h2",{},"I am H2 Tag")
            ],
        React.createElement("div",{id:"child2"},
            [
                React.createElement("h1",{},"I am H1 Tag"),
                React.createElement("h2",{},"I am h2 Tag")
            ]
        )
    
    )
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);