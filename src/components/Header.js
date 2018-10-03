import React from "react";
import background from "../images/background.jpg"

const headerStyle = {
    backgroundImage: `url(${background})`,
    "minHeight": 400,
    "textAlign": "center"

}

class Header extends React.Component {
    render() {

        return (
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <div className="navbar-header">
                        <h3 className="navbar-brand">Clicky Game!</h3>
                    </div>
                    <div>
                        <span className="navbar-text">Score: {this.props.score}</span>
                        <span className="navbar-text">| High Score: {this.props.highScore}</span>

                    </div>
                </nav>
                <header style={headerStyle} className="jumbotron jumbotron-fluid text-white">
                    <h1>Clicky Game</h1>
                    <h3>Click on an dog to win points, but don't click the same one twice!</h3>
                </header>
            </div>
        )

    }
}

export default Header;