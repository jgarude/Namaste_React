const createHeading = (heading, subHeading) => {
  return React.createElement(
    'div',
    { className: 'container' },
    React.createElement('h1', { className: 'heading' }, heading),
    React.createElement('h3', { className: 'sub-heading' }, subHeading),
    React.createElement(
      'a',
      { className: 'link', href: '../homework.html' },
      'Theory Homework'
    )
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(createHeading('Namaste React!!', 'Session 1 Assignment'));
