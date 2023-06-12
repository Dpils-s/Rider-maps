import {KeyDTO} from "@/DTO/KeyDTO";

async function getKey() {
    try {
        const response = await fetch('http://localhost:4080/key');
        const data = await response.json();

        return data.map(item => {
            return new KeyDTO(item._id, item.key);
        });
    } catch (error) {
        console.error('Error:', error);
        return []; // Return an empty array in case of an error
    }
}
async function accessKey() {
    try {
        const keyDTOArray = await getKey();
        if (keyDTOArray.length > 0) {
            const key = keyDTOArray[0].key;
            return(key);
            // Use the 'key' variable here
        } else {
            console.log("No keys found");
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getKeyString() {
    try {
        const key = await accessKey();
        return key;
    } catch (error) {
        console.error('Error:', error);
        return ''; // Return an empty string in case of an error
    }
}


export {getKeyString};
