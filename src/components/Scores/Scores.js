import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getHighScores} from './../../ducks/reducer';
import cloudsbg from './../../img/clouds-bg.png';

class Scores extends Component {
  
    componentWillMount(){
        this.props.getHighScores();
    }

    render(){
        let displayPlayers = [],
            displayScores = [];
            console.log(this.props.highScores)
        this.props.highScores[0] ? (
            displayPlayers = this.props.highScores.map((scores, index)=> {
                return <li key={index}> {scores.player}</li>       
            }),
    
            displayScores = this.props.highScores.map((scores, index)=> {
                return <li key={index}>{scores.score}</li>
            })
        ) : null;

        return(
            <div className="scores-container">
                <div className="score-clouds"></div>
                <div className="parachute-penguin"></div>

                {this.props.highScores.length > 0 ? 
                    (<div className='high-scores'>
                        <h1 className="high-scores-h1">HIGH SCORES</h1>
                        <div className='players-and-scores'>   
                            <div className="players">
                                <ul>
                                    {displayPlayers}
                                </ul>
                            </div>

                            <div className="scores">
                                <ul>
                                    {displayScores}
                                </ul>
                            </div>
                        </div>
                      
    
                    </div>) : 
                (<div> <h1 className="retrieve-scores">RETRIEVING HIGH SCORES...</h1></div> )
                }

                <div className="no-scores-message">
                    <h1>Turn your device the other way to see high scores! </h1>
                </div>
               
                <Link to="/game"> <button className="scores-page-replay">PLAY AGAIN</button> 
                </Link>
            </div> //end of .scores-container
        )
    }
}

function mapStateToProps(state) {
    let {highScores} = state;
    return {
        highScores
    }
}

let outputActions = {
    getHighScores
}

export default connect(mapStateToProps, outputActions)(Scores);