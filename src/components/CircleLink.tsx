import { memo } from "react";
import "./CircleLink.css";
interface Props {
  image: string;
  link: string;
  linkTip?: string | null;
}
const CircleLink = (props: Props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      className={"circle-link toggle-link-tip"}
    >
      <img style={{ width: "32px", height: "32px" }} src={props.image} />
      {props.linkTip && <label className="link-tip">{props.linkTip}</label>}
    </a>
  );
};

export default memo(
  CircleLink,
  (prev, next) => prev.link === next.link && prev.linkTip === next.linkTip
);
