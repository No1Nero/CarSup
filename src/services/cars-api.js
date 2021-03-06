import axios from 'axios';

const fetchAllCars = ({setState, pageNumber}) => {
    axios.get(`https://carsup.herokuapp.com/cars/all?pageNo=${pageNumber}`)
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

const fetchVehicleTypes = ({setState}) => {
    axios.get('https://carsup.herokuapp.com/cars/vehicleTypes')
    .then(({data}) => setState(data));
};

const fetchFuelTypes = ({setState}) => {
    axios.get('https://carsup.herokuapp.com/cars/fuelTypes')
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

const filterCars = ({credentials, setState}) => {
    axios.get(`https://carsup.herokuapp.com/cars/filter?search=${credentials}`)
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
    fetchVehicleTypes,
    fetchFuelTypes,
    addCarToFavourite,
    removeCarFromFavourite,
    fetchFavouriteCars,
    filterCars,
};

export default carsApi;