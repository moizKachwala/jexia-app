export function apiHandleResponse(response) {
    return response.json()
        .then((payload) => {
            if (response.ok) {
                return payload;
            }
            throw payload;
        });
}