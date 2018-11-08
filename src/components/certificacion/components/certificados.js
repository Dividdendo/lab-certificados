import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

function Certificados(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar alt="Remy Sharp" src="http://www.dividendoporcolombia.org/es/wp-content/uploads/2018/03/LOGODXC-01-2.jpg"
       className={classes.bigAvatar} />
      <Avatar
        alt="Adelle Charles"
        src="https://tentulogo.com/wp-content/uploads/IBM-logo-1.jpg"
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
    </div>
  );
}

Certificados.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Certificados);