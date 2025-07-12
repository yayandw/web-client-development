'use client'

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PremierCard from "@/app/_components/premier/card";
import EditorCard from "@/app/_components/editor/card";

import data from '../data/movies.json';

export default function Home() {
    return (
        <div className="navbarSpace">
            <div id="navbar">
                <div>
                    <div className="nContent">
                        <div>
                            <a href="https://klikfilm.com/v4"
                               className="aMenuHome">
                                <div
                                    className="nLogo bg-cover bg-center bg-[url('https://klikfilm.com/v4/images/logo_klikfilm_black_nonhd.png')] dark:bg-[url('https://klikfilm.com/v4/images/logo_klikfilm.png')]">
                                </div>
                            </a>
                        </div>
                        <div>
                            <div className="nMenu">
                                <a href="https://klikfilm.com/v4"
                                   className="aMenuHome active">
                                    <div>Home</div>
                                </a>
                                <a href="https://klikfilm.com/v4/trending" className="">
                                    <div>Trending</div>
                                </a>
                            </div>
                        </div>
                        <div id="idSearch">
                            <div className="nSearch hidden md:block">
                                <form method="get" action="https://klikfilm.com/v4/search">
                                    <input id="value_search" name="keyword" placeholder="Cari film" autoComplete="off"
                                           className="dark:placeholder:text-gray-400 placeholder:text-black"/>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className="nBtn pointer">Masuk/Daftar</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="content">
                <div className="w-full">
                    <Swiper
                        className="h-[300] md:h-full"
                        spaceBetween={16}
                        slidesPerView={1}
                        modules={[Autoplay, Pagination]}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                            reverseDirection: false,
                            pauseOnMouseEnter: false
                        }}
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: true,
                        }}
                        loop={true}
                    >
                        {data.premiers.map((src) => (
                            <SwiperSlide key={src.id}>
                                <img className="w-full h-full object-cover" src={`https://posters.cdn.klikfilm.net/1349_405/${src.url}_1349_405.jpg`} alt={""}/>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-pagination"></div>
                    </Swiper>
                </div>
                <div id="page_explore" className="exp_page">
                    <div className="filmSection">
                        <div className="sectionBox stbsec33 hidden" style={{display: 'block'}}>
                            {/*Premiere*/}
                            <div>
                                <div className="title mt15">
                                    <div>
                                        <div>Premiere</div>
                                    </div>
                                    <div><a href="https://klikfilm.com/v4/section/33">
                                        <div className="headMore">
                                            <div>Lihat Semua</div>
                                            <div>
                                                <div>
                                                    <div className="icon icon_arrow_right_black"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </a></div>
                                </div>
                                <div className="card_hzl_film overflow-hidden whitespace-nowrap">
                                    <div className="flex gap-6">
                                        {data.premiers.map((src) => (
                                            <PremierCard key={src.id} src={src.url}/>
                                        ))}
                                    </div>
                                    <div
                                        className="scroll_card">
                                        <div>
                                            <div className="chn_btn_left">
                                                <div
                                                    className="icon icon_arrow_slide_left"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="chn_btn_right">
                                                <div
                                                    className="icon icon_arrow_slide_right"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Editor Pick*/}
                            <div>
                                <div className="title mt15">
                                    <div>
                                        <div>Editor&#39;s Picks</div>
                                    </div>
                                    <div><a href="https://klikfilm.com/v4/section/33">
                                        <div className="headMore">
                                            <div>Lihat Semua</div>
                                            <div>
                                                <div>
                                                    <div className="icon icon_arrow_right_black"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </a></div>
                                </div>
                                <div className="card_hzl_film">
                                    <div className="cnt_card bh_scroll">
                                        {data.editors.map((src) => (
                                            <EditorCard key={src.id} src={src.url} isPremium={src.is_premium}/>
                                        ))}
                                    </div>
                                    <div
                                        className="scroll_card">
                                        <div>
                                            <div className="chn_btn_left">
                                                <div
                                                    className="icon icon_arrow_slide_left"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="chn_btn_right">
                                                <div
                                                    className="icon icon_arrow_slide_right"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="filmSection">
                        <div className="sectionBox stbsec176 hidden" style={{display: 'block'}}>
                        </div>
                    </div>
                </div>
            </div>
            <div id="page_loading" className="page_loading" style={{display: 'none'}}>
                <div>Loading...</div>
            </div>

            <div id="footer">

                <section>
                    <div className="distance">

                        <div className="fBody">
                            <div>
                                <div className="fbOption">
                                    <a href="https://klikfilm.com/v4/about/contact-us" className="awhite">Contact us</a>
                                    <a href="https://klikfilm.com/v4/about/term-of-use" className="awhite">Term of
                                        Use</a>
                                    <a href="https://klikfilm.com/v4/about/faq" className="awhite">FAQ</a>
                                    <a href="https://klikfilm.com/v4/about/point" className="awhite">Point</a>
                                </div>
                                <div className="fbContent">
                                    <div>©2025, KlikFilm.com atau afiliasinya. All rights reserved.</div>
                                </div>
                                <div className="fbEngine">
                                    <div>Build Number: 169.8 · ID</div>
                                </div>
                            </div>
                            <div>
                                <div className="fbDownload">
                                    <div>Unduh sekarang</div>
                                    <div>
                                        <a href="https://play.google.com/store/apps/details?id=net.klikfilm.app&amp;hl=in&amp;gl=US"
                                           target="_blank">
                                            <div className="download_playstore"></div>
                                        </a>
                                        <a href="https://apps.apple.com/id/app/klikfilm/id1057143732?l=id"
                                           target="_blank">
                                            <div className="download_appstore"></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    );
}
