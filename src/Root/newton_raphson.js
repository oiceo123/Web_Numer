import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import { newton_raphsoncal} from '../Compute';
import '../App.css';

class Newton_Raphson extends React.Component{
    state = {
        Equation: 'x^2-7',
        X: '2',
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
        let ans = newton_raphsoncal(equation,x,error);
        this.setState({result: ans});
    };
    
    render(){
        return(
            <div>
                <div>
                    <div className='set_head'>
                        Newton-Raphson
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

export default Newton_Raphson;