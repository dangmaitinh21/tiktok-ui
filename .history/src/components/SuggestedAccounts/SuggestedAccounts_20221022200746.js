import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
function SuggestedAccounts({ label }) {
    return (
        <div classNames={cx('wrapper')}>
            <p classNames={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
        </div>
    );
}

SuggestedAccounts.protoTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
