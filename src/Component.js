module.exports = class Component {
  constructor(props) {
    this.props = props;
  }
  render() {
    document.getElementById('root').append('test');
  }
};
