import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <Tippy>
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f4376eb4a748eb7e2eb7d961a0c2e5d2.jpeg?x-expires=1666616400&x-signature=CY7z0ytpdtHcbLrCbr3dA2dOLJc%3D"
                    alt=""
                />
                <div className={cx('item-info')}>
                    <p className={cx('user-name')}>
                        <strong>theanh28entertainment</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('display-name')}>Theanh28 Entertainment</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.protoTypes = {};
export default AccountItem;
