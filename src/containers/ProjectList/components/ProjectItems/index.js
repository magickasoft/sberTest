import React from 'react';
import { CardAnt } from 'components';
import css from './styles.less';

const Item = ({ name, descriptionHTML }) => (
  <CardAnt title={name} className={css.card}>
    <p dangerouslySetInnerHTML={{__html: descriptionHTML}} />
  </CardAnt>
);

const ProjectItems = ({ items }) => items.map(({ node }, index) => <Item key={index} {...node} />);

export default ProjectItems;



