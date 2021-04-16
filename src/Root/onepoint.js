import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import { onepointcal } from '../Compute';
import '../App.css';

class Onepoint extends React.Component{
    state = {
        Equation: '(0.75*x)+1',
        X: '0',
        ERROR: '0.000001',
        result: ''
    };

    getEquation = (e) => {
        this.setState({Equation: e.target.value});
    };

    getX = (e) => {
        this.setState({X: e.target.value});
    };

    getERR = (e) => {
        this.setState({ERROR: e.target.value});
    };

    onClickcal = () => {
        let equation = this.state.Equation;
        let x = this.state.X;
        let error = this.state.ERROR;
        let ans = onepointcal(equation,x,error);
        this.setState({result: ans});
    };

    render(){
        return(
            <div>
                <div>
                    <div className='set_head'>
                        One-Point Iteration
                    </div>
                    Equation: <Input className="set_input" onChange={this.getEquation} />
                    X: <Input className="set_input" onChange={this.getX} />
                    Error: <Input className="set_input" onChange={this.getERR} />
                    <Button type="primary" onClick={this.onClickcal} className='set'>Calculate</Button>
                </div>
                {this.state.result}
            </div>
        );
    }
}

export default Onepoint;
