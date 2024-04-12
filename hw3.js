const fs = require('fs');
const path = require('node:path');

// Function to read a JSON file
function readJSONFile(fileName, callback) {
    fs.readFile(fileName, 'utf8', (error, data) => {
        if (error) {
            console.error("Error reading file:", error);
            return;
        }

        try {
            const object = JSON.parse(data);
            callback(object);
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    });
}

// Function to find a user by their id
function findUserById(id, users) {
    return users.find(user => user.id === id);
}

// Function to display user information
function displayUserInfo(user) {
    console.log("User Information:");
    console.log(user);
    console.log("Last hobby:", user.hobbies[user.hobbies.length - 1]);
    console.log("Address:", user.address.city, user.address.street);   
}

// Specify the correct path to unique_users.json
const filePath = path.join(__dirname, '', 'unique_users.json');

// Read the unique_users.json file and find the user with number '0045'
readJSONFile(filePath, (users) => {
   // console.log(users)
    const user = findUserById('0045', users);
    if (user) {
        displayUserInfo(user);
    } else {
        console.log("User with such number not found.");
    }
    
}); 
