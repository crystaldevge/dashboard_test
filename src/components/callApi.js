export const callGithubUser = async () => {
    
    const response = await fetch(`https://api.github.com/users?since=0`, {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}


export const callJsonPlaceholder = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}