import { React } from 'react';
import './App.scss';
import { Title, Clock, Air } from './../../components';

const App = () => {
    return(
        <main className="App">
            <Title />
            <Clock />
            <Air />
        </main>
    )
}

export default App;