
import styles from './info-bar.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/dist/plugins/overscroll';
Scrollbar.use(OverscrollPlugin);
import { useEffect } from 'react';

export default function InfoBar({ rightMenu: [toggleRightMenu, setToggleRightMenu], menuBar }) {

    useEffect(() => {
        Scrollbar.init(document.querySelector('#scrollbar-infobar'));
    }, [])

    return (
        <div className={`${styles.art_info_bar} ${toggleRightMenu && styles.art_active}`}>
            <div className={styles.art_info_bar_frame}>

                <div className={styles.art_info_bar_header}>
                    <a className={`${styles.art_info_bar_btn} ${menuBar && styles.art_disabled}`} onClick={() => setToggleRightMenu(!toggleRightMenu)}>
                        <FontAwesomeIcon size="lg" icon="ellipsis-v" />
                    </a>
                </div>

                <div className={styles.art_header}>
                    <div className={styles.art_avatar}>
                        <a href="#" className={styles.art_avatar_curtain}>
                            <Image src="/images/face-1-1.jpg" alt="avatar" width="90px" height="90px" layout="fixed" />
                        </a>

                        <div className={styles.art_lamp_light}>
                            <div className={styles.art_available_lamp}></div>
                        </div>
                    </div>
                    <h5 className={styles.art_name}>
                        <a href="#">علی احمدی</a>
                    </h5>
                    <div className={styles.art_sm_text}>
                        توسعه دهنده وب <br />
                        طراح رابط کاربری
                    </div>
                </div>

                <div id="scrollbar-infobar" className="art-scroll-frame">
                    <div className={styles.art_table}>
                        <ul>
                            <li>
                                <h6>محل سکونت :</h6>
                                <span>تهران</span>
                            </li>
                            <li>
                                <h6>شهر :</h6>
                                <span>تهران</span>
                            </li>
                            <li>
                                <h6>سن :</h6>
                                <span>26</span>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.art_ls_divider}></div>

                    <h5 className={styles.art_title_h}>زبان ها</h5>

                    <div className={styles.art_lang_skills}>
                        <div className={styles.art_lang_skills_item}>
                            <div id="circleprog1-1" className={`${styles.art_cirkle_progress} ${styles.art_skills_progress}`} style={{ position: 'relative' }}>
                                <svg viewBox="0 0 100 100" style={{ display: 'block', width: '100%' }}>
                                    <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#eee" strokeWidth="7" fillOpacity="0"></path>
                                    <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#555" strokeWidth="7" fillOpacity="0" style={{ strokeDasharray: '292.272, 292.272', strokeDashoffset: '0' }}></path>
                                </svg>
                                <div className={styles.progressbar_text} style={{ position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgb(85, 85, 85)' }}>100</div>
                            </div>

                            <h6>انگلیسی</h6>
                        </div>

                        <div className={styles.art_lang_skills_item}>
                            <div id="circleprog1-2" className={`${styles.art_cirkle_progress} ${styles.art_skills_progress}`} style={{ position: 'relative' }}>
                                <svg viewBox="0 0 100 100" style={{ display: 'block', width: '100%' }}>
                                    <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#eee" strokeWidth="7" fillOpacity="0"></path>
                                    <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#555" strokeWidth="7" fillOpacity="0" style={{ strokeDasharray: '292.273, 292.273', strokeDashoffset: '0' }}></path>
                                </svg>
                                <div className={styles.progressbar_text} style={{ position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgb(85, 85, 85)' }}>100</div>
                            </div>

                            <h6>انگلیسی</h6>
                        </div>

                        <div className={styles.art_lang_skills_item}>
                            <div id="circleprog1-3" className={`${styles.art_cirkle_progress} ${styles.art_skills_progress}`} style={{ position: 'relative' }}>
                                <svg viewBox="0 0 100 100" style={{ display: 'block', width: '100%' }}>
                                    <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#eee" strokeWidth="7" fillOpacity="0"></path>
                                    <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#555" strokeWidth="7" fillOpacity="0" style={{ strokeDasharray: '292.273, 292.273', strokeDashoffset: '0' }}></path>
                                </svg>
                                <div className={styles.progressbar_text} style={{ position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgb(85, 85, 85)' }}>100</div>
                            </div>

                            <h6>انگلیسی</h6>
                        </div>
                    </div>

                    <div className={styles.art_ls_divider}></div>

                    <h5 className={styles.art_title_h}>کدنویسی</h5>

                    <div className={styles.art_hard_skills}>
                        <div className={styles.art_hard_skills_item}>
                            <div className={styles.art_skill_heading}>
                                <h6>html</h6>
                            </div>

                            <div className={styles.art_line_progress}>
                                <div id="lineprog2-1" data-type="progress" data-value="90" className={styles.art_skills_progress} style={{ position: 'relative' }}>
                                    <svg viewBox="0 0 100 1.72" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                                        <path d="M 0,0.86 L 100,0.86" stroke="#eee" strokeWidth="1.72" fillOpacity="0"></path>
                                        <path d="M 0,0.86 L 100,0.86" stroke="#555" strokeWidth="1.72" fillOpacity="0" style={{ strokeDasharray: '100, 100', strokeDashoffset: '10' }}></path>
                                    </svg>
                                    <div className={styles.progressbar_text} style={{ position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgb(85, 85, 85)' }}>90 %</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.art_hard_skills_item}>
                            <div className={styles.art_skill_heading}>
                                <h6>html</h6>
                            </div>

                            <div className={styles.art_line_progress}>
                                <div id="lineprog2-2" data-type="progress" data-value="90" className={styles.art_skills_progress} style={{ position: 'relative' }}>
                                    <svg viewBox="0 0 100 1.72" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                                        <path d="M 0,0.86 L 100,0.86" stroke="#eee" strokeWidth="1.72" fillOpacity="0"></path>
                                        <path d="M 0,0.86 L 100,0.86" stroke="#555" strokeWidth="1.72" fillOpacity="0" style={{ strokeDasharray: '100, 100', strokeDashoffset: '10' }}></path>
                                    </svg>
                                    <div className={styles.progressbar_text} style={{ position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgb(85, 85, 85)' }}>90 %</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.art_hard_skills_item}>
                            <div className={styles.art_skill_heading}>
                                <h6>html</h6>
                            </div>

                            <div className={styles.art_line_progress}>
                                <div id="lineprog2-3" data-type="progress" data-value="90" className={styles.art_skills_progress} style={{ position: 'relative' }}>
                                    <svg viewBox="0 0 100 1.72" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                                        <path d="M 0,0.86 L 100,0.86" stroke="#eee" strokeWidth="1.72" fillOpacity="0"></path>
                                        <path d="M 0,0.86 L 100,0.86" stroke="#555" strokeWidth="1.72" fillOpacity="0" style={{ strokeDasharray: '100, 100', strokeDashoffset: '10' }}></path>
                                    </svg>
                                    <div className={styles.progressbar_text} style={{ position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgb(85, 85, 85)' }}>90 %</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.art_ls_divider}></div>

                    <h5 className={styles.art_title_h}>مهارت ها</h5>

                    <ul className={styles.art_knowledge_list}>
                        <li><FontAwesomeIcon icon="check" />فتوشاپ</li>
                        <li><FontAwesomeIcon icon="check" />ایلاستریتور</li>
                        <li><FontAwesomeIcon icon="check" />فیگما</li>
                        <li><FontAwesomeIcon icon="check" />اسکچ</li>
                    </ul>

                    <div className={styles.art_ls_divider}></div>

                    <div className={styles.art_links_frame}>
                        <a href="#" className={styles.art_link}>دانلود رزومه <FontAwesomeIcon icon="download" /></a>
                    </div>

                </div>

                <div className={styles.art_ls_social}>
                    <a href="#"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                    <a href="#"><FontAwesomeIcon icon={["fab", "dribbble"]} /></a>
                    <a href="#"><FontAwesomeIcon icon={["fab", "behance"]} /></a>
                    <a href="#"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                    <a href="#"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                </div>
            </div>
        </div>
    )
}