export const query = async (query, variables) => {
    const raw = await fetch(process.env.REACT_APP_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });
    const res = await raw.json();
    if (res.errors) {
        throw new Error(res.errors[0].message);
    }
    return res.data;
};
