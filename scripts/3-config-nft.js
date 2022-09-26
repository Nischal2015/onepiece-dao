import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = await sdk.getEditionDrop(process.env.EDITION_DROP_ADDRESS);

(async() => {
    try {
        await editionDrop.createBatch([{
            name: "Straw Hat",
            description: "This NFT will give you access to OnePiece DAO",
            image: readFileSync("src/assets/straw-hat.jpg")
        }])
        console.log("✅ Successfully created a new NFT in the drop");
    } catch (error) {
        console.error("Failed to create the new NFT", error)
    }
})();