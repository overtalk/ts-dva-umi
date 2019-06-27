import React from 'react';
import Birthday from '../../components/Birthday';

const title="DD 下一个生日" 
const month=11 
const day=20

export default class DDBirthDay extends React.Component<any> {
    render() {
        return(
            <Birthday 
            title={title}
            month={month} 
            day={day}
            />
        )
    }
}