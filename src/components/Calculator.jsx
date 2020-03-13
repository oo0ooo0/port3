import React, {Component} from 'react';

class ResultComponent extends Component {

    render() {
        const {result} = this.props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
        );
    }
}

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button-area">

                <button className="calcualatorBtn" name="" onClick={e => this.props.onClick(e.target.name)}> </button>
                <button className="calcualatorBtn" name="" onClick={e => this.props.onClick(e.target.name)}> </button>
                <button className="symbol calcualatorBtn" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
                <button className="calcualatorBtn" id="same" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <br/>
                <button className="calcualatorBtn" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button className="calcualatorBtn" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button className="calcualatorBtn" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button className="symbol calcualatorBtn" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                <br/>
                <button className="calcualatorBtn" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button className="calcualatorBtn" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button className="calcualatorBtn" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button className="symbol calcualatorBtn" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                <br/>
                <button className="calcualatorBtn" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button className="calcualatorBtn" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button className="calcualatorBtn" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button className="symbol calcualatorBtn" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button>
                <br/>
                <button className="calcualatorBtn" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button className="calcualatorBtn" name="CE" onClick={e => this.props.onClick(e.target.name)}>⬅︎</button>
                <button className="calcualatorBtn" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button className="symbol calcualatorBtn" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button>
                <br/>
            </div>
        );
    }
}


class CalculationComponent extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })
        }
    };

    reset = () => {
        this.setState({
            result: "" 
        }) 
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
        <div className="Main">
            <ResultComponent result={this.state.result}/>
            <KeyPadComponent onClick={this.onClick}/>
            </div>
        );
    }
}

export default CalculationComponent;