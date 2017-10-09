import React from 'react';
import {ProgressBar, Col, Row, Grid, Jumbotron, Fade} from 'react-bootstrap';

export default class Stats extends React.Component{

    constructor(){
        super();
        this.state = {visible: false};
    }

    componentDidMount(){
        document.addEventListener('scroll',() => {
            if(window.pageYOffset > 300){
                this.setState({visible: true});
            }
        });
    }

    render(){
        return (
            <Fade in={this.state.visible}>
                <Grid style={styles.container}>
                    <h2 style={styles.title}>Status</h2>
                    <Row className="show-grid">
                        <Col md={4} sm={6}>
                            <h3 style={styles.subTitle}>Creative</h3>
                            <ProgressBar active bsStyle="success" 
                            now={95} style={styles.bar} />
                        </Col>

                        <Col md={4} sm={6}>
                            <h3 style={styles.subTitle}>Analytical</h3>
                            <ProgressBar active bsStyle="info" 
                            now={90} style={styles.bar} />
                        </Col>

                        <Col md={4} sm={6}>
                            <h3 style={styles.subTitle}>Motivated</h3>
                            <ProgressBar active bsStyle="warning" 
                            now={97} style={styles.bar}/>
                        </Col>
                    </Row>
                </Grid>
            </Fade>
        );
    }

}

const styles = {
    container: {
        height: 330
    },
    title: {
        color: "white",
        textAlign: "center",
        marginBottom: 30
    },
    subTitle: {
        color: "white",
        textAlign: "center",
        marginBottom: 15
    },
    bar: {
        width: 350,
        height: 50,
        marginLeft: 15,
        marginBottom: 10,
        fontSize: 24
    }
}