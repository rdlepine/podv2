import axios from 'axios'

export const getDrivers = () => {

    axios.get('http://localhost:4200/serverport')
    .then(response => {
      this.setState({ serverports: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })

}