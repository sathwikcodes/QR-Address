import styles from "./../../style.module.scss";

function Form({ address, changeAddress, network, changeNetwork, invalidAddress }) {
    return (
        <div className={styles.Form}>
            <h2>Crypto Address QR-Code</h2>
            <form>
                <select value={network} onChange={changeNetwork}>
                    <option hidden>Select Crypto Network</option>
                    <option value="btc">Bitcoin ( BTC )</option>
                    <option value="eth">Ethereum ( ETH )</option>
                    <option value="xrp">Ripple ( XRP )</option>
                </select>
                <input
                    type="text"
                    value={address}
                    onChange={changeAddress}
                    className={invalidAddress ? styles.dangerous : null}
                />
            </form>
        </div>
    );
}

export default Form;
