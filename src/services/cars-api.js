import axios from 'axios';

const fetchAllCars = ({setState}) => {
    axios.get(`https://carsup.herokuapp.com/cars/all?pageNo=0`)
    .then(({data}) => setState(data));
};

const fetchCar = ({id, setState}) => {
    axios.get(`https://carsup.herokuapp.com/cars/${id}`)
    .then(({data}) => setState(data));
};

const countCars = ({setState}) => {
    axios.get('https://carsup.herokuapp.com/cars/count')
    .then(({data}) => setState(data));
};

const fetchVehicleTypes = ({setState}) => {
    axios.get('https://carsup.herokuapp.com/cars/vehicleTypes')
    .then(({data}) => setState(data));
};

const carsApi = {
    fetchAllCars,
    fetchCar,
    countCars,
    fetchVehicleTypes,
};

export default carsApi;