import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExpIcon = ({ type = "fas", name }) => {
  return (
    <FontAwesomeIcon icon={[type, name]} color="#ff4c60" size="2x" />
  );
};

export default ExpIcon;
