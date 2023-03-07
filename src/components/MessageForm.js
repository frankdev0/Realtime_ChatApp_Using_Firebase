import React from "react";
import Attachment from "./svg/Attachment";
import Picker from 'emoji-picker-react';
import Emoji from "./svg/Emoji";
import UseOutsideClick from "./useOutsideClick";

const MessageForm = ({ handleSubmit, text, setText, setImg }) => {

  

  const {chosenEmoji,ref, setChosenEmoji} = UseOutsideClick(false);
  const handleShowEmoji = () => { setChosenEmoji((v) => !v)};
  const handleEmojiSelect = (e) => {setText((text) => (text += e.native))};
  return (
    <form className="message_form" onSubmit={handleSubmit}>
      <label htmlFor="img">
        <Attachment />
      </label>
      <input
      onChange={(e) => setImg(e.target.files[0])}
        type="file"
        id="img"
        accept="image/*"
        style={{ display: "none" }}
      />
      <div>
        <input
          type="text"
          placeholder="Enter message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div >
                  {chosenEmoji && (<div ref={ref} >
                    <Picker
                    onSelect={handleEmojiSelect}
                    emojiSize={20}/>
                  </div>)}
                </div>

     <button onClick={handleShowEmoji}>
       <Emoji/>
     </button>
      <div>
        <button className="btn">Send</button>
      </div>
    </form>
  );
};

export default MessageForm;
