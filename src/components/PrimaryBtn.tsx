import "./PrimaryBtn.css";

interface Props {}

const PrimaryBtn: React.FC<Props> = props => {
  return (
    <button className="btn-container translate-up-5">
      <span></span>
      <p className="text">Resume</p>
    </button>
  );
};

export default PrimaryBtn;
