let ORIGIN;

if (process.env.NODE_ENV === 'development') {
    ORIGIN = "http://localhost:5000";
}
else {
    ORIGIN = "http://claramentes.com"
}

export const DASHBOARD_GET_USER = (email) => `${ORIGIN}/api/v1/dashboard/user/${email}`;