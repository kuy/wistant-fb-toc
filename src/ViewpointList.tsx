import CSS from "csstype"
import { Viewpoint } from "./strategies"

type Props = {
  items: Viewpoint[]
  onClick: (el: HTMLHeadElement) => void
}

export const ViewpointList: React.FC<Props> = ({ items, onClick }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem onClick={onClick}>{item}</ListItem>
      ))}
    </ul>
  )
}

const liStyle: CSS.Properties = {
  fontSize: "1.2rem",
  cursor: "pointer",
  lineHeight: "1.8",
}

type ListItemProps = {
  children: Viewpoint
  onClick: (el: HTMLHeadElement) => void
}

const ListItem: React.FC<ListItemProps> = ({ children, onClick }) => {
  return (
    <li style={liStyle} onClick={() => onClick(children.el)}>
      {children.title}
    </li>
  )
}
