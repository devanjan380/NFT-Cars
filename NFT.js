function mintNFT(brand, model, year, owner) {
    const carNFT = {
        "Brand": brand,
         Model: model,
        "Year": year,
        "Owner":owner
    };
carnft.push(carNFT); 
}
var carnft=[];

function listNFTs() {
    for (let i = 0; i <carnft.length; i++) {
        console.log("Brand: " + carnft[i].Brand);
        console.log("Model: " + carnft[i].Model);
        console.log("Year: " + carnft[i].Year);
        console.log("Owner: " + carnft[i].Owner);
        console.log("\n");
    }
    console.log(getTotalSupply());
}
function getTotalSupply() 
{
    return carnft.length;
}

mintNFT("Toyota", "Camry", 2022, "Alice");
mintNFT("Tesla", "Model S", 2023, "Charlie");
mintNFT("Ford", "Mustang", 2020, "David");
mintNFT("BMW", "X5", 2021, "Fiona");


listNFTs();
