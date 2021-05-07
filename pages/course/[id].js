import { getAllCourseIds, getPostData } from '../lib/course'
import Comments from '../components/Comments'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = await getAllCourseIds()
  return {
    paths,
    fallback: false
  }
}


export default function Course(props) {
  const {id, type, admins, name, lessons, discription, user_ids, comments} = props.postData;
  return (
    <Comments user_id="none" imgLink="https://thispersondoesnotexist.com/image" name="John" comments={comments} page_id={id} type={type}/>
  )
}