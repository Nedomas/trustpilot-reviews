import React, { Component } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Stars from "./Stars";

class Rate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      badReview: false,
      opened: false,
    };
  }

  handleReview(num) {
    this.setState({
      opened: true,
    });

    if (num > 3) return;
    this.handleBadReview();
  }
  handleBadReview() {
    this.setState({
      badReview: true
    });
  }
  render() {
    const { badReview } = this.state;

    return (
      <div>
        <div style={styles.header}>
          <div style={styles.innerContainer}>
            <img src='/trustpilot-logo.png' style={styles.logo} />
          </div>
        </div>

        <div style={styles.innerContainer}>
          <div style={styles.headline}>
            Voice your opinion! Review Apple Support now.
          </div>

          <div style={styles.splitContainer}>
            <div style={styles.rating.container}>
              <div style={styles.rating.label}>
                Rating
              </div>
              <div style={styles.rating.stars}>
                <div style={styles.stars}>
                  <Stars handleClick={num => this.handleReview(num)} />
                </div>
                <div style={styles.rating.description}>
                  Roll over stars, then click to rate.
                </div>
              </div>

              <div style={styles.comment.container}>
                <div style={styles.rating.label}>
                  Your review
                </div>
                <textarea style={styles.comment.textarea} placeholder='Share your honest experience, and help others make better choices.'/>
              </div>

              <div style={styles.title.container}>
                <div style={styles.rating.label}>
                  Title of your review
                </div>
                <input style={styles.title.input} />
              </div>
            </div>
            <div style={styles.description.container}>
              <div style={styles.description.headline}>
                What is Trustpilot?
              </div>
              <div style={styles.description.description}>
                Trustpilot is a review community. We help consumers everywhere find companies they can trust.
              </div>
              <div style={styles.description.headline}>
                Share your experiences
              </div>
              <div style={styles.description.description}>
                and be a part of our community. It couldn't be easier - with your Trustpilot account you can write, edit and share your reviews from one convenient location.
              </div>
            </div>
          </div>
        </div>

        {badReview ? (
          <style>{"#fb-root {display: initial;}"}</style>
        ) : (
          <style>{"#fb-root {display: none;}"}}</style>
        )}
        <MessengerCustomerChat
          pageId="369078686897983"
          appId="369233150149061"
        />
      </div>
    );
  }
}

export default Rate;

const styles = {
  innerContainer: {
    maxWidth: '960px',
    margin: '0 auto',
  },
  header: {
    borderBottom: '1px solid #EEEEEE',
  },
  logo: {
    height: '50px',
  },
  headline: {
    padding: '30px 0',
    fontSize: '30px',
  },
  splitContainer: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  rating: {
    container: {
      backgroundColor: '#F2F2F2',
      padding: '30px 30px',
      borderRadius: '5px',
      width:'60%',
    },
    label: {
      color: '#7E7E7E',
      fontWeight: 550,
      fontSize: '18px',
    },
    stars: {
      display: 'flex',
    },
    description: {
      padding: '20px 10px',
      color: '#7E7E7E',
      fontStyle: 'italic',
    },
  },
  description: {
    container: {
      paddingLeft: '20px',
      width: '40%',
    },
    headline: {
      paddingTop: '30px',
      color: '#2D5095',
      fontSize: '21px',
      fontWeight: 550,
    },
    description: {
      color: '#7E7E7E',
    },
  },
  comment: {
    container: {
      paddingTop: '10px',
    },
    textarea: {
      width: '100%',
      border: '1px solid #A9A9A9',
      minHeight: '200px',
      fontSize: '16px',
      padding: '5px',
    },
  },
  stars: {
    marginTop: '-20px',
  },
  title: {
    container: {
      paddingTop: '20px',
    },
    input: {
      width: '100%',
      fontSize: '16px',
      padding: '5px',
      backgroundColor: '#F2F2F2',
      border: '1px solid #A9A9A9',
    },
  },
};
