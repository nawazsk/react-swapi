import React from 'react';
import axios from 'axios';
import { resolve } from 'url';

// const getData = async (url) => {
//     const response = await axios.get(url);
//     return response;
// }
async function getData() {
    const data = await axios.get('https://swapi.co/api/planets/');

    return data;
}


const Home = () => {
    let response = getData().then(result => result)
    console.log(response);
    // axios.get('https://swapi.co/api/planets/').then((response) => console.log(response));
    // const getData = async (url) => {
    //     let response = await axios.get(url);
    //     console.log(response);
    //     let data = await response.json();
    //     return data;
    // }

    // const data = getData('https://swapi.co/api/planets/').then((response => console.log(response)));
    // console.log(data);
    // const data = getData('https://swapi.co/api/planets/').then(data => data);
    // console.log(data);
    return (
        <div>
            Home page
        </div>
    )
}

export default Home;