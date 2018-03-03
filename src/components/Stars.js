import React, { Component } from "react";
import Radium from 'radium';

class Stars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: null,
      selected: null,
    };
  }

  handleMouseEnter(num) {
    this.setState({
      current: num,
    });
  }

  handleMouseLeave(num) {
    this.setState({
      current: null,
    });
  }

  backgroundColor(num) {
    if (num <= this.state.current) {
      return this.color(this.state.current);
    }

    if (num <= this.state.selected) {
      return this.color(this.state.selected);
    }

    return '#C8C8C8';
  }

  color(num) {
    const colors = [
      '#DF242F',
      '#F27332',
      '#F7CB35',
      '#75B04A',
      '#107E4F',
    ];

    return colors[num - 1];
  }

  handleClick(num) {
    this.props.handleClick(num);
    this.setState({
      selected: num,
    });
  }

  render() {
    return (
      <div className="reviewer__stars">
        {[1, 2, 3, 4, 5].map(num => {
          return [
            <div
              key={num}
              onClick={() => this.handleClick(num)}
              style={[styles.star, { backgroundColor: this.backgroundColor(num) }]}
              onMouseEnter={() => this.handleMouseEnter(num)}
              onMouseLeave={() => this.handleMouseLeave(num)}
            >
              ★
            </div>
          ];
        })}
      </div>
    );
  }
}

const styles = {
  star: {
    backgroundColor: '#C8C8C8',
    padding: '5px 10px',
    color: '#fff',
    fontSize: '25px',
    marginRight: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Radium(Stars);
