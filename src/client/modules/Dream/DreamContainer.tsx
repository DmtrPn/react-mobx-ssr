import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { Dream, DreamProps } from './Dream';
import { DreamApi } from '../../api';


interface Props extends DreamProps {
    dreamState: any;
}

interface State {
}

@inject('dreamState')
@observer
export class DreamContainer extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        };
    }

    // This method is only called on the server
    public static async getInitData() {
        console.log('Get dreams on server side');

        const dreams = await DreamApi.getDreamList();

        return {
            dreamState: {
                dreams,
                fromServer: true
            }
        };
    }


    public async componentDidMount() {
        const { dreamState } = this.props;

        // On the client, we check if the data was requested on the server
        if (dreamState.needUpdate) {
            console.log('Get dreams on client side');

            const dreams = await DreamApi.getDreamList();

            dreamState.setDreams(dreams);
        } else {
            console.log('Dreams were requested on the server');

            dreamState.setNeedUpdate();
        }
    }

    public render() {
        const { dreamState } = this.props;

        return (
            <Dream
                dreams={dreamState.dreams}
            />
        );
    }
}
