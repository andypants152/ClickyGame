import React from "react";

class Header extends React.Component {
    render() {

        return (
            <nav className="navbar navbar-dark bg-primary">
                <div className="navbar-header">
                    <h3 className="navbar-brand">Clicky Game!</h3>
                </div>
                <div>
                    <span className="navbar-text">Score: {this.props.score}</span>
                    <span className="navbar-text">| High Score: {this.props.highScore}</span>

                </div>
            </nav>
        )

    }
}

export default Header;