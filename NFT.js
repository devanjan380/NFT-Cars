let NFTs=[];//array to store NFT

function mintNFT(name,cost,owner,color_used,last_owner,art_type)
{
    const NFT={ //This nft is about paintings
    Name:name,
    Cost:cost,
    Owner:owner,
    Color_Used:color_used,
    Last_Owner:last_owner,
    Art_Type:art_type
};
   
   NFTs.push(NFT) //ADD NEW NFT TO ARRAY NFTs
} 

function getTotalSupply() //RETURN LENGTH OF NFTs ARRAY
{
    return NFTs.length;
}


function listNFTs()
{
    for(let i = 0; i <getTotalSupply(); i++) // LOOP TO WENT THROUGH EVERY NFT 
   {
     console.log("Name: " + NFTs[i].Name);
     console.log("Cost: " + NFTs[i].Cost);
     console.log("Owner Name: " + NFTs[i].Owner);
     console.log("Color Used: " + NFTs[i].Color_Used);
     console.log("Previous Owner: " + NFTs[i].Last_Owner);
     console.log("Art Type: " + NFTs[i].Art_Type);
     console.log("\n")
   }
}

mintNFT("Starry Night", 1000, "Alice", ["blue", "yellow"], "Bob", "Painting");
mintNFT("Mona Lisa", 2000, "Charlie", ["brown", "green"], "Alice", "Portrait");
mintNFT("The Scream", 1500, "David", ["orange", "blue"], "Eve", "Expressionism");
mintNFT("Girl with a Pearl Earring", 1200, "Fiona", ["blue", "yellow", "white"], "George", "Baroque");
mintNFT("The Persistence of Memory", 1800, "Hannah", ["brown", "beige", "blue"], "Ivan", "Surrealism");


listNFTs(); // TO PRINT ALL NFTS 

console.log(`Total number of NFTs are ${getTotalSupply()}`)

