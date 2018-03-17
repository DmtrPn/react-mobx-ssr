import * as React from 'react';

import { Home, HomeProps } from './Home';


interface Props extends HomeProps {
}

interface State {
}

export class HomeContainer extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        };
    }

    public render() {
        return (
            <Home />
        );
    }
}
