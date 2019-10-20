import React, {Component} from 'react';
import Score from '../components/Score';
import ScoreType from '../components/ScoreType';

class ScoreContainer extends Component {
    state={
        allScores : [],
        showScores : [],
        type : ''
    }
    
    componentDidMount(){
        this.setState({ showScores : [{id:1,name:'Andy',score:'2 sec'},{id:2,name:'Tom',score:'1 sec'},{id:3,name:'Player',score:'4 sec'}] })
    }

    renderScores = () => {
        return this.state.showScores.map(score => (
            <Score key={score.id} score={score}/>
        ));
    }
    
    render(){
        console.log('state', this.state.showScores)
        return(
            <div className='ScoreContainer'>
                <ScoreType setScoreContextType={this.props.setScoreContextType}/>
                <h3>All Scores</h3>
                <ol>{this.renderScores()}</ol>
            </div>
        );
    };
};

export default ScoreContainer;