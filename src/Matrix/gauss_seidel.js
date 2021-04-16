import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button} from 'antd'
import MatrixA from './matrixA'
import MatrixB from './matrixB'
import { gauss_seidel_cal } from '../Compute'

class Gauss_Seidel extends React.Component{
    state = {
        n: 2,
        matrix_A: [[],[]],
        matrix_B: [],
        ERROR: '',
        result: ''
    }

    ChangeMatrixA = e =>{
        let arrA = this.state.matrix_A
        let index = e.target.name.split('_')
        arrA[parseInt(index[1])][parseInt(index[2])] = e.target.value
/*         console.log(e.target.value) */
        this.setState({matrix_A: arrA})
    }

    ChangeMatrixB = e =>{
        let arrB = this.state.matrix_B
        let index = e.target.name.split('_')
        arrB[parseInt(index[1])] = e.target.value
/*         console.log(e.target.value) */
        this.setState({matrix_B: arrB})
    }

    getERR= (e) => {
        /* console.log(e.target.value); */
        this.setState({
            ERROR: e.target.value,
        });
    };

    MatrixAdd = e =>{
        if(this.state.n < 6){
            this.setState({n: this.state.n + 1})
            this.state.matrix_A.push([])
        }
    }

    MatrixReduce = e =>{
        if(this.state.n > 2){
            this.setState({n: this.state.n - 1})
            this.state.matrix_A.pop([])
        }
    }

    Cal = e =>{
        this.setState({result: gauss_seidel_cal(this.state.n , this.state.matrix_A , this.state.matrix_B , this.state.ERROR)})
    }


    render(){
        return(
            <div>
                <Row>
                    <Col span={24} className="set_head">Gauss-Seidel Iteration</Col>
                </Row>
                <Row className="set_margin">
                    <Col>
                        <Button className="set_button" onClick={this.MatrixReduce}>-</Button>
                    </Col>
                    <Col>
                        <Input className="set_center" disabled="disabled" value={this.state.n.toString() + ' x ' + this.state.n.toString()}/>
                    </Col>
                    <Col>
                        <Button className="set_button" onClick={this.MatrixAdd}>+</Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={18} className="set_margin_matrix">Matrix A</Col>
                    <Col span={4} className="set_margin_matrix">Matrix B</Col>
                </Row>
                <Row>
                    <Col span={18}>
                        <MatrixA n={this.state.n} onChange={this.ChangeMatrixA} value={this.state.matrix_A}/>
                    </Col>
                    <Col span={4}>
                        <MatrixB n={this.state.n} onChange={this.ChangeMatrixB} value={this.state.matrix_B}/>
                    </Col>
                </Row>
                <div className="set_margin">Error : <Input onChange={this.getERR} style={{width: "200px"}}/></div>
                <div className="set_center set_margin_div">
                    <Button className="set_cal_ex">Example</Button>
                    <Button type="primary" className="set_cal_ex" onClick={this.Cal}>Calculate</Button>
                </div>
                {this.state.result}
            </div>
        );
    }
}

export default Gauss_Seidel