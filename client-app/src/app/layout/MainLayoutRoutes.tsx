import React, { Fragment } from 'react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { Route, Routes} from 'react-router-dom';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import { Container } from 'semantic-ui-react';

function MainLayoutRoutes() {
    return (
        <Fragment>
            <NavBar />
            <Container style={{marginTop: '7em'}}>
                <Routes>
                    <Route path='/activities' Component={ActivityDashboard} />
                    <Route path='/activities/:id' Component={ActivityDetails} />
                    <Route path='/activities/edit/:id'  Component={ActivityForm} />
                    <Route path='/createActivity' Component={ActivityForm} />
                </Routes>
            </Container>
        </Fragment>
    );
}

export default MainLayoutRoutes;