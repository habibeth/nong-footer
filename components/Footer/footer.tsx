"use client"
import { Parallax } from 'react-parallax';
import footerBg from '@/public/asset/f-bg.jpg'
import Image from 'next/image';



const FooterPage = () => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={`https://i.ibb.co/B44G8dZ/Beef-Kala-Bhuna.jpg`}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                <div className="">
                    <h2>About Us</h2>
                    <p>Sed sit amet nisl in velit viverra bibendum in ac nisi. Etiam efficitur dui vitae sem rutrum, id pretium nunc varius. Vestibulum hendrerit malesuada.</p>
                </div>
                <div className="">
                    <ul className='menu'>
                        <li>111 8th Ave, New York U.S.A.</li>
                        <li>111 8th Ave, New York U.S.A.</li>
                        <li>111 8th Ave, New York U.S.A.</li>
                        <li>111 8th Ave, New York U.S.A.</li>
                        <li>111 8th Ave, New York U.S.A.</li>
                    </ul>
                </div>
                <Image src={footerBg} alt={"footer"} width={200} height={200}/>
            </div>
        </Parallax>
    );
};

export default FooterPage;
