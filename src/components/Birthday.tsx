import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Statistic } from 'antd';
import 'antd/dist/antd.css'

const Countdown = Statistic.Countdown;

class BirthdayProps
{
    title: string = "";
    month: number = 0;
    day: number = 0;
}

export class BirthdayState
{
    birth: number = 0;
}


export default class Birthday extends React.Component<BirthdayProps, BirthdayState> {
    static propTypes = {
        title: PropTypes.string,
        month: PropTypes.number,
        day: PropTypes.number,
    };

    constructor(props : BirthdayProps) {
        super(props);

        this.state = { birth:  Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30 };
    }

    componentDidMount() {
        this.setBirthDay();
    }

    render() {
        const { title } = this.props;
        return(
            <Countdown 
            style={{ margin: 32 }}
            title={title} 
            value={this.state.birth} 
            format="D 天 H 时 m 分 s 秒" 
        />
        )
    }

    // 设置dd生日
    setBirthDay() {
        const { month , day } = this.props;
        var dateNow = new Date();
        var currentYear = dateNow.getFullYear();
        // 今年的生日
        var girlBitrh = new Date(currentYear, month-1, day);
        if ( girlBitrh < dateNow ) {
            // 如果今年的生日已经过了，则改成明年的生日
            girlBitrh = new Date(currentYear+1, month-1, day);
        }
        // this.setState({
        //     birth: girlBitrh,
        // })
        this.setState({
            birth: girlBitrh.getTime(), 
          });
    }
}