import { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";

export default function App() {
  return (
    <div>
      <TextExpander className="box">
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        className="box"
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

TextExpander.propTypes = {
  expanded: PropTypes.bool,
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string,
};

function TextExpander({
  className,
  expanded = false,
  collapsedNumWords = 10,
  expandButtonText = "Show more...",
  collapseButtonText = "Show less",
  buttonColor = "#cc3399",
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  function handleOnClick() {
    setIsExpanded((e) => !e);
  }

  return (
    <div className={className}>
      <span>
        {isExpanded
          ? children
          : `${children.split(" ").slice(0, collapsedNumWords).join(" ")}...`}
      </span>
      <Button buttonColor={buttonColor} onClick={handleOnClick}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </Button>
    </div>
  );
}

function Button({ buttonColor, children, onClick }) {
  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    marginLeft: "10px",
    cursor: "pointer",
    color: buttonColor,
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  );
}
