import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Results from '../Results/Results';

function Page() {
    return (
        <div className="p-4">
            <Switch>
                {/* Home */}
                <Route exact path="/">
                    <Redirect to="/search" />
                </Route>
                {/* Search */}
                <Route exact path="/search">
                    <Results />
                </Route>
                {/* Images */}
                <Route path="/images">
                    <Results />
                </Route>
                {/* News */}
                <Route path="/news">
                    <Results />
                </Route>
                {/* Videos */}
                <Route path="/videos">
                    <Results />
                </Route>
            </Switch>
        </div>
    );
}

export default Page;