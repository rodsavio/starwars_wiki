import { Fragment } from "react";
import { Route } from "react-router";

import GeneralList from "../General/generalList";

const Router: React.FC = () => {
    return (
        <Fragment>
            <Route path='/films/:idPage'>
                <GeneralList module='films' />
            </Route>
            <Route path='/people/:idPage'>
                <GeneralList module='people' />
            </Route>
            <Route path='/planets/:idPage'>
                <GeneralList module='planets' />
            </Route>
            <Route path='/species/:idPage'>
                <GeneralList module='species' />
            </Route>
            <Route path='/starships/:idPage'>
                <GeneralList module='starships' />
            </Route>
            <Route path='/vehicles/:idPage'>
                <GeneralList module='vehicles' />
            </Route>
        </Fragment>
    );
};

export default Router;