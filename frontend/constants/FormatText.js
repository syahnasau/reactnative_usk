const formatText = (text) => {
    const formattedText = text.replace(/\b\w/g, (char) => char.toUpperCase());
    return formattedText;
};

export default formatText;