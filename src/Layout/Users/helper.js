import requests from '../../requestsHandlers/users'

const getUsers = async () => {
    const token = localStorage.getItem("token");
    const data = await requests.fetchUsers(token)
    return data
}
export default { getUsers };
