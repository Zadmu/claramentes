let ORIGIN;

if (process.env.NODE_ENV === 'development') {
    ORIGIN = "http://localhost:5000";
}
else {
    ORIGIN = "http://claramentes.com"
}

//user related endpoints
export const CREATE_USER = () => `${ORIGIN}/api/v1/user/register`;
export const GET_USER = (email) => `${ORIGIN}/api/v1/user/${email}`;
export const EDIT_USER = (email) => `${ORIGIN}/api/v1/user/edit/${email}`;
export const JOIN_COURSE = (email) => `${ORIGIN}/api/v1/user/joincourse/${email}`;
export const JOIN_GROUP = (email) => `${ORIGIN}/api/v1/user/joingroup/${email}`;
export const DELETE_USER = (email) => `${ORIGIN}/api/v1/user/delete/${email}`;

//course related endpoints
export const CREATE_COURSE = () => `${ORIGIN}/api/v1/course/create`;
export const GET_COURSE = (id) => `${ORIGIN}/api/v1/course/${id}`;
export const EDIT_COURSE = (id) => `${ORIGIN}/api/v1/course/edit/${id}`;
export const DELETE_COURSE = (id) => `${ORIGIN}/api/v1/course/delete/${id}`;
export const COURSE_ADD_COMMENT = (id) => `${ORIGIN}/api/v1/course/add/comment/${id}`;
export const GET_COURSE_COMMENTS = (id) => `${ORIGIN}/api/v1/course/comments/${id}`;
export const COURSE_ADD_LESSON = (id) => `${ORIGIN}/api/v1/course/add/lesson/${id}`;
export const GET_COURSE_LESSONS = (id) => `${ORIGIN}/api/v1/course/lessons/${id}`;

//group related endpoints
export const CREATE_GROUP = () => `${ORIGIN}/api/v1/group/create`;
export const GET_GROUP = (id) => `${ORIGIN}/api/v1/group/${id}`;
export const EDIT_GROUP = (id) => `${ORIGIN}/api/v1/group/edit/${id}`;
export const DELETE_GROUP = (id) => `${ORIGIN}/api/v1/group/delete/${id}`;
export const GROUP_ADD_COMMENT = (id) => `${ORIGIN}/api/v1/group/add/comment/${id}`;
export const GET_GROUP_COMMENTS = (id) => `${ORIGIN}/api/v1/group/comments/${id}`;
export const GROUP_ADD_EVENT = (id) => `${ORIGIN}/api/v1/group/add/event/${id}`;
export const GET_GROUP_EVENTS = (id) => `${ORIGIN}/api/v1/group/events/${id}`;

//topics
export const MATH_COURSES = () => `${ORIGIN}/api/v1/course/topics/math`;