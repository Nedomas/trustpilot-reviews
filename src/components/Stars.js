import React, { Component } from "react";

class Stars extends Component {
  render() {
    return (
      <div className="reviewer__stars">
        {[5, 4, 3, 2, 1].map(num => {
          return [
            <input
							onClick={() => this.props.handleClick(num)}
              key={num}
              type="radio"
              required="required"
              id={`star${num}`}
              name="rating"
              value={num}
            />,
            <label key={`label${num}`} htmlFor={`star${num}`}>
              {num} Stars
            </label>
          ];
        })}
      </div>
    );
  }
}

export default Stars;
