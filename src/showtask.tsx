import * as React from 'react';
import Iprops from './interfaces/prop_interface';
export default class Showtasks extends React.Component<Iprops,{}> {
    constructor(props: Iprops) {
        super(props);
    }
    public render() {
        const gettask = this.props.data.map((task,index) => {
            return(
              <p key={index}>
                {task}
              </p>
            )
          })
        return(
            <div>
                {gettask}
            </div>
        );
    }
}