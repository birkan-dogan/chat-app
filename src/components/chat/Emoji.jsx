import EmojiPicker, {
  EmojiStyle,
  SkinTones,
  Theme,
  Categories,
  SuggestionMode,
} from "emoji-picker-react";

const EmojiSearch = ({ setText }) => {
  const onEmojiClick = (emojiData) => {
    setText((prevInput) => prevInput + emojiData.emoji);
  };

  return (
    <div className="emoji">
      <EmojiPicker
        onEmojiClick={onEmojiClick}
        autoFocusSearch={false}
        theme={Theme.AUTO}
        emojiVersion="5.0"
        lazyLoadEmojis={true}
        previewConfig={{
          defaultCaption: "Pick one!",
          defaultEmoji: "1f92a", // 🤪
        }}
        suggestedEmojisMode={SuggestionMode.RECENT}
        skinTonesDisabled
        searchDisabled={true}
        defaultSkinTone={SkinTones.NEUTRAL}
        emojiStyle={EmojiStyle.NATIVE}
        categories={[
          {
            category: Categories.SUGGESTED,
            name: "Recently Used",
          },
          {
            name: "Smiles & Emotions",
            category: Categories.SMILEYS_PEOPLE,
          },
          {
            name: "Fun and Games",
            category: Categories.ACTIVITIES,
          },
          {
            name: "Animals",
            category: Categories.ANIMALS_NATURE,
          },
          {
            name: "Yum Yum",
            category: Categories.FOOD_DRINK,
          },
        ]}
      />
    </div>
  );
};

export default EmojiSearch;
