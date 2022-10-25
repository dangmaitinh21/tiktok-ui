import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')} src="" alt="">
                <img className={cx('avatar')} src="" alt="" />
                <Button primary>Follow</Button>
            </header>
        </div>
    );
}

export default AccountPreview;
