import * as React from 'react';
import { Statistic, Row, Col, Progress } from 'antd';
import 'antd/dist/antd.css'

const formatTime = ( duration : number ) => {
    let day: number  = duration/(24*3600*1000);
    var hour: number = (duration/(3600*1000))%24;
    var min: number = duration/(1000*60)%60;
    var second: number = duration/1000%60;
    return day + ' 天 ' + hour + ' 小时 ' + min + ' 分钟 ' + second  + ' 秒'
}

class CountupProps
{
    duration: number = 0;
    boyPercent: number = 0;
    girlPercent: number = 0;
}


export default class Countup extends React.Component<CountupProps> {
    render() {
        const { duration, boyPercent, girlPercent } = this.props;
        return (
            <div>
                <Row>
                    <Col span={24} style={{ margin: 32 }}>
                        <Statistic title="我们一起走过了" value={formatTime(duration)} />
                    </Col>
                    <Col span={10} style={{ margin: 32 }}>
                        <Progress 
                            percent={boyPercent} 
                            type="dashboard"
                            format={(percent)=>{
                                return '我生命的' + percent + '%'
                            }}
                            width={300}
                        />
                    </Col>
                    <Col span={10} style={{ margin: 32 }}>
                        <Progress 
                            percent={girlPercent} 
                            type="dashboard"
                            format={(percent)=>{
                                return '你生命的' + percent + '%'
                            }}
                            width={300}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

