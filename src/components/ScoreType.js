import React from 'react';

// const ScoreType = () => {
//     return(
//         <div className="dropdown">
//             <button className="dropbtn">Score Type</button>
//             <div className="dropdown-content">
//                 <li>Type1</li>
//                 <li>Type2</li>
//                 <li>Type3</li>
//             </div>
//         </div>
//     );
// }


class ScoreType extends React.Component {

    state = {
        contextOptionsArr: [],
        dropdownSelection: 1
    }

    componentDidMount() {
        this.fetchContextOptionsForDropdown ()
    }

    fetchContextOptionsForDropdown = () => {
        fetch("http://localhost:3000/api/v1/scoreContexts")
        .then(resp => resp.json())
        .then(arr => {
            this.setState({
                contextOptionsArr: arr})
        })
    }
    
    changeContextDropdown = (event) => {
        this.setState({
            dropdownSelection: event.target.value
        })
        this.props.setScoreContextType(event.target.value)
    }
    

    render() {
        let options = this.state.contextOptionsArr.map(obj => <option key={obj.id} value={obj.id.toString()} >{obj.description}</option>)

        return(
            <>
            <h1>Choose a score context: 
            <select value={this.state.dropdownSelection} onChange={this.changeContextDropdown}>
                {options}
            </select></h1>
            <img id="contextImage" src={this.props.scoreContextObject.image} />
            </>

            
        )
    }
}

export default ScoreType;