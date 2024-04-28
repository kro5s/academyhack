import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-light-green py-6">
            <Link to="/">
                <div className="flex items-center justify-center gap-x-4">
                    <span className="font-logo text-3xl text-white">Nature’s Sentinel</span>
                    <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M26.3503 4.33982C26.3594 4.34829 26.3696 4.35846 26.3802 4.36992C26.4121 4.40432 26.4318 4.43285 26.4379 4.44386L26.4389 4.44563C26.441 4.45709 26.4441 4.47709 26.4476 4.50883C26.462 4.63942 26.4739 4.88343 26.4821 5.37075C26.4984 6.33588 26.5 8.17746 26.5 11.7842C26.5 14.9797 26.4969 16.8409 26.4836 17.9634C26.4703 19.0966 26.4462 19.4437 26.4135 19.6388C26.0467 21.7201 24.5689 24.0002 22.0861 26.1464C19.9769 27.9609 17.4622 29.6141 14.6451 31.023L14.6435 31.0238C14.6152 31.0381 14.5877 31.052 14.5609 31.0655C14.2468 31.2241 14.0318 31.3327 13.8557 31.4057C13.6715 31.4821 13.5739 31.5 13.5 31.5C13.4261 31.5 13.3285 31.4821 13.1443 31.4057C12.9682 31.3327 12.7532 31.2241 12.4391 31.0655C12.4123 31.052 12.3848 31.0381 12.3565 31.0238L12.3549 31.023C9.53783 29.6141 7.02317 27.9609 4.91397 26.1465C2.43114 24.0002 0.953307 21.7201 0.586501 19.6387C0.553767 19.4437 0.529736 19.0965 0.516371 17.9634C0.503133 16.8409 0.5 14.9797 0.5 11.7842C0.5 8.17746 0.501583 6.33588 0.517897 5.37075C0.526135 4.88343 0.537975 4.63942 0.552363 4.50883C0.555861 4.47709 0.559018 4.45709 0.561117 4.44563L0.562104 4.44386C0.568219 4.43285 0.587852 4.40432 0.619752 4.36992C0.630363 4.35848 0.640548 4.34833 0.649618 4.33987C0.668318 4.33326 0.691954 4.3251 0.720906 4.31529C0.811624 4.28457 0.9428 4.24169 1.11141 4.18764C1.44798 4.07976 1.92588 3.92989 2.51047 3.74877C3.67926 3.38666 5.27018 2.90099 7.00057 2.37924C7.00058 2.37924 7.00059 2.37923 7.00059 2.37923L6.85625 1.90052C11.2937 0.562698 13.25 6.29425e-05 13.4688 6.29425e-05L26.3503 4.33982ZM26.3503 4.33982C26.3315 4.33315 26.3076 4.32489 26.2783 4.31496C26.1872 4.28407 26.0555 4.24095 25.8862 4.18662C25.5482 4.07817 25.0682 3.92753 24.481 3.74566C23.3069 3.38203 21.7084 2.89486 19.9689 2.3732L26.3503 4.33982Z"
                            fill="white" stroke="#007F5F"/>
                        <path
                            d="M10.2353 7.09188C10.1856 7.14496 9.75094 7.72223 9.26656 8.37913C8.31107 9.67634 8.29116 9.71284 8.47032 9.85218C8.5433 9.90858 8.60634 9.92185 8.80208 9.92185C8.95801 9.92185 9.04759 9.93512 9.04759 9.95834C9.04759 9.97825 8.60634 10.6385 8.06888 11.4281C7.53141 12.2177 7.08021 12.9011 7.06031 12.9442C7.01386 13.067 7.05367 13.1964 7.16315 13.2893C7.25273 13.3656 7.28923 13.3722 7.55796 13.3722C7.73711 13.3722 7.85323 13.3855 7.85323 13.4054C7.85323 13.4253 7.37548 14.0955 6.79489 14.895C6.21098 15.6946 5.72328 16.388 5.71001 16.4378C5.70006 16.4842 5.7067 16.5705 5.72992 16.6269C5.79627 16.7828 5.91239 16.8226 6.30719 16.8226C6.49962 16.8226 6.66219 16.8326 6.66882 16.8458C6.67877 16.8624 6.34369 17.4828 5.92234 18.2326C4.98013 19.918 5.00003 19.8782 5.00003 19.9512C5.00003 20.0407 5.08961 20.2 5.1626 20.2398C5.20573 20.2597 5.96547 20.273 7.36885 20.273H9.51206V21.0394V21.8057L9.60828 21.902L9.70449 21.9982H10.4543C11.1941 21.9982 11.2008 21.9982 11.2937 21.9185L11.3865 21.8389L11.3965 21.056L11.4065 20.273H12.0534H12.7003L12.6804 20.2C12.6406 20.0839 12.6572 19.8815 12.7103 19.772C12.7368 19.7189 12.9724 19.291 13.2345 18.8232C13.4933 18.3554 13.6923 17.9672 13.6757 17.9606C13.334 17.8478 13.1449 17.5425 13.2079 17.2075C13.2212 17.1311 13.4302 16.8193 13.8284 16.2719C14.1601 15.8207 14.4355 15.4358 14.4421 15.4126C14.4521 15.3894 14.1435 14.9415 13.762 14.414C13.3771 13.8865 13.062 13.4353 13.062 13.412C13.062 13.3822 13.1449 13.3722 13.3639 13.3722C13.6525 13.3722 13.6691 13.3689 13.762 13.276C13.9611 13.077 13.9677 13.0902 12.8496 11.448C12.2956 10.6351 11.8477 9.96166 11.8577 9.94507C11.8643 9.9318 11.9837 9.92185 12.1198 9.92185C12.3387 9.92185 12.3785 9.9119 12.4482 9.83891C12.4946 9.79578 12.5311 9.72279 12.5311 9.67634C12.5311 9.62326 12.2292 9.18533 11.6321 8.37582C11.1377 7.70233 10.6965 7.11842 10.6533 7.07529C10.5339 6.96912 10.3448 6.97576 10.2353 7.09188Z"
                            fill="#007F5F"/>
                        <path
                            d="M16.9634 10.1773C16.4193 10.8807 15.6164 12.0053 15.6164 12.0684C15.6164 12.1945 15.7027 12.2442 15.915 12.2442C16.0212 12.2442 16.1174 12.2575 16.1274 12.2708C16.1373 12.2873 15.7923 12.8115 15.3643 13.4386C14.5216 14.6794 14.4984 14.7225 14.6742 14.8619C14.7439 14.9183 14.8102 14.9315 14.9894 14.9315C15.1155 14.9315 15.2183 14.9382 15.2183 14.9481C15.2183 14.9581 14.8467 15.4789 14.3889 16.106C13.5197 17.3003 13.4931 17.3468 13.6126 17.5127C13.659 17.579 13.6922 17.5857 13.9576 17.5857C14.1268 17.5857 14.2628 17.5989 14.2728 17.6188C14.2861 17.6388 14.0107 18.1629 13.6623 18.7867C12.9922 19.9843 12.959 20.0706 13.095 20.2066C13.158 20.2697 13.2045 20.273 14.8202 20.273H16.479V21.0228C16.479 21.7792 16.4923 21.8655 16.6084 21.955C16.6449 21.9849 16.834 21.9949 17.2288 21.9982C18.0184 21.9982 17.9521 22.0844 17.9654 21.0725L17.9753 20.273H19.6275C21.1934 20.273 21.2863 20.2697 21.3593 20.2099C21.5119 20.0872 21.4788 20.0043 20.7953 18.7867C20.447 18.1629 20.1683 17.6354 20.1782 17.6188C20.1882 17.5989 20.3308 17.5857 20.4901 17.5857C20.8252 17.5857 20.8915 17.5459 20.8915 17.3501C20.8915 17.2539 20.7655 17.0615 20.0654 16.1027C19.6109 15.4789 19.2493 14.9614 19.2592 14.9514C19.2692 14.9415 19.3687 14.9315 19.4815 14.9315C19.6408 14.9315 19.7071 14.9149 19.7768 14.8619C19.9526 14.7225 19.9327 14.6794 19.0867 13.4353C18.6587 12.8082 18.317 12.284 18.327 12.2674C18.3336 12.2542 18.4365 12.2442 18.5526 12.2442C18.7782 12.2442 18.8346 12.2044 18.8346 12.0518C18.8346 11.9954 17.5772 10.2503 17.4013 10.0612C17.3549 10.0147 17.2919 9.9882 17.2189 9.9882C17.126 9.9882 17.0895 10.0147 16.9634 10.1773Z"
                            fill="#007F5F"/>
                    </svg>
                </div>
            </Link>
        </header>
    );
};

export default Header;