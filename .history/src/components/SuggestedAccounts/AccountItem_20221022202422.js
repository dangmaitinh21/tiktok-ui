import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div classNames={cx('account-item')}>
            <img
                classNames={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f4376eb4a748eb7e2eb7d961a0c2e5d2.jpeg?x-expires=1666616400&x-signature=CY7z0ytpdtHcbLrCbr3dA2dOLJc%3D"
                alt=""
            />
            <div classNames={cx('item-info')}>
                <p classNames={cx('user-name')}>
                    <strong>theanh28entertainment</strong>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>
                <p classNames={cx('display-name')}>Theanh28 Entertainment</p>
            </div>
        </div>
    );
}

AccountItem.protoTypes = {};
export default AccountItem;
