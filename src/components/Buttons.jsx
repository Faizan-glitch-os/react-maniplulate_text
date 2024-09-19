import PropTypes from "prop-types";

export default function Buttons(props) {
  return (
    <button onClick={props.buttonClick} className={props.whichButton}>
      {props.buttonName}
    </button>
  );
}

Buttons.propTypes = {
  whichButton: PropTypes.string,
  buttonName: PropTypes.string,
};
