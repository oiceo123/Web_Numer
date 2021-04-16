import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button} from 'antd'
import TableMultiX from './table_multiple_x'
import '../Interpolation/interpolation.css'
import { multiple_cal } from '../Compute'

class Multiple extends React.Component{
    state = {
        n: 2,
        xy: [[],[]],
        x1: '',
        x2: '',
        x3: '',
        result: ''
    }

    ChangeXY = e =>{
        let arrXY = this.state.xy
        let index = e.target.name.split("_")
        arrXY[parseInt(index[0])][parseInt(index[1])] = parseInt(e.target.value)
        this.setState({xy: arrXY})
    }

    ChangeX1 = e =>{
        this.setState({x1: e.target.value})
    }

    ChangeX2 = e =>{
        this.setState({x2: e.target.value})
    }

    ChangeX3 = e =>{
        this.setState({x3: e.target.value})
    }

    RowAdd = e =>{
        if(this.state.n < 10){
            this.setState({n: this.state.n + 1})
            this.state.xy.push([])
        }
    }

    RowReduce = e =>{
        if(this.state.n > 2){
            this.setState({n: this.state.n - 1})
            this.state.xy.pop([])
        }
    }

    Cal = e =>{
        this.setState({result: multiple_cal(this.state.n , this.state.xy , this.state.x1 , this.state.x2 , this.state.x3)})
    }


    render(){
        return(
            <div>
                <Row>
                    <Col span={24} className="set_head">Multiple Linear Regression</Col>
                </Row>
                <Row className="set_margin">
                    <Col>
                        <Button className="set_button" onClick={this.RowReduce}>-</Button>
                    </Col>
                    <Col>
                        <Input className="set_center" disabled="disabled" value={this.state.n.toString()}/>
                    </Col>
                    <Col>
                        <Button className="set_button" onClick={this.RowAdd}>+</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="set_margin_bottom set_center">TableXY</div>
                        <div className="set_display_x">x1</div>
                        <div className="set_display_x">x2</div>
                        <div className="set_display_x">x3</div>
                        <div className="set_display_x">y</div>
                        <TableMultiX n={this.state.n} onChange={this.ChangeXY}/>
                    </Col>
                    <Col className="set_margin_left_regression">
                        <div className="set_margin_bottom">ใส่ค่า X1 ที่ต้องการ</div>
                        <div><Input onChange={this.ChangeX1} placeholder={"65"} style={{width: "200px"}}/></div>
                    </Col>
                    <Col className="set_margin_left_regression">
                        <div className="set_margin_bottom">ใส่ค่า X2 ที่ต้องการ</div>
                        <div><Input onChange={this.ChangeX2} placeholder={"65"} style={{width: "200px"}}/></div>
                    </Col>
                    <Col className="set_margin_left_regression">
                        <div className="set_margin_bottom">ใส่ค่า X3 ที่ต้องการ</div>
                        <div><Input onChange={this.ChangeX3} placeholder={"65"} style={{width: "200px"}}/></div>
                    </Col>
                </Row>
                <div className="set_center">
                    <Button className="set_cal_ex_multi">Example</Button>
                    <Button type="primary" className="set_cal_ex_multi set_margin_left_regression" onClick={this.Cal}>Calculate</Button>
                </div>
                <div className="set_margin_top">
                    {this.state.result}
                </div>
            </div>
        );
    }
}

export default Multiple