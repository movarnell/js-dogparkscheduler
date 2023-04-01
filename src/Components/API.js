// Declare a constant variable to store the API endpoint
const ApiEndpoint = "https://6423a95c77e7062b3e364861.mockapi.io/dogpark/user";

// Define a class Dogpark to handle API requests
class Dogpark {

    // Define a method to get data from the API
    getUser = async () => {
        try {
            // Send a GET request to the API endpoint and wait for the response
            const resp = await fetch(ApiEndpoint);
            // Parse the response as JSON
           const data = await resp.json();
            return data;
        } catch (e) {
            // If an error occurs, log the error message to the console
            console.log("get did not work", e);
        }
    };

    // Define a method to update an existing user in the API
    putUser = async (users) => {
        try {
            // Send a PUT request to the API endpoint with the user ID as part of the URL
            const resp = await fetch(`${ApiEndpoint}/${users.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                // Include the updated user data in the request body as a JSON string
                body: JSON.stringify(users),
            });
            // Parse the response as JSON
            return await resp.json();
        } catch (e) {
            // If an error occurs, log the error message to the console
            console.log('put did not work' , e)
        }
    };

    // Define a method to add a new user to the API
    postUser = async (users) => {
        try {
            // Send a POST request to the API endpoint with the new user data in the request body
            const resp = await fetch(`${ApiEndpoint}/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(users),
            });
            const userData = await resp.json();
            await this.getUser();
            return userData;
            
            
        } catch (e) {
            // If an error occurs, log the error message to the console
            console.log("post did not work", e);
        }
    }; 

    // Define a method to delete an existing user from the API
    deleteUser = async (id) => {
        try {
            // Send a DELETE request to the API endpoint with the user ID as part of the URL
            const resp = await fetch(`${ApiEndpoint}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            // Parse the response as JSON
            return await resp.json();
        } catch (e) {
            // If an error occurs, log the error message to the console
            console.log("delete did not work", e);
        }
    };
}

// Export an instance of the Dogpark class as the API module
export const API = new Dogpark();
