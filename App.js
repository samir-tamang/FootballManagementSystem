import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddBook from './component/AddBook';
import BookUpdate from './component/BookUpdate';
import DisplayData from './component/DisplayData'; 
import DsplyBk_fnCompt from './component/DsplyBk_fnCompt';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Book Management</h1>
                <Switch>
                    <Route path="/addbook" component={AddBook} />
                    <Route path="/updatebook/:id" component={BookUpdate} />
                    <Route path="/allbooks" component={DisplayData} /> {/* Route to display books */}
                    <Route
                        path="/bookdetails/:id"
                        render={({ match }) => <DsplyBk_fnCompt bookId={match.params.id} />}
                    />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
