import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import { bisectioncal } from '../Compute'
import '../App.css';

class Bisection extends React.Component{
    state = {
        Equation: 'x^4-13',
        XL: '1.5',
        XR: '2.0',
        ERROR: '0.000001',
        result: ''
    };

    getEquation = (e) => {
        this.setState({
            Equation: e.target.value,
        });
    };

    getXL = (e) => {
        this.setState({
            XL: e.target.value,
        });
    };

    getXR = (e) => {
        this.setState({
            XR: e.target.value,
        });
    };

    getERR= (e) => {
        this.setState({
            ERROR: e.target.value,
        });
    };

    onClickcal = (e) => {
        let equation = this.state.Equation;
        let xl = this.state.XL;
        let xr = this.state.XR;
        let error = this.state.ERROR;
        let x = bisectioncal(equation,xl,xr,error);
        this.setState({result: x});
    }
    render(){
        return(
            <div>
                <div>
                    <div className='set_head'>
                        Bisection
                    </div>
                    Equation: <Input className="set_input" onChange={this.getEquation} />
                    XL: <Input className="set_input" onChange={this.getXL} />
                    XR: <Input className="set_input" onChange={this.getXR} />
                    Error: <Input className="set_input" onChange={this.getERR} />
                    <Button type="primary" onClick={this.onClickcal} className="set">Calculate</Button>
                </div>
                {this.state.result}
            </div>
        );
    }
}

export default Bisection;