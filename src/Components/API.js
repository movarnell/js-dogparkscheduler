const ApiEndpoint = "https://6423a95c77e7062b3e364861.mockapi.io/dogpark/user";

class Dogpark {
    // Method to get all users from the API
    getUser = async () => {
        try {
            const resp = await fetch(ApiEndpoint);
            const data = await resp.json();
            return data;
        } catch (e) {
            console.log("get did not work", e);
        }
    };

    // Method to update a specific user using their ID
    putUser = async (users) => {
        try {
            const resp = await fetch(`${ApiEndpoint}/${users.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(users),
            });
            const data = await this.getUser();
            console.log(data);
            return resp;
        } catch (e) {
            console.log('put did not work' , e)
        }
    };

    // Method to create a new user
    postUser = async (users) => {
        try {
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
            console.log("post did not work", e);
        }
    }; 

    // Method to delete a user using their ID
    deleteUser = async (id) => {
        try {
            const resp = await fetch(`${ApiEndpoint}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            return await resp.json();
        } catch (e) {
            console.log("delete did not work", e);
        }
    };
}

// Export an instance of the Dogpark class as the API object
export const API = new Dogpark();
