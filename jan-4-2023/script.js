document.body.style.cssText = `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

const sefat = document.querySelector("#sefat");

sefat.style.cssText = `
    width: 100%;
    height: 100vh;
    display: flex;
    background: dodgerblue;
`;

const sifatChield = document.createElement("div");
sifatChield.innerHTML = "Sefali binte Sefat";

sifatChield.style.cssText = `
    width: 350px;
    height: 350px;
    background: white;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    font-weight: bolder;
    background: url("./sefali.jpg");
    background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
    background-size: 100% 100%;
    border: 1px solid #000;
`;

sefat.appendChild(sifatChield);
