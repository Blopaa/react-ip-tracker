const { useState } = require("react");

const useInput = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange ];
}

export default useInput