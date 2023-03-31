function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';


const quoteData = [
{ text: `Just because something works, doesn’t mean it can’t be improved.`, author: "Shuri, Black Panther" },
{ text: `The hardest choices require the strongest wills.`, author: "Thanos" },
{ text: `No man can win every battle, but no man should fall without a struggle.`, author: "Peter Parker" },
{ text: `We never lose our demons. We only learn to live above them.`, author: "The Ancient One" },
{ text: `It's an imperfect world, but it's the only one we've got.`, author: "Tony Stark" },
{ text: `Even when you had two eyes, you'd see only half the picture`, author: "Odin Alfather" },
{ text: `I love you in every universe.`, author: "Doctor Strange" },
{ text: `The best part of my life was fake and none of you told me.`, author: "Yelena Belova" },
{ text: `With great power comes great responsibility.`, author: "Uncle Ben" },
{ text: `I would rather be a good man than a great king.`, author: "Thor" }];


const getRandomIndex = () =>
Math.round(Math.random() * (quoteData.length - 1 - 0) + 0);


const getRandomColor = () =>
'#' + Math.floor(Math.random() * 16777215).toString(16);


const QuoteBox = ({ quote, tweetURL, handleNewQuote, color }) => /*#__PURE__*/
React.createElement("div", { className: "wrapper d-flex align-items-center justify-content-center", style: { backgroundColor: color } }, /*#__PURE__*/
React.createElement("div", { className: "col-6 box p-4 rounded", id: "quote-box" }, /*#__PURE__*/
React.createElement("i", { className: "fas fa-quote-left" }), /*#__PURE__*/
React.createElement("h5", { className: "fw-bolder p-4", id: "text" },
quote.text), /*#__PURE__*/
React.createElement("div", { className: "mb-4" }, /*#__PURE__*/
React.createElement("h6", { className: "d-block text-end fw-bolder", id: "author" }, "- ", quote.author)), /*#__PURE__*/

React.createElement("div", { className: "d-flex justify-content-between" }, /*#__PURE__*/
React.createElement("a", { className: "btn btn-sm btn btn-primary", href: tweetURL, target: "_blank", id: "tweet-quote", style: { backgroundColor: color } }, /*#__PURE__*/
React.createElement("i", { className: "fab fa-twitter" }), "Tweet"), /*#__PURE__*/

React.createElement("button", {
  id: "new-quote",
  onClick: handleNewQuote,
  className: "btn btn-sm btn btn-primary",
  style: { backgroundColor: color } }, "Get Quote"))));







class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      quote: quoteData[getRandomIndex()],
      color: getRandomColor() });_defineProperty(this, "handleNewQuote",


    () => {
      this.setState({
        quote: quoteData[getRandomIndex()],
        color: getRandomColor() });

      document.body.style.backgroundColor = this.state.color;
    });}

  render() {
    const { quote, color } = this.state;

    const tweetURL = `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`;

    return /*#__PURE__*/(
      React.createElement("div", { className: "container-fluid", id: "quote-box-container" }, /*#__PURE__*/
      React.createElement(QuoteBox, { quote: quote, handleNewQuote: this.handleNewQuote, tweetURL: tweetURL, color: this.color })));


  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#app'));