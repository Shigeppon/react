var Avatar = React.createClass({
    render: function() {
        return (
            <div>
                <PagePic pagename={this.props.pagename} />
                <PageLink pagename={this.props.pagename} />
                <MyComponent results={this.props.results} />
            </div>
        );
    }
});

var PagePic = React.createClass({
    render: function() {
        return (
            <img src={'https://graph.facebook.com/' + this.props.pagename + '/picture'} />
        );
    }
});

var PageLink = React.createClass({
    render: function() {
        return (
            <a href={'https://www.facebook.com/' + this.props.pagename}>
                {this.props.pagename}
            </a>
        );
    }
});

var ListItemWrapper = React.createClass({
    render: function() {
        return <li>{this.props.data.text}</li>;
    }
});

var MyComponent = React.createClass({
    render: function() {
        return (
            <ul>
                {this.props.results.map(function(result) {
                    return <ListItemWrapper key={result.id} data={result} />;
                })}
            </ul>
        );
    }
});

var results =
[
    {"id":100, "text": "Test1"},
    {"id":200, "text": "Test2"},
]

ReactDOM.render(
    <Avatar pagename="Engineering" results={results} />,
    document.getElementById('content')
);
