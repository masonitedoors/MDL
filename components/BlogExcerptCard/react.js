import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import style from './style.module.scss';
// components
import { Heading, P } from '../typography/react';

const cx = classNames.bind(style);

const BlogExcerptCard = ({ title, content, image, link }) => {
  return (
    <div className={classes.card}>
      <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
      <div className={classes.content}>
        <Heading level='3'>{title}</Heading>
        <P>{content}</P>
        <a href={link}>Share</a>
      </div>
    </div>
  );
};

BlogExcerptCard.propTypes = {
  /**
   * The card title.
   */
  title: PropTypes.string.isRequired,
  /**
   * The card's content area.
   */
  content: PropTypes.string.isRequired,
  /**
   * Image url used on the card
   */
  image: PropTypes.string.isRequired,
  /**
   * Href value for share button
   */
  link: PropTypes.string.isRequired,
};

BlogExcerptCard.defaultProps = {
  title: null,
  content: null,
  image: null,
  link: null,
};

export default BlogExcerptCard;
