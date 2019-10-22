import React, {Component} from 'react';
import Score from '../components/Score';
import ScoreType from '../components/ScoreType';
import { thisTypeAnnotation } from '@babel/types';

class ScoreContainer extends Component {
    state={

    }
    
    render(){
        let scoreComponents = []
        scoreComponents = this.props.top10Scores.map(score => <Score key={score.id} scoreObj={score} scoreContextObject={this.props.scoreContextObject} />)
            console.log("score components in ScoreContainer Render:  ", scoreComponents)

        
        
        return(
            <div className='ScoreContainer'>
                <ScoreType setScoreContextType={this.props.setScoreContextType} scoreContextObject={this.props.scoreContextObject} />
                <h3>10 Quickest Scores for {this.props.gameName ? this.props.gameName : "Selected Game"} </h3>
                    <ol>{scoreComponents}</ol>
            </div>
        );
    };
};

export default ScoreContainer;