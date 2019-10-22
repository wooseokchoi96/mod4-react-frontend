import React, {Component} from 'react';
import Score from '../components/Score';
import ScoreType from '../components/ScoreType';
import { thisTypeAnnotation } from '@babel/types';

class ScoreContainer extends Component {
    state={
        showScores : [],
        type : '',

    }
    


    
    
    
    
    render(){
        let scoreComponents 
        scoreComponents = this.props.top10Scores.map(score => <Score key={score.id} scoreObj={score} />)
            console.log("score components in ScoreContainer Render:  ", this.props.top10Scores)
    //    console.log("in scorecont Render - selected game ovb from props: ", this.props.selectedGameObj)
    //     if (this.props.selectedGameObj != {}) {
    //         scoreComponents =  this.fetchScores().map(score => <Score key={score.id} scoreObj={score} />)
    //     }
        
        
        return(
            <div className='ScoreContainer'>
                <ScoreType setScoreContextType={this.props.setScoreContextType}/>
                <h3>All Scores for </h3>
                <ol>{scoreComponents}</ol>
            </div>
        );
    };
};

export default ScoreContainer;