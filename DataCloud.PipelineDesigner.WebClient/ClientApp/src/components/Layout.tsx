import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <NavMenu/>
        <Container fluid={true} className="app-container">
            {props.children}
        </Container>
    </React.Fragment>
);
