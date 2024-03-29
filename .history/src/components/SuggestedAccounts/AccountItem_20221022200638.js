import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return <div classNames={cx('account-item')}></div>;
}

AccountItem.protoTypes = {};
export default AccountItem;
