// Functionality for auth and log in
export async function loginCustomer(username, password) {
    const res = await fetch(`http://localhost:8080/v1/customers/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    });

    const data = await res.json();

    if (res.status === 200) {
        return {
            ...data, 
            role:'customer'
        };
    } else {
        throw new Error(data.message || "Login Failed");
    }
}