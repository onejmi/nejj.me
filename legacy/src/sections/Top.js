import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

export default class Top extends React.Component{

    clicked(link){
        window.location.replace(link);
    }

    /*arrow functions in the props section is bad practice, I know. 
    Performance doesn't really in my case because this is a lightweight profile page*/
    
    render(){
        return (
        <Jumbotron style={styles.jumbotron}>
            <h1>It's scarger.</h1>
            <p>Your friendly, competent, 
                creative and swift...neighbourhood developer</p>
            
            <p>
                <Button bsStyle="primary" bsSize="large"
                style={Object.assign({},{backgroundColor: "#2d2d2d"},
                    styles.linkButton)} onClick={() => {this.clicked("https://github.com/scarger");}}>
                        Github
                    </Button>
                    
                <Button bsStyle="primary" bsSize="large" 
                style={Object.assign({},{backgroundColor: "#59bfe6"},
                    styles.linkButton)} onClick={() => {this.clicked("https://twitter.com/realScarger");}}>
                    Twitter
                </Button>

                <Button bsStyle="primary" bsSize="large"
                style={Object.assign({},{backgroundColor: "#89368b"},
                    styles.linkButton)} onClick={() => {this.clicked("https://discord.gg/wV2sNfe");}}>Discord</Button>

                
            </p>
        </Jumbotron>
        );
    }
}

const styles = {
    jumbotron: {
        backgroundImage: "url(\"https://static1.squarespace.com/static/55972c7ee4b069786e8c66ae/t/55c436afe4b03e392c36bc5d/1438922429457/ButtCapper_Banner2.gif?format=2500w\")",
        height: 600,
        paddingLeft: 10
    },
    linkButton: {
        marginLeft: 3,
        marginRight: 3
    }
}
