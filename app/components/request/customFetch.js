
const customFetch = async (url, method, body, headers,) => {

    var optionalParams = {
        ...(method) && { method: method },
        ...(headers) && { headers: headers },
        ...(body) && { body: body },
    }
    let response = await fetch(url, optionalParams);

    return response
}

export default customFetch