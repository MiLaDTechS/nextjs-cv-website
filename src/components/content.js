
import styles from './content.module.scss'
import Typed from 'typed.js';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay]);
import { Swiper, SwiperSlide } from 'swiper/react';
import Masonry from 'react-masonry-css'
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/dist/plugins/overscroll';
Scrollbar.use(OverscrollPlugin);

export default function Content({ rightMenu: [toggleRightMenu, setToggleRightMenu], menuBar: [toggleMenuBar, setToggleMenuBar] }) {
    const [nameFocused, setNameFocused] = useState(false);
    const [mailFocused, setMailFocused] = useState(false);
    const [messageFocused, setMessageFocused] = useState(false);

    useEffect(() => {

        Scrollbar.init(document.querySelector('#scrollbar-content'));

        const typed = new Typed('.txt-rotate', {
            strings: ["رابط کاربری", "وب اپلیکیشن", "اپلیکیشن موبایل", "وب سایت"],
            typeSpeed: 120,
            loop: true,
            backSpeed: 30,
            backDelay: 2000
        });

    }, [])

    const handleBackdropClick = (e) => {
        setToggleRightMenu(false);
        setToggleMenuBar(false);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={`${styles.art_content} ${(toggleRightMenu || toggleMenuBar) && styles.art_active}`}>
            <div className={styles.art_curtain} onClick={handleBackdropClick}></div>

            <div className={styles.art_top_bg}>
                <div className={styles.art_top_bg_overlay}></div>
            </div>

            <div id="scrollbar-content" className="art-scroll-frame-content">
                <div className={styles.page}>
                    <div className={styles.section_wrap}>
                        <section id="start-section" className={styles.section}>
                            <div className={styles.container}>
                                <div className={styles.e_row}>
                                    <div className={`${styles.column} ${styles.col_100}`}>
                                        <div className={styles.column_wrap}>
                                            <div className={styles.widget_wrap}>
                                                <div className={`${styles.element} ${styles.widget}`}>
                                                    <div className={styles.widget_container}>
                                                        <div className={styles.container_fluid}>
                                                            <div className={`${styles.row} ${styles.p_30_0} ${styles.p_md_15_0}`}>
                                                                <div className="col-lg-12">
                                                                    <div className={`${styles.art_a} ${styles.art_banner}`}>
                                                                        <div className={styles.art_banner_back}></div>
                                                                        <div className="art-banner-dec"></div>
                                                                        <div className={styles.art_banner_overlay}>
                                                                            <div className={styles.art_banner_title}>
                                                                                <h1 className={styles.mb_15}>
                                                                                    <span>
                                                                                        رزومه و نمونه کارهای من را <br />مشاهده کنید!
                                                                                    </span>
                                                                                </h1>

                                                                                <div className={`${styles.art_lg_text} ${styles.art_code} ${styles.mb_25}`}>
                                                                                    &lt;/<i>code</i>&gt;
                                                                                    مهارت در ساخت{' '}
                                                                                    <span className="txt-rotate"></span>{' '}
                                                                                    &lt;<i>code</i>&gt;
                                                                                </div>

                                                                                <div className={styles.art_buttons_frame}>
                                                                                    <a href="#" className={`${styles.art_btn} ${styles.art_btn_md}`}>
                                                                                        <span>مشاهده نمونه کارها</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>

                                                                            <img src="/images/face-2.png" className={styles.art_banner_photo} alt="تصویر" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <div className={styles.container}>
                                <div className={styles.e_row}>
                                    <div className={`${styles.column} ${styles.col_100}`}>
                                        <div className={styles.column_wrap}>
                                            <div className={styles.widget_wrap}>
                                                <div className={`${styles.element} ${styles.widget}`}>
                                                    <div className={styles.widget_container}>
                                                        <div className={styles.container_fluid}>
                                                            <div className={`${styles.row}`}>
                                                                <div className="col-md-3 col-6">
                                                                    <div className={styles.art_counter_frame}>
                                                                        <div className={styles.art_counter_box}>
                                                                            <span className={styles.art_counter}>10</span>
                                                                            <span className={styles.art_counter_plus}>+</span>
                                                                        </div>
                                                                        <h6>
                                                                            <span>&nbsp; سال تجربه کاری</span>
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3 col-6">
                                                                    <div className={styles.art_counter_frame}>
                                                                        <div className={styles.art_counter_box}>
                                                                            <span className={styles.art_counter}>143</span>
                                                                        </div>
                                                                        <h6>
                                                                            <span>&nbsp; پروژه انجام شده</span>
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3 col-6">
                                                                    <div className={styles.art_counter_frame}>
                                                                        <div className={styles.art_counter_box}>
                                                                            <span className={styles.art_counter}>114</span>
                                                                        </div>
                                                                        <h6>
                                                                            <span>&nbsp; مشتری رضایتمند</span>
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3 col-6">
                                                                    <div className={styles.art_counter_frame}>
                                                                        <div className={styles.art_counter_box}>
                                                                            <span className={styles.art_counter}>20</span>
                                                                            <span className={styles.art_counter_plus}>+</span>
                                                                        </div>
                                                                        <h6>
                                                                            <span>&nbsp; جوایز و دستاوردها</span>
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <div className={styles.container}>
                                <div className={styles.e_row}>
                                    <div className={`${styles.column} ${styles.col_100}`}>
                                        <div className={styles.column_wrap}>
                                            <div className={styles.widget_wrap}>
                                                <div className={`${styles.element} ${styles.widget}`}>
                                                    <div className={styles.widget_container}>
                                                        <div className={styles.container_fluid}>
                                                            <div className={`${styles.row}`}>
                                                                <div className="col-lg-12">
                                                                    <div className={styles.art_section_title}>
                                                                        <div className={styles.art_title_frame}>
                                                                            <h4 className={styles.art_title_h}>
                                                                                <span>خدمات ما</span>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className={`${styles.art_a} ${styles.art_service_icon_box}`}>
                                                                        <div className={styles.art_service_ib_content}>
                                                                            <h5 className={styles.mb_15}>
                                                                                <span>طراحی وب سایت</span>
                                                                            </h5>

                                                                            <div className={styles.mb_15}>
                                                                                <div>
                                                                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className={styles.art_buttons_frame}>
                                                                                <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                    <span>سفارش پروژه</span>
                                                                                    <FontAwesomeIcon icon="angle-left" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className={`${styles.art_a} ${styles.art_service_icon_box}`}>
                                                                        <div className={styles.art_service_ib_content}>
                                                                            <h5 className={styles.mb_15}>
                                                                                <span>طراحی وب اپلیکیشن</span>
                                                                            </h5>

                                                                            <div className={styles.mb_15}>
                                                                                <div>
                                                                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className={styles.art_buttons_frame}>
                                                                                <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                    <span>سفارش پروژه</span>
                                                                                    <FontAwesomeIcon icon="angle-left" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className={`${styles.art_a} ${styles.art_service_icon_box}`}>
                                                                        <div className={styles.art_service_ib_content}>
                                                                            <h5 className={styles.mb_15}>
                                                                                <span>طراحی رابط کاربری</span>
                                                                            </h5>

                                                                            <div className={styles.mb_15}>
                                                                                <div>
                                                                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className={styles.art_buttons_frame}>
                                                                                <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                    <span>سفارش پروژه</span>
                                                                                    <FontAwesomeIcon icon="angle-left" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className={`${styles.art_a} ${styles.art_service_icon_box}`}>
                                                                        <div className={styles.art_service_ib_content}>
                                                                            <h5 className={styles.mb_15}>
                                                                                <span>طراحی تجربه کاربری</span>
                                                                            </h5>

                                                                            <div className={styles.mb_15}>
                                                                                <div>
                                                                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className={styles.art_buttons_frame}>
                                                                                <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                    <span>سفارش پروژه</span>
                                                                                    <FontAwesomeIcon icon="angle-left" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className={`${styles.art_a} ${styles.art_service_icon_box}`}>
                                                                        <div className={styles.art_service_ib_content}>
                                                                            <h5 className={styles.mb_15}>
                                                                                <span>طراحی بازی</span>
                                                                            </h5>

                                                                            <div className={styles.mb_15}>
                                                                                <div>
                                                                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className={styles.art_buttons_frame}>
                                                                                <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                    <span>سفارش پروژه</span>
                                                                                    <FontAwesomeIcon icon="angle-left" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className={`${styles.art_a} ${styles.art_service_icon_box}`}>
                                                                        <div className={styles.art_service_ib_content}>
                                                                            <h5 className={styles.mb_15}>
                                                                                <span>طراحی اپ موبایل</span>
                                                                            </h5>

                                                                            <div className={styles.mb_15}>
                                                                                <div>
                                                                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className={styles.art_buttons_frame}>
                                                                                <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                    <span>سفارش پروژه</span>
                                                                                    <FontAwesomeIcon icon="angle-left" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <div className={styles.container}>
                                <div className={styles.e_row}>
                                    <div className={`${styles.column} ${styles.col_100}`}>
                                        <div className={styles.column_wrap}>
                                            <div className={styles.widget_wrap}>
                                                <div className={`${styles.element} ${styles.widget}`}>
                                                    <div className={styles.widget_container}>
                                                        <div className={styles.container_fluid}>
                                                            <div className={`${styles.row}`}>
                                                                <div className="col-lg-12">
                                                                    <div className={styles.art_section_title}>
                                                                        <div className={styles.art_title_frame}>
                                                                            <h4 className={styles.art_title_h}>
                                                                                <span>تعرفه خدمات</span>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className={`${styles.art_a} ${styles.art_price}`}>
                                                                        <div className={styles.art_price_body}>
                                                                            <h5 className={styles.mb_25}>
                                                                                <span>پلن پایه</span>
                                                                            </h5>

                                                                            <div className={styles.art_price_cost}>
                                                                                <div className={styles.art_number}>
                                                                                    <span className={styles.art_number_span}>
                                                                                        <span>هزارتومان / </span>
                                                                                    </span>
                                                                                    <span>80</span>
                                                                                    <span className={styles.art_number_span}>
                                                                                        <span>ساعت</span>
                                                                                    </span>
                                                                                    <sup>*</sup>
                                                                                </div>
                                                                            </div>

                                                                            <div className={styles.art_price_list}>
                                                                                <div>
                                                                                    <ul>
                                                                                        <li>
                                                                                            <FontAwesomeIcon icon="check" />
                                                                                            طراحی رابط کاربری
                                                                                        </li>
                                                                                        <li>
                                                                                            <FontAwesomeIcon icon="check" />
                                                                                            طراحی وایر فریم
                                                                                        </li>
                                                                                        <li className={styles.art_empty_item}>
                                                                                            <FontAwesomeIcon icon="times" />
                                                                                            طراحی لوگو
                                                                                        </li>
                                                                                        <li className={styles.art_empty_item}>
                                                                                            <FontAwesomeIcon icon="times" />
                                                                                            بهینه سازی و سئو
                                                                                        </li>
                                                                                        <li className={styles.art_empty_item}>
                                                                                            <FontAwesomeIcon icon="times" />
                                                                                            طراحی وردپرس
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                            <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                <span>سفارش پروژه</span>
                                                                                <FontAwesomeIcon icon="angle-left" />
                                                                            </a>

                                                                            <div className={styles.art_asterisk}>
                                                                                <sup>*</sup>
                                                                                <span> تعداد دفعات تغییر یک بار می باشد</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className={`${styles.art_a} ${styles.art_price} ${styles.art_popular_price}`}>
                                                                        <div className={styles.art_price_body}>
                                                                            <h5 className={styles.mb_25}>
                                                                                <span>پلن اقتصادی</span>
                                                                            </h5>

                                                                            <div className={styles.art_price_cost}>
                                                                                <div className={styles.art_number}>
                                                                                    <span className={styles.art_number_span}>
                                                                                        <span>هزارتومان / </span>
                                                                                    </span>
                                                                                    <span>100</span>
                                                                                    <span className={styles.art_number_span}>
                                                                                        <span>ساعت</span>
                                                                                    </span>
                                                                                </div>
                                                                            </div>

                                                                            <div className={styles.art_price_list}>
                                                                                <div>
                                                                                    <ul>
                                                                                        <li>
                                                                                            <FontAwesomeIcon icon="check" />
                                                                                            طراحی رابط کاربری
                                                                                        </li>
                                                                                        <li>
                                                                                            <FontAwesomeIcon icon="check" />
                                                                                            طراحی وب
                                                                                        </li>
                                                                                        <li>
                                                                                            <FontAwesomeIcon icon="check" />
                                                                                            طراحی لوگو
                                                                                        </li>
                                                                                        <li className={styles.art_empty_item}>
                                                                                            <FontAwesomeIcon icon="times" />
                                                                                            بهینه سازی و سئو
                                                                                        </li>
                                                                                        <li className={styles.art_empty_item}>
                                                                                            <FontAwesomeIcon icon="times" />
                                                                                            طراحی وردپرس
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                            <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                <span>سفارش پروژه</span>
                                                                                <FontAwesomeIcon icon="angle-left" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className={`${styles.art_a} ${styles.art_price}`}>
                                                                        <div className={styles.art_price_body}>
                                                                            <h5 className={styles.mb_25}>
                                                                                <span>پلن حرفه ای</span>
                                                                            </h5>

                                                                            <div className={styles.art_price_cost}>
                                                                                <div className={styles.art_number}>
                                                                                    <span className={styles.art_number_span}>
                                                                                        <span>هزارتومان / </span>
                                                                                    </span>
                                                                                    <span>200</span>
                                                                                    <span className={styles.art_number_span}>
                                                                                        <span>ساعت</span>
                                                                                    </span>
                                                                                </div>
                                                                            </div>

                                                                            <div className={styles.art_price_list}>
                                                                                <div>
                                                                                    <ul>
                                                                                        <li>
                                                                                            <FontAwesomeIcon icon="check" />
                                                                                            طراحی رابط کاربری
                                                                                        </li>
                                                                                        <li>
                                                                                            <FontAwesomeIcon icon="check" />
                                                                                            طراحی وب
                                                                                        </li>
                                                                                        <li>
                                                                                            <FontAwesomeIcon icon="check" />
                                                                                            طراحی لوگو
                                                                                        </li>
                                                                                        <li>
                                                                                            <FontAwesomeIcon icon="check" />
                                                                                            بهینه سازی و سئو
                                                                                        </li>
                                                                                        <li>
                                                                                            <FontAwesomeIcon icon="check" />
                                                                                            طراحی وردپرس
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                            <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                <span>سفارش پروژه</span>
                                                                                <FontAwesomeIcon icon="angle-left" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <div className={styles.container}>
                                <div className={styles.e_row}>
                                    <div className={`${styles.column} ${styles.col_100}`}>
                                        <div className={styles.column_wrap}>
                                            <div className={styles.widget_wrap}>
                                                <div className={`${styles.element} ${styles.widget}`}>
                                                    <div className={styles.widget_container}>
                                                        <div className={styles.container_fluid}>
                                                            <div className={`${styles.row}`}>
                                                                <div className="col-lg-12">
                                                                    <div className={styles.art_section_title}>
                                                                        <div className={styles.art_title_frame}>
                                                                            <h4 className={styles.art_title_h}>
                                                                                <span>نظرات کاربران</span>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-12">
                                                                    <Swiper
                                                                        speed={1500}
                                                                        spaceBetween={30}
                                                                        slidesPerView={1}
                                                                        pagination={{ el: '.art-sn-left', clickable: true }}
                                                                        navigation={{ prevEl: '.art-testi-swiper-prev', nextEl: '.art-testi-swiper-next' }}
                                                                        style={{ overflow: 'visible' }}
                                                                        breakpoints={{
                                                                            "720": {
                                                                                "slidesPerView": 2,

                                                                            }
                                                                        }}
                                                                    >
                                                                        <SwiperSlide>
                                                                            <div className={`${styles.art_a} ${styles.art_testimonial}`}>
                                                                                <div className={styles.testimonial_body}>
                                                                                    <img className={styles.art_testimonial_face} src="/images/testimonial-1-1.jpg" alt="مینا رضایی" />
                                                                                    <h5>
                                                                                        <span>مینا رضایی</span>
                                                                                    </h5>
                                                                                    <div className={`${styles.art_el_suptitle} ${styles.mb_15}`}>
                                                                                        <span>گروه الف</span>
                                                                                    </div>
                                                                                    <div className={`${styles.mb_15} art-el-description`}>
                                                                                        <div>
                                                                                            <p>همکاری با علی یک تجربه بسیار لذت بخش بود.در کنار تخصصی که در کار دارد از اخلاق خوبی برخوردار است و همیشه مانند یک دوست و حامی همراه اعضای گروه است.از او چیزهای بسیازی زیادی یاد گرفتم که همیشه برای من ارزشمند است.</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className={styles.art_testimonial_footer}>
                                                                                    <div className="art-left-side">
                                                                                        <ul className={styles.art_star_rate}>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="art-right-side"></div>
                                                                                </div>
                                                                            </div>
                                                                        </SwiperSlide>
                                                                        <SwiperSlide>
                                                                            <div className={`${styles.art_a} ${styles.art_testimonial}`}>
                                                                                <div className={styles.testimonial_body}>
                                                                                    <img className={styles.art_testimonial_face} src="/images/testimonial-1-1.jpg" alt="مینا رضایی" />
                                                                                    <h5>
                                                                                        <span>مینا رضایی</span>
                                                                                    </h5>
                                                                                    <div className={`${styles.art_el_suptitle} ${styles.mb_15}`}>
                                                                                        <span>گروه الف</span>
                                                                                    </div>
                                                                                    <div className={`${styles.mb_15} art-el-description`}>
                                                                                        <div>
                                                                                            <p>همکاری با علی یک تجربه بسیار لذت بخش بود.در کنار تخصصی که در کار دارد از اخلاق خوبی برخوردار است و همیشه مانند یک دوست و حامی همراه اعضای گروه است.از او چیزهای بسیازی زیادی یاد گرفتم که همیشه برای من ارزشمند است.</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className={styles.art_testimonial_footer}>
                                                                                    <div className="art-left-side">
                                                                                        <ul className={styles.art_star_rate}>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="art-right-side"></div>
                                                                                </div>
                                                                            </div>
                                                                        </SwiperSlide>
                                                                        <SwiperSlide>
                                                                            <div className={`${styles.art_a} ${styles.art_testimonial}`}>
                                                                                <div className={styles.testimonial_body}>
                                                                                    <img className={styles.art_testimonial_face} src="/images/testimonial-1-1.jpg" alt="مینا رضایی" />
                                                                                    <h5>
                                                                                        <span>مینا رضایی</span>
                                                                                    </h5>
                                                                                    <div className={`${styles.art_el_suptitle} ${styles.mb_15}`}>
                                                                                        <span>گروه الف</span>
                                                                                    </div>
                                                                                    <div className={`${styles.mb_15} art-el-description`}>
                                                                                        <div>
                                                                                            <p>همکاری با علی یک تجربه بسیار لذت بخش بود.در کنار تخصصی که در کار دارد از اخلاق خوبی برخوردار است و همیشه مانند یک دوست و حامی همراه اعضای گروه است.از او چیزهای بسیازی زیادی یاد گرفتم که همیشه برای من ارزشمند است.</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className={styles.art_testimonial_footer}>
                                                                                    <div className="art-left-side">
                                                                                        <ul className={styles.art_star_rate}>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="art-right-side"></div>
                                                                                </div>
                                                                            </div>
                                                                        </SwiperSlide>
                                                                        <SwiperSlide>
                                                                            <div className={`${styles.art_a} ${styles.art_testimonial}`}>
                                                                                <div className={styles.testimonial_body}>
                                                                                    <img className={styles.art_testimonial_face} src="/images/testimonial-1-1.jpg" alt="مینا رضایی" />
                                                                                    <h5>
                                                                                        <span>مینا رضایی</span>
                                                                                    </h5>
                                                                                    <div className={`${styles.art_el_suptitle} ${styles.mb_15}`}>
                                                                                        <span>گروه الف</span>
                                                                                    </div>
                                                                                    <div className={`${styles.mb_15} art-el-description`}>
                                                                                        <div>
                                                                                            <p>همکاری با علی یک تجربه بسیار لذت بخش بود.در کنار تخصصی که در کار دارد از اخلاق خوبی برخوردار است و همیشه مانند یک دوست و حامی همراه اعضای گروه است.از او چیزهای بسیازی زیادی یاد گرفتم که همیشه برای من ارزشمند است.</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className={styles.art_testimonial_footer}>
                                                                                    <div className="art-left-side">
                                                                                        <ul className={styles.art_star_rate}>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                            <li>
                                                                                                <FontAwesomeIcon icon="star" />
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="art-right-side"></div>
                                                                                </div>
                                                                            </div>
                                                                        </SwiperSlide>
                                                                    </Swiper>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <div className="art-slider-navigation">
                                                                        <div className="art-sn-left"></div>

                                                                        <div className="art-sn-right">
                                                                            <div className="art-slider-nav-frame">
                                                                                <div className="art-slider-nav art-testi-swiper-prev">
                                                                                    <FontAwesomeIcon icon="chevron-right" />
                                                                                </div>

                                                                                <div className="art-slider-nav art-testi-swiper-next">
                                                                                    <FontAwesomeIcon icon="chevron-left" />
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <div className={styles.container}>
                                <div className={styles.e_row}>
                                    <div className={`${styles.column} ${styles.col_100}`}>
                                        <div className={styles.column_wrap}>
                                            <div className={styles.widget_wrap}>
                                                <div className={`${styles.element} ${styles.widget}`}>
                                                    <div className={styles.widget_container}>
                                                        <div className={styles.container_fluid}>
                                                            <div className={`${styles.row}`}>
                                                                <div className="col-lg-12">
                                                                    <div className={styles.art_section_title}>
                                                                        <div className={styles.art_title_frame}>
                                                                            <h4 className={styles.art_title_h}>
                                                                                <span>نمونه کارها</span>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-12">
                                                                    <div className={`${styles.art_filter} ${styles.mb_25}`}>
                                                                        <a href="#" className={`${styles.art_link} ${styles.art_current}`}>همه دسته بندی ها</a>
                                                                        <a href="#" className={styles.art_link}>لوگو</a>
                                                                        <a href="#" className={styles.art_link}>طراحی وب</a>
                                                                        <a href="#" className={styles.art_link}>طراحی</a>
                                                                        <a href="#" className={styles.art_link}>تجربه کاربری</a>
                                                                    </div>
                                                                </div>

                                                                <Masonry
                                                                    breakpointCols={{
                                                                        default: 3,
                                                                        1200: 2,
                                                                        720: 1
                                                                    }}
                                                                    className="art-grid art-grid-3-col art-gallery art-grid-masonry"
                                                                    columnClassName="art-grid-items">

                                                                    <div className="art-grid-item category-ui-elements">
                                                                        <a href="#" className="art-a art-portfolio-item-frame">
                                                                            <img src="/images/work-1-1.jpg" alt="طراحی کارت مجوز" />
                                                                            <span className="art-item-hover">
                                                                                <FontAwesomeIcon icon="expand" />
                                                                            </span>
                                                                        </a>
                                                                        <div className="art-item-description">
                                                                            <h5 className={styles.mb_15}>طراحی کارت مجوز</h5>
                                                                            <div className={styles.mb_15}>طراحی کارت مجوز به سفارش شرکت وی</div>
                                                                            <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                <span>بیشتر بخوانید</span>
                                                                                <FontAwesomeIcon icon="angle-left" />
                                                                            </a>
                                                                        </div>

                                                                    </div>
                                                                    <div className="art-grid-item category-ui-elements">
                                                                        <a href="#" className="art-a art-portfolio-item-frame">
                                                                            <img src="/images/work-2-1.jpg" alt="طراحی کارت مجوز" />
                                                                            <span className="art-item-hover">
                                                                                <FontAwesomeIcon icon="expand" />
                                                                            </span>
                                                                        </a>
                                                                        <div className="art-item-description">
                                                                            <h5 className={styles.mb_15}>طراحی کارت مجوز</h5>
                                                                            <div className={styles.mb_15}>طراحی کارت مجوز به سفارش شرکت وی</div>
                                                                            <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                <span>بیشتر بخوانید</span>
                                                                                <FontAwesomeIcon icon="angle-left" />
                                                                            </a>
                                                                        </div>

                                                                    </div>
                                                                    <div className="art-grid-item category-ui-elements">
                                                                        <a href="#" className="art-a art-portfolio-item-frame">
                                                                            <img src="/images/work-6-1.jpg" alt="طراحی کارت مجوز" />
                                                                            <span className="art-item-hover">
                                                                                <FontAwesomeIcon icon="expand" />
                                                                            </span>
                                                                        </a>
                                                                        <div className="art-item-description">
                                                                            <h5 className={styles.mb_15}>طراحی کارت مجوز</h5>
                                                                            <div className={styles.mb_15}>طراحی کارت مجوز به سفارش شرکت وی</div>
                                                                            <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                <span>بیشتر بخوانید</span>
                                                                                <FontAwesomeIcon icon="angle-left" />
                                                                            </a>
                                                                        </div>

                                                                    </div>
                                                                    <div className="art-grid-item category-ui-elements">
                                                                        <a href="#" className="art-a art-portfolio-item-frame">
                                                                            <img src="/images/work-1-1.jpg" alt="طراحی کارت مجوز" />
                                                                            <span className="art-item-hover">
                                                                                <FontAwesomeIcon icon="expand" />
                                                                            </span>
                                                                        </a>
                                                                        <div className="art-item-description">
                                                                            <h5 className={styles.mb_15}>طراحی کارت مجوز</h5>
                                                                            <div className={styles.mb_15}>طراحی کارت مجوز به سفارش شرکت وی</div>
                                                                            <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                <span>بیشتر بخوانید</span>
                                                                                <FontAwesomeIcon icon="angle-left" />
                                                                            </a>
                                                                        </div>

                                                                    </div>
                                                                </Masonry>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <div className={styles.container} style={{ padding: '15px 15px 0px 15px' }}>
                                <div className={styles.e_row}>
                                    <div className={`${styles.column} ${styles.col_50}`}>
                                        <div className={styles.column_wrap} style={{ padding: '15px' }}>
                                            <div className={styles.widget_wrap}>
                                                <div className={`${styles.element} ${styles.widget}`}>
                                                    <div className={styles.widget_container}>
                                                        <div className={styles.art_section_title}>
                                                            <div className={styles.art_title_frame}>
                                                                <h4 className={styles.art_title_h}>
                                                                    <span>تحصیلات</span>
                                                                </h4>
                                                            </div>
                                                        </div>

                                                        <div className={`${styles.art_timeline} art-gallery`}>
                                                            <div className={styles.art_timeline_item}>
                                                                <div className={styles.art_timeline_mark_light}></div>
                                                                <div className={styles.art_timeline_mark}></div>

                                                                <div className={`${styles.art_a} ${styles.art_timeline_content}`}>
                                                                    <div className={styles.art_card_header}>
                                                                        <div className="art-left-side">
                                                                            <h5>
                                                                                <span>دانشگاه تهران</span>
                                                                            </h5>
                                                                            <div className={`${styles.art_el_suptitle} ${styles.mb_15}`}>
                                                                                <span>دانشجو</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.art_right_side}>
                                                                            <span className={styles.art_date}>
                                                                                <span>مهر 1396 - خرداد 1398</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className={styles.art_el_description}>
                                                                        <div>
                                                                            <p>دارای مدرک دکترا مهندسی کامپیوتر گرایش هوش مصنوعی از دانشگاه تهران</p>
                                                                        </div>
                                                                    </div>
                                                                    <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                        <span>مشاهده مدرک</span>
                                                                        <FontAwesomeIcon icon="angle-left" />
                                                                    </a>
                                                                </div>

                                                            </div>

                                                            <div className={styles.art_timeline_item}>
                                                                <div className={styles.art_timeline_mark_light}></div>
                                                                <div className={styles.art_timeline_mark}></div>

                                                                <div className={`${styles.art_a} ${styles.art_timeline_content}`}>
                                                                    <div className={styles.art_card_header}>
                                                                        <div className="art-left-side">
                                                                            <h5>
                                                                                <span>دانشگاه تهران</span>
                                                                            </h5>
                                                                            <div className={`${styles.art_el_suptitle} ${styles.mb_15}`}>
                                                                                <span>دانشجو</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.art_right_side}>
                                                                            <span className={styles.art_date}>
                                                                                <span>مهر 1396 - خرداد 1398</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className={styles.art_el_description}>
                                                                        <div>
                                                                            <p>دارای مدرک دکترا مهندسی کامپیوتر گرایش هوش مصنوعی از دانشگاه تهران</p>
                                                                        </div>
                                                                    </div>
                                                                    <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                        <span>مشاهده مدرک</span>
                                                                        <FontAwesomeIcon icon="angle-left" />
                                                                    </a>
                                                                </div>

                                                            </div>

                                                            <div className={styles.art_timeline_item}>
                                                                <div className={styles.art_timeline_mark_light}></div>
                                                                <div className={styles.art_timeline_mark}></div>

                                                                <div className={`${styles.art_a} ${styles.art_timeline_content}`}>
                                                                    <div className={styles.art_card_header}>
                                                                        <div className="art-left-side">
                                                                            <h5>
                                                                                <span>دانشگاه تهران</span>
                                                                            </h5>
                                                                            <div className={`${styles.art_el_suptitle} ${styles.mb_15}`}>
                                                                                <span>دانشجو</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.art_right_side}>
                                                                            <span className={styles.art_date}>
                                                                                <span>مهر 1396 - خرداد 1398</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className={styles.art_el_description}>
                                                                        <div>
                                                                            <p>دارای مدرک دکترا مهندسی کامپیوتر گرایش هوش مصنوعی از دانشگاه تهران</p>
                                                                        </div>
                                                                    </div>
                                                                    <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                        <span>مشاهده مدرک</span>
                                                                        <FontAwesomeIcon icon="angle-left" />
                                                                    </a>
                                                                </div>

                                                            </div>

                                                            <div className={styles.art_timeline_item}>
                                                                <div className={styles.art_timeline_mark_light}></div>
                                                                <div className={styles.art_timeline_mark}></div>

                                                                <div className={`${styles.art_a} ${styles.art_timeline_content}`}>
                                                                    <div className={styles.art_card_header}>
                                                                        <div className="art-left-side">
                                                                            <h5>
                                                                                <span>دانشگاه تهران</span>
                                                                            </h5>
                                                                            <div className={`${styles.art_el_suptitle} ${styles.mb_15}`}>
                                                                                <span>دانشجو</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.art_right_side}>
                                                                            <span className={styles.art_date}>
                                                                                <span>مهر 1396 - خرداد 1398</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className={styles.art_el_description}>
                                                                        <div>
                                                                            <p>دارای مدرک دکترا مهندسی کامپیوتر گرایش هوش مصنوعی از دانشگاه تهران</p>
                                                                        </div>
                                                                    </div>
                                                                    <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                        <span>مشاهده مدرک</span>
                                                                        <FontAwesomeIcon icon="angle-left" />
                                                                    </a>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.column} ${styles.col_50}`}>
                                        <div className={styles.column_wrap} style={{ padding: '15px' }}>
                                            <div className={styles.widget_wrap}>
                                                <div className={`${styles.element} ${styles.widget}`}>
                                                    <div className={styles.widget_container}>
                                                        <div className={styles.art_section_title}>
                                                            <div className={styles.art_title_frame}>
                                                                <h4 className={styles.art_title_h}>
                                                                    <span>سوابق کاری</span>
                                                                </h4>
                                                            </div>
                                                        </div>

                                                        <div className={`${styles.art_timeline} art-gallery`}>
                                                            <div className={styles.art_timeline_item}>
                                                                <div className={styles.art_timeline_mark_light}></div>
                                                                <div className={styles.art_timeline_mark}></div>

                                                                <div className={`${styles.art_a} ${styles.art_timeline_content}`}>
                                                                    <div className={styles.art_card_header}>
                                                                        <div className="art-left-side">
                                                                            <h5>
                                                                                <span>دانشگاه تهران</span>
                                                                            </h5>
                                                                            <div className={`${styles.art_el_suptitle} ${styles.mb_15}`}>
                                                                                <span>دانشجو</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.art_right_side}>
                                                                            <span className={styles.art_date}>
                                                                                <span>مهر 1396 - خرداد 1398</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className={styles.art_el_description}>
                                                                        <div>
                                                                            <p>دارای مدرک دکترا مهندسی کامپیوتر گرایش هوش مصنوعی از دانشگاه تهران</p>
                                                                        </div>
                                                                    </div>
                                                                    <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                        <span>مشاهده مدرک</span>
                                                                        <FontAwesomeIcon icon="angle-left" />
                                                                    </a>
                                                                </div>

                                                            </div>

                                                            <div className={styles.art_timeline_item}>
                                                                <div className={styles.art_timeline_mark_light}></div>
                                                                <div className={styles.art_timeline_mark}></div>

                                                                <div className={`${styles.art_a} ${styles.art_timeline_content}`}>
                                                                    <div className={styles.art_card_header}>
                                                                        <div className="art-left-side">
                                                                            <h5>
                                                                                <span>دانشگاه تهران</span>
                                                                            </h5>
                                                                            <div className={`${styles.art_el_suptitle} ${styles.mb_15}`}>
                                                                                <span>دانشجو</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.art_right_side}>
                                                                            <span className={styles.art_date}>
                                                                                <span>مهر 1396 - خرداد 1398</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className={styles.art_el_description}>
                                                                        <div>
                                                                            <p>دارای مدرک دکترا مهندسی کامپیوتر گرایش هوش مصنوعی از دانشگاه تهران</p>
                                                                        </div>
                                                                    </div>
                                                                    <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                        <span>مشاهده مدرک</span>
                                                                        <FontAwesomeIcon icon="angle-left" />
                                                                    </a>
                                                                </div>

                                                            </div>

                                                            <div className={styles.art_timeline_item}>
                                                                <div className={styles.art_timeline_mark_light}></div>
                                                                <div className={styles.art_timeline_mark}></div>

                                                                <div className={`${styles.art_a} ${styles.art_timeline_content}`}>
                                                                    <div className={styles.art_card_header}>
                                                                        <div className="art-left-side">
                                                                            <h5>
                                                                                <span>دانشگاه تهران</span>
                                                                            </h5>
                                                                            <div className={`${styles.art_el_suptitle} ${styles.mb_15}`}>
                                                                                <span>دانشجو</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.art_right_side}>
                                                                            <span className={styles.art_date}>
                                                                                <span>مهر 1396 - خرداد 1398</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className={styles.art_el_description}>
                                                                        <div>
                                                                            <p>دارای مدرک دکترا مهندسی کامپیوتر گرایش هوش مصنوعی از دانشگاه تهران</p>
                                                                        </div>
                                                                    </div>
                                                                    <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                        <span>مشاهده مدرک</span>
                                                                        <FontAwesomeIcon icon="angle-left" />
                                                                    </a>
                                                                </div>

                                                            </div>

                                                            <div className={styles.art_timeline_item}>
                                                                <div className={styles.art_timeline_mark_light}></div>
                                                                <div className={styles.art_timeline_mark}></div>

                                                                <div className={`${styles.art_a} ${styles.art_timeline_content}`}>
                                                                    <div className={styles.art_card_header}>
                                                                        <div className="art-left-side">
                                                                            <h5>
                                                                                <span>دانشگاه تهران</span>
                                                                            </h5>
                                                                            <div className={`${styles.art_el_suptitle} ${styles.mb_15}`}>
                                                                                <span>دانشجو</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.art_right_side}>
                                                                            <span className={styles.art_date}>
                                                                                <span>مهر 1396 - خرداد 1398</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className={styles.art_el_description}>
                                                                        <div>
                                                                            <p>دارای مدرک دکترا مهندسی کامپیوتر گرایش هوش مصنوعی از دانشگاه تهران</p>
                                                                        </div>
                                                                    </div>
                                                                    <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                        <span>مشاهده مدرک</span>
                                                                        <FontAwesomeIcon icon="angle-left" />
                                                                    </a>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <div className={styles.container}>
                                <div className={styles.e_row}>
                                    <div className={`${styles.column} ${styles.col_100}`}>
                                        <div className={styles.column_wrap}>
                                            <div className={styles.widget_wrap}>
                                                <div className={`${styles.element} ${styles.widget}`}>
                                                    <div className={styles.widget_container}>
                                                        <div className={styles.container_fluid}>
                                                            <div className={`${styles.row}`}>
                                                                <div className="col-lg-12">
                                                                    <div className={styles.art_section_title}>
                                                                        <div className={styles.art_title_frame}>
                                                                            <h4 className={styles.art_title_h}>
                                                                                <span>بلاگ</span>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-12">
                                                                    <Swiper
                                                                        className={styles.art_blog_slider}
                                                                        autoplay={{
                                                                            delay: 5000
                                                                        }}
                                                                        speed={1500}
                                                                        spaceBetween={30}
                                                                        slidesPerView={1}
                                                                        pagination={{ el: '.art-blog-left', clickable: true }}
                                                                        navigation={{ prevEl: '.art-blog-swiper-prev', nextEl: '.art-blog-swiper-next' }}
                                                                        style={{ overflow: 'visible' }}
                                                                        breakpoints={{
                                                                            "720": {
                                                                                "slidesPerView": 2,
                                                                            },
                                                                            "1500": {
                                                                                "slidesPerView": 3,
                                                                            }
                                                                        }}
                                                                    >
                                                                        <SwiperSlide>
                                                                            <div className={`${styles.art_a} ${styles.art_blog_card}`}>
                                                                                <div>
                                                                                    <a className={styles.art_port_cover} href="#">
                                                                                        <img src="/images/blog-1-scaled-1-1.jpg" alt="ترندهای طراحی لوگو 2020" />
                                                                                    </a>
                                                                                    <div className={styles.art_post_description}>
                                                                                        <div className={`${styles.art_project_category} ${styles.mb_15}`}>
                                                                                            <a href="#">
                                                                                                <span className="art-el-date">3 مهر 1399</span>
                                                                                            </a> / <span className="art-el-category">طبیعت, طراحی</span>
                                                                                        </div>
                                                                                        <a href="#">
                                                                                            <h5 className={styles.mb_15}>ترندهای طراحی لوگو 2020</h5>
                                                                                        </a>
                                                                                        <div className={styles.art_el_description}>
                                                                                            <p>در سه دهه آخر قرن نوزدهم میلادی ، بر اثر تحولات مصور سازی و پیوند نزدیکی که بین نقاشی و… </p>
                                                                                            <div className="art-el-more">
                                                                                                <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                                    <span>بیشتر بخوانید</span>
                                                                                                    <FontAwesomeIcon icon="angle-left" />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </SwiperSlide>
                                                                        <SwiperSlide>
                                                                            <div className={`${styles.art_a} ${styles.art_blog_card}`}>
                                                                                <div>
                                                                                    <a className={styles.art_port_cover} href="#">
                                                                                        <img src="/images/blog-1-scaled-1-1.jpg" alt="ترندهای طراحی لوگو 2020" />
                                                                                    </a>
                                                                                    <div className={styles.art_post_description}>
                                                                                        <div className={`${styles.art_project_category} ${styles.mb_15}`}>
                                                                                            <a href="#">
                                                                                                <span className="art-el-date">3 مهر 1399</span>
                                                                                            </a> / <span className="art-el-category">طبیعت, طراحی</span>
                                                                                        </div>
                                                                                        <a href="#">
                                                                                            <h5 className={styles.mb_15}>ترندهای طراحی لوگو 2020</h5>
                                                                                        </a>
                                                                                        <div className={styles.art_el_description}>
                                                                                            <p>در سه دهه آخر قرن نوزدهم میلادی ، بر اثر تحولات مصور سازی و پیوند نزدیکی که بین نقاشی و… </p>
                                                                                            <div className="art-el-more">
                                                                                                <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                                    <span>بیشتر بخوانید</span>
                                                                                                    <FontAwesomeIcon icon="angle-left" />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </SwiperSlide>
                                                                        <SwiperSlide>
                                                                            <div className={`${styles.art_a} ${styles.art_blog_card}`}>
                                                                                <div>
                                                                                    <a className={styles.art_port_cover} href="#">
                                                                                        <img src="/images/blog-1-scaled-1-1.jpg" alt="ترندهای طراحی لوگو 2020" />
                                                                                    </a>
                                                                                    <div className={styles.art_post_description}>
                                                                                        <div className={`${styles.art_project_category} ${styles.mb_15}`}>
                                                                                            <a href="#">
                                                                                                <span className="art-el-date">3 مهر 1399</span>
                                                                                            </a> / <span className="art-el-category">طبیعت, طراحی</span>
                                                                                        </div>
                                                                                        <a href="#">
                                                                                            <h5 className={styles.mb_15}>ترندهای طراحی لوگو 2020</h5>
                                                                                        </a>
                                                                                        <div className={styles.art_el_description}>
                                                                                            <p>در سه دهه آخر قرن نوزدهم میلادی ، بر اثر تحولات مصور سازی و پیوند نزدیکی که بین نقاشی و… </p>
                                                                                            <div className="art-el-more">
                                                                                                <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                                    <span>بیشتر بخوانید</span>
                                                                                                    <FontAwesomeIcon icon="angle-left" />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </SwiperSlide>
                                                                        <SwiperSlide>
                                                                            <div className={`${styles.art_a} ${styles.art_blog_card}`}>
                                                                                <div>
                                                                                    <a className={styles.art_port_cover} href="#">
                                                                                        <img src="/images/blog-1-scaled-1-1.jpg" alt="ترندهای طراحی لوگو 2020" />
                                                                                    </a>
                                                                                    <div className={styles.art_post_description}>
                                                                                        <div className={`${styles.art_project_category} ${styles.mb_15}`}>
                                                                                            <a href="#">
                                                                                                <span className="art-el-date">3 مهر 1399</span>
                                                                                            </a> / <span className="art-el-category">طبیعت, طراحی</span>
                                                                                        </div>
                                                                                        <a href="#">
                                                                                            <h5 className={styles.mb_15}>ترندهای طراحی لوگو 2020</h5>
                                                                                        </a>
                                                                                        <div className={styles.art_el_description}>
                                                                                            <p>در سه دهه آخر قرن نوزدهم میلادی ، بر اثر تحولات مصور سازی و پیوند نزدیکی که بین نقاشی و… </p>
                                                                                            <div className="art-el-more">
                                                                                                <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                                    <span>بیشتر بخوانید</span>
                                                                                                    <FontAwesomeIcon icon="angle-left" />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </SwiperSlide>
                                                                        <SwiperSlide>
                                                                            <div className={`${styles.art_a} ${styles.art_blog_card}`}>
                                                                                <div>
                                                                                    <a className={styles.art_port_cover} href="#">
                                                                                        <img src="/images/blog-1-scaled-1-1.jpg" alt="ترندهای طراحی لوگو 2020" />
                                                                                    </a>
                                                                                    <div className={styles.art_post_description}>
                                                                                        <div className={`${styles.art_project_category} ${styles.mb_15}`}>
                                                                                            <a href="#">
                                                                                                <span className="art-el-date">3 مهر 1399</span>
                                                                                            </a> / <span className="art-el-category">طبیعت, طراحی</span>
                                                                                        </div>
                                                                                        <a href="#">
                                                                                            <h5 className={styles.mb_15}>ترندهای طراحی لوگو 2020</h5>
                                                                                        </a>
                                                                                        <div className={styles.art_el_description}>
                                                                                            <p>در سه دهه آخر قرن نوزدهم میلادی ، بر اثر تحولات مصور سازی و پیوند نزدیکی که بین نقاشی و… </p>
                                                                                            <div className="art-el-more">
                                                                                                <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                                    <span>بیشتر بخوانید</span>
                                                                                                    <FontAwesomeIcon icon="angle-left" />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </SwiperSlide>
                                                                        <SwiperSlide>
                                                                            <div className={`${styles.art_a} ${styles.art_blog_card}`}>
                                                                                <div>
                                                                                    <a className={styles.art_port_cover} href="#">
                                                                                        <img src="/images/blog-1-scaled-1-1.jpg" alt="ترندهای طراحی لوگو 2020" />
                                                                                    </a>
                                                                                    <div className={styles.art_post_description}>
                                                                                        <div className={`${styles.art_project_category} ${styles.mb_15}`}>
                                                                                            <a href="#">
                                                                                                <span className="art-el-date">3 مهر 1399</span>
                                                                                            </a> / <span className="art-el-category">طبیعت, طراحی</span>
                                                                                        </div>
                                                                                        <a href="#">
                                                                                            <h5 className={styles.mb_15}>ترندهای طراحی لوگو 2020</h5>
                                                                                        </a>
                                                                                        <div className={styles.art_el_description}>
                                                                                            <p>در سه دهه آخر قرن نوزدهم میلادی ، بر اثر تحولات مصور سازی و پیوند نزدیکی که بین نقاشی و… </p>
                                                                                            <div className="art-el-more">
                                                                                                <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                                    <span>بیشتر بخوانید</span>
                                                                                                    <FontAwesomeIcon icon="angle-left" />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </SwiperSlide>
                                                                        <SwiperSlide>
                                                                            <div className={`${styles.art_a} ${styles.art_blog_card}`}>
                                                                                <div>
                                                                                    <a className={styles.art_port_cover} href="#">
                                                                                        <img src="/images/blog-1-scaled-1-1.jpg" alt="ترندهای طراحی لوگو 2020" />
                                                                                    </a>
                                                                                    <div className={styles.art_post_description}>
                                                                                        <div className={`${styles.art_project_category} ${styles.mb_15}`}>
                                                                                            <a href="#">
                                                                                                <span className="art-el-date">3 مهر 1399</span>
                                                                                            </a> / <span className="art-el-category">طبیعت, طراحی</span>
                                                                                        </div>
                                                                                        <a href="#">
                                                                                            <h5 className={styles.mb_15}>ترندهای طراحی لوگو 2020</h5>
                                                                                        </a>
                                                                                        <div className={styles.art_el_description}>
                                                                                            <p>در سه دهه آخر قرن نوزدهم میلادی ، بر اثر تحولات مصور سازی و پیوند نزدیکی که بین نقاشی و… </p>
                                                                                            <div className="art-el-more">
                                                                                                <a href="#" className={`${styles.art_link} ${styles.art_color_link} ${styles.art_w_chevron}`}>
                                                                                                    <span>بیشتر بخوانید</span>
                                                                                                    <FontAwesomeIcon icon="angle-left" />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </SwiperSlide>
                                                                    </Swiper>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <div className="art-slider-navigation">
                                                                        <div className="art-blog-left"></div>

                                                                        <div className="art-sn-right">
                                                                            <div className="art-slider-nav-frame">
                                                                                <div className="art-slider-nav art-blog-swiper-prev">
                                                                                    <FontAwesomeIcon icon="chevron-right" />
                                                                                </div>

                                                                                <div className="art-slider-nav art-blog-swiper-next">
                                                                                    <FontAwesomeIcon icon="chevron-left" />
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <div className={styles.container}>
                                <div className={styles.e_row}>
                                    <div className={`${styles.column} ${styles.col_100}`}>
                                        <div className={styles.column_wrap}>
                                            <div className={styles.widget_wrap}>
                                                <div className={`${styles.element} ${styles.widget}`}>
                                                    <div className={styles.widget_container}>
                                                        <div className={styles.container_fluid}>
                                                            <div className={`${styles.row}`}>
                                                                <div className="col-lg-12">
                                                                    <div className={styles.art_section_title}>
                                                                        <div className={styles.art_title_frame}>
                                                                            <h4 className={styles.art_title_h}>
                                                                                <span>اطلاعات تماس</span>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className={`${styles.art_a} ${styles.art_card}`}>
                                                                        <div className={`${styles.art_table} ${styles.p_15_15}`}>
                                                                            <div>
                                                                                <ul>
                                                                                    <li><strong>کشور :</strong> ایران</li>
                                                                                    <li><strong>شهر :</strong> تهران</li>
                                                                                    <li><strong>آدرس :</strong> خیابان اول، پلاک 2</li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className={`${styles.art_a} ${styles.art_card}`}>
                                                                        <div className={`${styles.art_table} ${styles.p_15_15}`}>
                                                                            <div>
                                                                                <ul>
                                                                                    <li><strong>ایمیل :</strong> hi@aliahmadi.com</li>
                                                                                    <li><strong>تلگرام :</strong> arter@</li>
                                                                                    <li><strong>اسکایپ :</strong> Arter</li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className={`${styles.art_a} ${styles.art_card}`}>
                                                                        <div className={`${styles.art_table} ${styles.p_15_15}`}>
                                                                            <div>
                                                                                <ul>
                                                                                    <li><strong>امور فنی :</strong> 333 11 22 (021)</li>
                                                                                    <li><strong>شرکت :</strong> 326 11 22 (021)</li>
                                                                                    <li><strong>شخصی :</strong>114 26 53 (021)</li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <div className={styles.container}>
                                <div className={styles.e_row}>
                                    <div className={`${styles.column} ${styles.col_100}`}>
                                        <div className={styles.column_wrap}>
                                            <div className={styles.widget_wrap}>
                                                <div className={`${styles.element} ${styles.widget}`}>
                                                    <div className={styles.widget_container}>
                                                        <div className={styles.container_fluid}>
                                                            <div className={`${styles.row}`}>
                                                                <div className="col-lg-12">
                                                                    <div className={styles.art_section_title}>
                                                                        <div className={styles.art_title_frame}>
                                                                            <h4 className={styles.art_title_h}>
                                                                                <span>تماس با من</span>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-12">
                                                                    <div className={`${styles.art_a} ${styles.art_card}`}>
                                                                        <form onSubmit={handleFormSubmit}>
                                                                            <div className={styles.art_contact_form}>
                                                                                <div className={styles.art_form_field}>
                                                                                    <span className={styles.wpcf7_form_control_wrap}><input type="text" name="your-name" size="40" placeholder="نام" autoComplete="off" onFocus={() => setNameFocused(true)} onBlur={() => setNameFocused(false)} /></span>
                                                                                    <label className={`${nameFocused && styles.focused}`}>
                                                                                        <FontAwesomeIcon icon="user" />
                                                                                    </label>
                                                                                </div>
                                                                                <div className={styles.art_form_field}>
                                                                                    <span className={styles.wpcf7_form_control_wrap}><input type="email" name="your-email" size="40" placeholder="ایمیل" autoComplete="off" onFocus={() => setMailFocused(true)} onBlur={() => setMailFocused(false)} /></span>
                                                                                    <label className={`${mailFocused && styles.focused}`}>
                                                                                        <FontAwesomeIcon icon="at" />
                                                                                    </label>
                                                                                </div>
                                                                                <div className={styles.art_form_field}>
                                                                                    <span className={styles.wpcf7_form_control_wrap}><textarea name="your-message" cols="40" rows="10" placeholder="پیام" onFocus={() => setMessageFocused(true)} onBlur={() => setMessageFocused(false)}></textarea></span>
                                                                                    <label className={`${messageFocused && styles.focused}`}>
                                                                                        <FontAwesomeIcon icon="envelope" />
                                                                                    </label>
                                                                                </div>
                                                                                <div className={styles.art_submit_frame}>
                                                                                    <button className={`${styles.art_btn} ${styles.art_btn_md} ${styles.art_submit}`}><span>ارسال</span></button>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div className={styles.container_fluid}>
                    <footer className={styles.footer}>
                        <div>© تمامی حفوق محفوظ است.</div>
                        <div>ایمیل: <a href="mailto:milad.techs@gmail.com" target="_blank">milad.techs@gmail.com</a></div>
                    </footer>
                </div>
            </div>
        </div>
    )
}