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
        dropdownSelection: 1
    }

    componentDidMount() {
        this.props.fetchContextOptionsForDropdown ()
    }

 
    
    changeContextDropdown = (event) => {
        this.setState({
            dropdownSelection: event.target.value
        })
        this.props.setScoreContextType(event.target.value)
    }
    random = (arr) =>  {
        return arr[Math.floor((Math.random() * arr.length))]
      }
      

    render() {
        let options;
        if (this.props.allContextOptionsArr.length) {
            options = this.props.allContextOptionsArr.map(obj => <option key={obj.id} value={obj.id.toString()} >{obj.description}</option>)
        }

        console.log("All Arrs to be randomized? :", this.props.allContextOptionsArr)
        console.log("Does the random function work? :", this.random(this.props.allContextOptionsArr))
        return(
            <>
            <h1>Choose a score context: 
            <select value={this.state.dropdownSelection} onChange={this.changeContextDropdown}>
            {/* The below line will is close to letting us randomly select a context on Render.  ITs failing right now due to the app.js' state.allContextOptionsArr being empty on ititial load   */}
            {/* <select value={this.random(this.props.allContextOptionsArr).id.toString()} onChange={this.changeContextDropdown}> */}
                {options}
            </select></h1>
            <img id="contextImage" src={this.props.scoreContextObject.image} />
            </>

            
        )
    }
}

export default ScoreType;