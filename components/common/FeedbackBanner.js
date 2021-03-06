// @flow

import React from 'react';
import { css } from 'glamor';

import { YELLOW } from '../style-constants';

import FeedbackForm from './FeedbackForm';

const BANNER_STYLE = css({
  backgroundColor: YELLOW,
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 5,
});

const FIT_DIALOG_STYLE = css({
  maxWidth: 1300,
  margin: '0 auto',
});

const BANNER_INNER_STYLE = css({
  minHeight: 30,
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  transition: 'max-width 200ms',
});

export type Props = {|
  fit: 'DIALOG' | 'PAGE',
|};

type State = {|
  feedbackFormVisible: boolean,
|};

export default class FeedbackBanner extends React.Component<Props, State> {
  state: State = {
    feedbackFormVisible: false,
  };

  showFeedbackForm = () => this.setState({ feedbackFormVisible: true });
  hideFeedbackForm = () => this.setState({ feedbackFormVisible: false });

  render() {
    const { fit } = this.props;
    const { feedbackFormVisible } = this.state;

    return (
      <div className={`${BANNER_STYLE.toString()}`}>
        <div
          className={`${fit === 'PAGE'
            ? 'b-c'
            : FIT_DIALOG_STYLE.toString()} ${BANNER_INNER_STYLE.toString()}`}
        >
          <span className="t--subtitle t--upper">
            Welcome to the new 311:
          </span>{' '}
          <span className="t--info t--s100">
            We would love to hear your{' '}
            <a
              href="javascript:void(0)"
              onClick={this.showFeedbackForm}
              className="t--w"
            >
              feedback
            </a>.
          </span>
        </div>

        {feedbackFormVisible && <FeedbackForm close={this.hideFeedbackForm} />}
      </div>
    );
  }
}
