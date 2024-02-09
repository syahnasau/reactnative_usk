const formatDate = (timestamp) => {
     const date = new Date(timestamp);
     const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric"};
     return date.toLocaleDateString(undefined, options);
};

export default formatDate;