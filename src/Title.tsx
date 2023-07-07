import CSS from "csstype"

type Props = {
  children: string
}

const h3Style: CSS.Properties = {
  fontWeight: "bold",
  fontSize: "1.4rem",
  lineHeight: "1.8rem",
  textAlign: "left",
  color: "rgb(32, 34, 34)",
}

export const Title: React.FC<Props> = ({ children }) => {
  return <h3 style={h3Style}>{children}</h3>
}
