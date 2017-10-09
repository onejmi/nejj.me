import React from 'react';
import {Jumbotron, Media, Fade} from 'react-bootstrap';

export default class About extends React.Component{

    constructor(){
        super();
        this.state = {visible: false};
    }

    componentDidMount(){
        document.addEventListener('scroll',() => {
            if(window.pageYOffset > 500){
                this.setState({visible: true});
            }
        });
    }

    render(){
        const imageLink = 
        "https://www.gravatar.com/avatar/d6ff631c47e6e993584c88b83256cef4?s=400";
        return (
            
            <div style={styles.container}>
                <Fade in={this.state.visible} timeout={1000}>
                    <Media>
                        <Media.Left>
                            <img style={styles.image}
                            width={400} height={400} src={imageLink} alt="Image"/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading style={styles.title}>About me</Media.Heading>
                            <p style={styles.description}>
                                I'm an enthusiastic & ready developer, who's always up for a challange. 
                                I was first introduced to computer science in 2013, where I was thourughly 
                                tought JavaScript. I then ventured on to other technologies, resulting in my proficiency in multiple
                                demanded languages and libraries, such as Java, PHP, ES6/ES7, C#, SQL, Web, React, Android, Spigot and many, many others.
                                I currently do not have a point of focus, as I'm always willing to work with and establish every 
                                sector of an application. When I'm free; and not hacking away, I do enjoy playing soccer, as well as long hikes up north.
                            </p>
                            <p style={styles.description}>
                                Email: <a href="regracs@gmail.com">
                                    regracs@gmail.com
                                    </a>
                            </p>
                        </Media.Body>
                    </Media>
                </Fade>
            </div>
            
        );
    }

}

const styles = {
    container: {
        backgroundColor: "cyan",
        backgroundImage: "url(\"http://www.publicdomainpictures.net/pictures/170000/velka/grunge-background-14635606255CS.jpg\")",
        padding: 35,
    },
    image: {
        borderRadius: 25
    },
    title: {
        fontSize: 35,
        color: "gray"
    },
    description: {
        fontSize: 20,
        color: "white"
    }
}