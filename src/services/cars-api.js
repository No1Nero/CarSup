import axios from 'axios';

const fetchAllCars = ({setState}) => {
    axios.get('https://carsup.herokuapp.com/cars/all')
    .then(({data}) => setState(data));
};

const fetchCar = ({id, setState}) => {
    axios.get(`https://carsup.herokuapp.com/cars/${id}`)
    .then(({data}) => setState(data));
};

const carsApi = {
    fetchAllCars,
    fetchCar,
};

export default carsApi;