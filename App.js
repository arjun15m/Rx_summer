// Ensure React and ReactDOM are imported
const parent = React.createElement("div", {id: "parent"},
    React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {}, "i am h1 tag"), 
        React.createElement("h2", {}, "make array for siblings")
        ]
    )
);

//if >1 child , give in array

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//react elem are object , while rendering to dom , it conv to html tags