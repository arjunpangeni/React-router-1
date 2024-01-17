export const githubData = async () => {
    const response = await fetch("https://api.github.com/users/arjunpangeni")
    return response.json()


}