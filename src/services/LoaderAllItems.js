import axios from 'axios';

const LoaderAllItems = async (detail, link) => {
    try {
        const url = (`http://localhost:3001/users/list`)
        const res = await axios.get(url)
        detail(res.fact)
        
    } catch (error) {
        console.error(error);
        detail('null');
    }
    return detail
}

export default LoaderAllItems;