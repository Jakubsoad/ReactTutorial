import React from "react";

const Header = props => {

    const buttonStyle = {
        backgroundColor: '#b6dee3',
        border: '2px solid #326647',
        color: 'black',
        padding: '10px 16px',
        textAlign: 'center',
        fontSize: '20px',
        cursor: 'pointer',
        margin: '10px 0'
    };

    if (props.showArticles) {
        buttonStyle.backgroundColor = '#ebb0b6';
    }

    return(
        <div>
            <h1>Article app</h1>
            <button style={buttonStyle} onClick={props.toggleArticlesHandlers}>Toggle articles</button>
        </div>
    );

}

export default Header;