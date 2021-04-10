export default function Navigator({ active, children }) {
    return children.filter(child => child.props.name == active)
  }