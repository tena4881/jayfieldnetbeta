import React, { useState, Fragment } from "react";
// import ReactDOM from "react-dom";
import Poll from "react-polls";


const PollModal = (props) => {
  const [question, setQuestion] = useState("What shall be done with inactive JayFieldNet Members?");
  const [inputFields, setInputFields] = useState(["Boot them", "Boot them & reallocate spots","Keep Them","Keep them and open more spots"]);

  const pollAnswers = [
    { option: "Boot them", votes: 0 },
    { option: "Boot them & reallocate spots", votes: 0 },
    { option: "Keep Them", votes: 0 },
    { option: "Keep them and open more spots", votes: 0 },
  ];

  function handleVote(selectedOptions) {
    //Call contract function
  }
  return (
    <>
      <div>
        <Poll
          question={question}
          answers={pollAnswers}
          onVote={(e) => handleVote(e)}
          noStorage
        />
      </div>
    </>
  );
};

const TagsInput = (props) => {
  const [tags, setTags] = useState(props.tags);
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  function openModal(props) {
    return <PollModal props={props} />;
  }

  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <>
      <div className="question-input">
        <input
          type="text"
          onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
          placeholder="Press enter a question"
        />
      </div>
      <div className="tags-input">
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span
                className="tag-close-icon"
                onClick={() => removeTags(index)}
              >
                x
              </span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
          placeholder="Press enter options to choose from"
        />
      </div>
      <br />
      <button onClick={openModal}>submit</button>
    </>
  );
};

const App = () => {
  const selectedTags = (tags) => {
    console.log(tags);
  };

  return (
    <div className="App">
      <br />
      <TagsInput selectedTags={selectedTags} tags={["optionsA", "optionB"]} />
    </div>
  );
};

export default PollModal;
