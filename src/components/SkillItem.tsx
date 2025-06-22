import "./SkillItem.css";
interface Props {
  image: string;
  name: string;
}
const SkillItem = (props: Props) => {
  return (
    <a href="javascript:void(0)" className="skill-item">
      <img className="skill-img" src={props.image} alt={props.name} />
      <span className="skill-name">{props.name}</span>
    </a>
  );
};

export default SkillItem;
