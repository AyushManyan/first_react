// react element is normal javascript object
const heading = React.createElement("h1", {
    id: "heading",  //this is attribute is called props
}, "Hello World from react");

// console.log(heading);

// render the element in the dom is done by react-dom libaray
const root = ReactDOM.createRoot(document.getElementById("root"));

// display the element on browser
// if we have already element in the dom then it will replace the element
// root.render(heading);



// nested element

// html structured
// div
//     div
//         h1


// const parent = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child1"},
//         React.createElement("h1",{},"I am in h1 tag")
//     ),
// )

// root.render(parent);
// console.log(parent);



// siblings element

// html structured
{/* <div>
    <div>
        <h1>h1</h1>
        <h2>h2</h2>
    </div>
</div> */}


// for siblings element we have to use array of element
// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child1" },
//         [
//             React.createElement("h1", {}, "I am in h1 tag"),
//             React.createElement("h2", {}, "I am in h2 tag")
//         ]
//     ),
// )

// root.render(parent);
// console.log(parent);



// this kind of  structured in recat

{/* <div>
    <div>
        <h1></h1>
        <h2></h2>
    </div>
    <div>
        <h1></h1>
        <h2></h2>
    </div>
</div> */}

const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child1" },
            [
                React.createElement("h1", {}, "I am first h1 tag"),
                React.createElement("h2", {}, "I am first h2 tag")
            ]
        ),
        React.createElement("div", { id: "child2" },
            [
                React.createElement("h1", {}, "I am second h1 tag"),
                React.createElement("h2", {}, "I am second h2 tag")
            ]
        ),
    ]
)


// for this type of structured we have to use jsx code
root.render(parent);
console.log(parent);