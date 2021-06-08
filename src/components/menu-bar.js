
import styles from './menu-bar.module.scss'

export default function MenuBar({ rightMenu, menuBar: [toggleMenuBar, setToggleMenuBar] }) {

    const handleSubmenuClick = (e) => {
        let parent = e.target.parentElement;
        let subMenu = parent.querySelector(`.${styles.sub_menu}`);

        if (parent.classList.contains(styles.menu_item_has_children)) {
            subMenu.classList.toggle(styles.art_active);
            parent.classList.toggle('opened');
        }
    }

    return (
        <div className="art-menu-bar-fix">
            <div className={`${styles.art_menu_bar} ${toggleMenuBar && styles.art_active}`}>
                <div className={styles.art_menu_bar_frame}>
                    <div className={styles.art_menu_bar_header}>
                        <a className={`${styles.art_menu_bar_btn} ${rightMenu && styles.art_disabled} ${toggleMenuBar && styles.art_active}`} onClick={() => setToggleMenuBar(!toggleMenuBar)}>
                            <span></span>
                        </a>
                    </div>

                    <div className={styles.art_current_page}>
                        <a href="#">خانه</a>
                    </div>

                    <div className="art-scroll-frame">
                        <nav>
                            <ul className={styles.main_menu}>
                                <li className={`${styles.menu_item} ${styles.current_menu_item}`}>
                                    <a href="#">خانه</a>
                                </li>
                                <li className={styles.menu_item}>
                                    <a href="#">نمونه کار</a>
                                </li>
                                <li className={styles.menu_item}>
                                    <a href="#">تاریخچه</a>
                                </li>
                                <li className={styles.menu_item}>
                                    <a href="#">بلاگ</a>
                                </li>
                                <li className={styles.menu_item}>
                                    <a href="#">تماس با من</a>
                                </li>
                                {/* <li className={`${styles.menu_item} ${styles.menu_item_has_children}`}>
                                    <a href="#" onClick={handleSubmenuClick}>نمونه کار</a>
                                    <FontAwesomeIcon icon="chevron-left" />
                                    <ul className={styles.sub_menu}>
                                        <li className={styles.menu_item}>
                                            <a href="#">نمونه کار (2 ستونه)</a>
                                        </li>
                                    </ul>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}