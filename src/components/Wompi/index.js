import React from 'react';
import { total } from '../TotalPrice';
import ScriptTag from 'react-script-tag';

const Wompi = () => {

    return (
        <ScriptTag 
            src="https://checkout.wompi.co/widget.js"
            data-render="button"
            data-public-key="pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf"
            data-currency="COP"
            data-amount-in-cents={total * 100}
            data-reference="37DNKF84S92N1S"
            data-redirect-url="https://transaction-redirect.wompi.co/check"
        >
            >
        </ScriptTag>
    );
};

export default Wompi;
