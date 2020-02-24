import React from 'react';
import ReactDOM from 'react-dom';
import {AppHeader, TodoList, SearchPanel} from './components';

const App = () => {

    const todoData = [
        {label: 'Drik Coffee', important: false, id: 1},
        {label: 'Learn React', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3}
    ];

    return (
        <div>
            <span>{ (new Date()).toString()}</span>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData} />
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
