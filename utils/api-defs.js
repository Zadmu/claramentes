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
export const GET_COURSE = (ID) => `${ORIGIN}/api/v1/course/${ID}`;
export const EDIT_COURSE = (ID) => `${ORIGIN}/api/v1/course/edit/${ID}`;
export const DELETE_COURSE = (ID) => `${ORIGIN}/api/v1/course/delete/${ID}`;
export const COURSE_ADD_COMMENT = (ID) => `${ORIGIN}/api/v1/course/add/comment/${ID}`;
export const GET_COURSE_COMMENTS = (ID) => `${ORIGIN}/api/v1/course/comments/${ID}`;
export const COURSE_ADD_LESSON = (ID) => `${ORIGIN}/api/v1/course/add/lesson/${ID}`;
export const GET_COURSE_LESSONS = (ID) => `${ORIGIN}/api/v1/course/lessons/${ID}`;

//group related endpoints
export const CREATE_GROUP = () => `${ORIGIN}/api/v1/group/create`;
export const GET_GROUP = (ID) => `${ORIGIN}/api/v1/group/${ID}`;
export const EDIT_GROUP = (ID) => `${ORIGIN}/api/v1/group/edit/${ID}`;
export const DELETE_GROUP = (ID) => `${ORIGIN}/api/v1/group/delete/${ID}`;
export const GROUP_ADD_COMMENT = (ID) => `${ORIGIN}/api/v1/group/add/comment/${ID}`;
export const GET_GROUP_COMMENTS = (ID) => `${ORIGIN}/api/v1/group/comments/${ID}`;
export const GROUP_ADD_EVENT = (ID) => `${ORIGIN}/api/v1/group/add/event/${ID}`;
export const GET_GROUP_EVENTS = (ID) => `${ORIGIN}/api/v1/group/events/${ID}`;

//get courses by topic
export const TOPIC_COURSES = (topic) => `${ORIGIN}/api/v1/course/topics/${topic}`;

export const MATH_COURSES = () => `${ORIGIN}/api/v1/course/topics/math`;
export const STEM_COURSES = () => `${ORIGIN}/api/v1/course/topics/stem`;


//get groups by topic
export const STEM_GROUPS = () => `${ORIGIN}/api/v1/group/topics/stem`;

