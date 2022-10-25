import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://haycafe.vn/wp-content/uploads/2022/03/Avatar-anime.jpg"
                    alt=""
                    width={32}
                />
                <Button primary>Follow</Button>
            </header>
        </div>
    );
}

export default AccountPreview;
