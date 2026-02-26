import PnLogo from "../assets/pn-logo.png"

export default function Header({batchName}){
    return(
        <>
            <header id="header">
                <img src={PnLogo} alt="PN Logo" />
                <h1>Students results for {batchName}</h1>
              </header>
        </>
    );
}