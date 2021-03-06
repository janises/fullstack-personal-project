import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getHighScores, resetGame} from './../../ducks/reducer';
import {Link} from 'react-router-dom';
 
class GameOver extends Component {
    
    replay(){
        this.props.resetGame()
        this.props.playAgain()    
    }
    
    render(){
        return(
            <div className="game-over-container">
                <div className="game-over-modal">
                    <h1 className="game-over">GAME OVER</h1>
                    <button className="game-over-replay" onClick={()=> this.replay()}>PLAY AGAIN</button>
                    <Link to ='/highscores'> <button className="game-over-high-scores">HIGH SCORES</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    let {isModalOpen} = state;

    return {
        isModalOpen
    }
}

let outputActions = {
    getHighScores,
    resetGame
}

export default connect(mapStateToProps, outputActions)(GameOver);