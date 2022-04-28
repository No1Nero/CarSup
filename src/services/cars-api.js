import axios from 'axios';

const fetchAllCars = ({setState}) => {
    axios.get(`https://carsup.herokuapp.com/cars/all?pageNo=0`)
    .then(({data}) => setState(data));
};

const fetchCar = ({id, setState, token}) => {
    let authToken;
    if (token === null) {
        authToken = '';
    } else {
        authToken = `Bearer_${token}`;
    }

    axios.get(`https://carsup.herokuapp.com/cars/${id}`, {
        headers: {
            "Authorization": authToken,
        },
    })
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

const fetchFavouriteCars = ({token, setState}) => {
    axios.get('https://carsup.herokuapp.com/user/get_fav', {
        headers: {
            "Authorization": `Bearer_${token}`,
        },
    })
    .then(({data}) => setState(data));
};





const addCarToFavourite = ({idCar, token, setState}) => {
    fetch('https://carsup.herokuapp.com/user/add_to_fav', {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer_${token}`,
        },
        body: JSON.stringify(idCar),
    }).then(data => data.ok && data.json())
    .then(response => setState(response));
};





const removeCarFromFavourite = ({idCar, token, setState}) => {
    fetch('https://carsup.herokuapp.com/user/delete_from_fav', {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer_${token}`,
        },
        body: JSON.stringify(idCar),
    }).then(data => data.ok && data.json())
    .then(response => setState(response));
};

const carsApi = {
    fetchAllCars,
    fetchCar,
    countCars,
    fetchVehicleTypes,
    addCarToFavourite,
    removeCarFromFavourite,
    fetchFavouriteCars,
};

export default carsApi;