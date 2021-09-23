import {GET_IDS, GET_INFO} from '../../utils/api-defs'

export async function getAllCourseIds() {
    
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  let course_ids = await (await fetch(GET_IDS("course"), requestOptions)).json()
  course_ids = course_ids.map(id => {
      return {
        params: {
          id: id
        }
      }
    })

  return course_ids; 
}

export async function getPostData(id) {

  var requestOptions = {
  method: 'GET',
  redirect: 'follow'
  };

  let course_info = await (await fetch(GET_INFO(id, "course"), requestOptions)).json()
  return {
    id: id,
    type: course_info.type,
    admins: course_info.admins,
    name: course_info.name,
    lessons: course_info.lessons,
    discription: course_info.discription,
    user_ids: course_info.user_ids,
    comments: course_info.comments
  }
}