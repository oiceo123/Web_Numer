import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import '../App.css';

import { secantcal } from '../Compute';

class Secant extends React.Component{
    state = {
        Equation: 'x^2-7',
        X0: '2.0',
        X1: '2.2',
        ERROR: '0.000001',
        result: ''
    };

    getEquation = (e) => {
        this.setState({Equation: e.target.value });
    };

    getX0 = (e) => {
        this.setState({X0: e.target.value});
    };

    getX1 = (e) => {
        this.setState({X1: e.target.value});
    };

    getERR = (e) => {
        this.setState({ERROR: e.target.value});
    };

    onClickcal = (e) =>{
        let equation = this.state.Equation;
        let x0 = this.state.X0;
        let x1 = this.state.X1;
        let error = this.state.ERROR;
        let x = secantcal(equation,x0,x1,error);
        this.setState({result: x});
    }

    render(){
        return(
            <div>
                <div>
                    <div className='set_head'>
                        Secant
                    </div>
                    Equation: <Input className="set_input" onChange={this.getEquation} />
                    X0: <Input className="set_input" onChange={this.getX0} />
                    X1: <Input className="set_input" onChange={this.getX1} />
                    Error: <Input className="set_input" onChange={this.getERR} />
                    <Button type="primary" onClick={this.onClickcal} className='set'>Calculate</Button>
                </div>
                {this.state.result}
            </div>
        );
    }
}

export default Secant