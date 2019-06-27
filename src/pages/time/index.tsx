import React from 'react';
import { connect } from 'dva';
import { START_TIME, BOY_BIRTH, GIRL_BIRTH } from './constants'
import Countup from '../../components/CountUp'

class TimerProps
{
    duration: number = 0;
    boyPercent: number = 0;
    girlPercent: number = 0;
}


class Timer extends React.Component<TimerProps> {
    constructor(props: TimerProps) {
        super(props);

        this.interval = null;
    }

    componentDidMount() {
        this.refreshTime();

        this.interval = setInterval(()=>{
            this.refreshTime();
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
          <Countup
            duration = {this.props.duration}
            boyPercent = {this.props.boyPercent}
            girlPercent = {this.props.girlPercent}
          />
        )
    }

    // 刷新时间
    refreshTime() {
        var dateNow = new Date().getTime();
        var dateJNR = new Date(START_TIME.year, START_TIME.month-1, START_TIME.day).getTime();
        var boyBitrh = new Date(BOY_BIRTH.year, BOY_BIRTH.month-1, BOY_BIRTH.day).getTime();
        var girlBitrh = new Date(GIRL_BIRTH.year, GIRL_BIRTH.month-1, GIRL_BIRTH.day).getTime();

        var duration = dateNow - dateJNR;
        var boy = ((duration/(dateNow - boyBitrh))*100).toFixed(2);
        var girl = ((duration/(dateNow - girlBitrh))*100).toFixed(2);

        this.props.dispatch({
            type: 'time/refresh',
            payload: {
                duration: duration,
                boy: boy,
                girl: girl,
            }
        });
    } 
}


function mapStateToProps(state) {
  const { boyPercent, girlPercent, duration } = state.time;
  return {
    boyPercent,
    girlPercent,
    duration,
    loading: state.loading.models.time,
  };
}

export default connect(mapStateToProps)(Timer);
