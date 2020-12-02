import { Component } from "react";

class Calculator extends Component {

    state= {
        num1: 0,
        num2: 0,
        result: 'Hit the equals button to sum up youur numbers'
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
      }

    add= () =>{
            this.setState({
            result: parseInt(this.state.num1) + parseInt(this.state.num2)
        })
    }
    render() {
        return (
            <div className="container">
            <h1>Add with React!</h1>

            <div className="add">
                <input type="number"
                    name="num1" 
                    value={this.props.num1}
                    onChange={ (e) => this.setNum(e, 'num1') }
                />
                <span>+</span>
                <input type="number"
                    name="num2" 
                    value={this.props.num1}
                    onChange={ (e) => this.setNum(e, 'num2') } />
                <button onClick={this.add}>=</button>
                <h3>{this.state.result}</h3>
            </div>
            </div>
        );
    }    
}

export default Calculator;