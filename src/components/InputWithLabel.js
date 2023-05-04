import { useRef, useEffect } from "react";
import PropTypes from 'prop-types'

const InputWithLabel=({handleTitleChange, todoTitle, children})=>{

const inputRef = useRef();

useEffect(()=>{
inputRef.current.focus();
},[])

return(
    <>
    <label htmlFor="todoTitle">{children}</label>
      <input
        onChange={handleTitleChange}
        value={todoTitle}
        type="text"
        name="title"
        id="todoTitle"
        ref={inputRef}
       
      />
       </>
);

};

InputWithLabel.propTypes={
onInputWithLabel: PropTypes.func,
}

export default InputWithLabel;
