// https://ant.design/components/card/#
import React, { Component } from 'react';
import { Card, Row, Space } from 'antd';
import SelectOption from '../elements/SelectOption';

const { Meta } = Card;

function CardSaya(props) {
    return (
        <div>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={props.link} />}
            >
                <p><b>{props.nama}</b></p>
                <p>{props.nim}</p>
                {/* https://codesandbox.io/s/qk8r8l7w54?file=/src/index.js */}
                <SelectOption>
                    <option value="" hidden>Kelas</option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                </SelectOption>
            </Card>
        </div>
    )
}

export default class Cards extends Component {
    render() {
        return (
            <Row align="center">
                <Space>
                    <div>
                        <CardSaya nama="Muhammad Fadhli Hisyam" nim="21120117130078" link="https://imgur.com/zLEWqaz.png" />
                    </div>
                    <div>
                        <CardSaya nama="Naufal Muhammad Shafa" nim="21120117120031" link="https://imgur.com/2S58scI.png" />
                    </div>
                </Space>
            </Row>
        );
    }
}
