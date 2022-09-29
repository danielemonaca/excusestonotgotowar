import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [data, setData] = React.useState(null);

    useEffect(() => {

        // fetching data from mock api
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '07c6831669msh3cc77d14e42cc67p1a9eeajsn2939faa2e818',
                'X-RapidAPI-Host': 'excuses.p.rapidapi.com'
            }
        };

        fetch('https://excuses.p.rapidapi.com/?Content=My%20pet%20is%20sick', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    {data}
                    My mother has her period
                </p>
            </header>
        </div>
    );
}

export default App;
