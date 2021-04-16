import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button} from 'antd'
import TableXY from './table_x_y'
import './interpolation.css'
import { newton_interpolation_cal } from '../Compute'

class Newton_Interpolation extends React.Component{
    state = {
        n: 2,
        xy: [[],[]],
        point: [],
        x: '',
        result: ''
    }

    ChangeXY = e =>{
        let arrXY = this.state.xy
        let index = e.target.name.split("_")
        arrXY[parseInt(index[0])][parseInt(index[1])] = e.target.value
        this.setState({xy: arrXY})
        /* console.log(this.state.xy.toString()); */
    }

    ChangeX = e =>{
        this.setState({x: e.target.value})
    }

    ChangePoint = e =>{
        let index = []
            index = e.target.value
        
        this.setState({point: index.split(',')})
        /* console.log(this.state.point.toString()); */
    }

    RowAdd = e =>{
        if(this.state.n < 6){
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
        this.setState({result: newton_interpolation_cal(this.state.xy , this.state.point , this.state.x )})
    }


    render(){
        return(
            <div>
                <Row>
                    <Col span={24} className="set_head">Newton's divided-differences</Col>
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
                        <div className="set_display_x">x</div>
                        <div className="set_display_x">f(x)</div>
                        <TableXY n={this.state.n} onChange={this.ChangeXY}/>
                    </Col>
                    <Col className="set_margin_left">
                        <div className="set_margin_bottom">ใส่ค่า X ที่ต้องการ</div>
                        <div><Input onChange={this.ChangeX} placeholder={"42000"} style={{width: "200px"}}/></div>
                    </Col>
                    <Col className="set_margin_left">
                        <div className="set_margin_bottom">ใส่จำนวนจุดที่ต้องการ</div> 
                        <div><Input onChange={this.ChangePoint} placeholder={"1,2,3"} style={{width: "200px"}} /></div>
                    </Col>
                    <Col>
                        <div><Button className="set_cal_ex">Example</Button></div>
                        <div><Button type="primary" className="set_cal_ex" onClick={this.Cal}>Calculate</Button></div>
                    </Col>
                </Row>
                <div className="set_margin_top">
                    {this.state.result}
                </div>
            </div>
        );
    }
}

export default Newton_Interpolation