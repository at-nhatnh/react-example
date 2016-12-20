// import Logo from 'Logo'
var Navigation = React.createClass({displayName: "Navigation",
  render: function(){
    return(
      React.createElement("nav", {className: "navbar navbar-default"}, 
        React.createElement("div", {className: "container-fluid"}, 
          React.createElement("div", {className: "navbar-header"}, 
            React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false"}, 
              React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
              React.createElement("span", {className: "icon-bar"}), 
              React.createElement("span", {className: "icon-bar"}), 
              React.createElement("span", {className: "icon-bar"})
            )
          ), 
          React.createElement("div", {className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1"}, 
            React.createElement("ul", {className: "nav navbar-nav"}, 
              React.createElement("li", {className: "active"}, React.createElement("a", {href: "#"}, "Link ", React.createElement("span", {className: "sr-only"}, "(current)"))), 
              React.createElement("li", null, React.createElement("a", {href: "#"}, "Link")), 
              React.createElement("li", {className: "dropdown"}, 
                React.createElement("a", {href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-haspopup": "true", "aria-expanded": "false"}, "Dropdown ", React.createElement("span", {className: "caret"})), 
                React.createElement("ul", {className: "dropdown-menu"}, 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
                  React.createElement("li", {role: "separator", className: "divider"}), 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link")), 
                  React.createElement("li", {role: "separator", className: "divider"}), 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, "One more separated link"))
                )
              )
            ), 
            React.createElement("form", {className: "navbar-form navbar-left"}, 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("input", {type: "text", className: "form-control", placeholder: "Search"})
              ), 
              React.createElement("button", {type: "submit", className: "btn btn-default"}, "Submit")
            ), 
            React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
              React.createElement("li", null, React.createElement("a", {href: "#"}, "Link")), 
              React.createElement("li", {className: "dropdown"}, 
                React.createElement("a", {href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-haspopup": "true", "aria-expanded": "false"}, "Dropdown ", React.createElement("span", {className: "caret"})), 
                React.createElement("ul", {className: "dropdown-menu"}, 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
                  React.createElement("li", {role: "separator", className: "divider"}), 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link"))
                )
              )
            )
          )
        )
      )
    );
  }
});

ReactDOM.render(
  React.createElement(Navigation, null)
  ,document.getElementById('navigation')
);
//
