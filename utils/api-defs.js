let ORIGIN;

if (process.env.NODE_ENV === 'development') {
    ORIGIN = "http://localhost:5000";
}
else {
    ORIGIN = "http://claramentes.com"
}

export const DASHBOARD_GET_USER = (email) => `${ORIGIN}/api/v1/dashboard/user/${email}`;
export const POST_COMMENT = (id, type) => `${ORIGIN}/api/v1/${type}/${id}/comments/add`;
export const GET_COMMENTS = (id, type) => `${ORIGIN}/api/v1/${type}/${id}/comments/get`;
export const GET_IDS = (type) => `${ORIGIN}/api/v1/${type}/get_ids`
export const GET_INFO = (id, type) => `${ORIGIN}/api/v1/${type}/${id}/get_all`