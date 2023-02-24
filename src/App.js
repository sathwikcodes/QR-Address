import { useState } from "react";
import WAValidator from "multicoin-address-validator/dist/wallet-address-validator";

import Form from "./Components/Form/Index";
import Qr from "./Components/Qr/Index";

import styles from "./style.module.scss";

function App() {
    const [network, setNetwork] = useState("eth");
    const [address, setAddress] = useState(
        "0x000000000000000000000000000000000000dead"
    );
    const [invalidAddress, setInvalidAddress] = useState(false);

    const changeAddress = (e) => {
        let address = e.target.value;
        let isValidAddress = WAValidator.validate(address, network);

        setAddress(address);
        setInvalidAddress(!isValidAddress);
    };

    const changeNetwork = (e) => {
        let network = e.target.value;
        let isValidAddress = WAValidator.validate(address, network);

        setInvalidAddress(!isValidAddress);
        setNetwork(network);
    };

    return (
        <div className={styles.App}>
            <Form
                address={address}
                changeAddress={changeAddress}
                network={network}
                changeNetwork={changeNetwork}
                invalidAddress={invalidAddress}
            />
            <Qr value={address} invalidAddress={invalidAddress} />
        </div>
    );
}

export default App;
