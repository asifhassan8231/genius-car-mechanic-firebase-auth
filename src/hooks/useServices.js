import { useState } from "react";
import { useEffect } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://mocki.io/v1/789a5c48-200d-4296-9f61-dee1c1f60652')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return {
        services
    }
}
export default useServices;