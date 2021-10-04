import React, { Component } from 'react';
import pic1 from '../img/ana.svg'
import pic2 from '../img/men2.svg'
import pic3 from '../img/Yoga1.svg'
import pic5 from '../img/Stylist1.svg'
import RoundImg from './roundImage';
import pic6 from '../img/img-v1.svg'
import pic4 from '../img/ptd.png'
import Footer from './footer';
import logo1 from '../img/Freya-Logo.svg'
import icon1 from '../img/Footer/f-l1.png'
import icon2 from '../img/Footer/i-l1.png'
import icon3 from '../img/Footer/insta-1.png'
import v1 from '../img/Vector 30.png'
import v2 from '../img/Vector 31.svg'
import v3 from '../img/Vector 32.png'
import v4 from '../img/Vector 29.png'

export default function AboutSection4(){
    return(
        <section className="about-section4">
            <div className="aboutsection4-content-container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-6" id="abs4-1" >
                        <img className="ab-sec4-v1" src={pic6}/>
                        <img className="ab-sec4-v2" src={pic4}/>
                       
                    </div>
                    <div className="col-12 col-md-12 col-lg-6" id="abs4-2">
                        <h2 className="ab-sec4-heading1">МЫ <span>— БОЛЬШЕ</span>, ЧЕМ ПРОСТО ПСИХОЛОГИ</h2>
                        <h2 className="ab-sec4-subheading">“Понять, чего вы хотите”</h2>
                        <p className="ab-sec4-p1">Мы верим — прежде всего Женщина должна уделять время себе. Поэтому мы создали программы спа-ухода за психологическим здоровьем. В программу входят не только сессии с психологом, но и занятия с диетологом, йога-инструктором, американским лайф-коучем, стилистом. </p>
                        <p className="ab-sec4-p1 ab-sec4-tcm">Опытные профессионалы помогут преобразить жизнь, улучшить здоровье и обрести гармонию. В их заботливых руках женщины открывают свою внутреннюю силу заново. </p>
                        <p className="ab-sec4-p1 ab-sec4-tcm">Для нас важно, какой себя хочет видеть женщина, и мы знаем, как помочь ей этого достигнуть. Нам важны её мечты и желания — даже если она почти забыла о них за повседневными делами. 
</p>
                    </div>
                    
                </div>
                <h2 className="ab-sec4-subheading1">“Понять, чего вы хотите”</h2>
                <p className="ab-sec4-p1 ab-sec4-tcm1">Опытные профессионалы помогут преобразить жизнь, улучшить здоровье и обрести гармонию. В их заботливых руках женщины открывают свою внутреннюю силу заново. </p>
                        <p className="ab-sec4-p1 ab-sec4-tcm1">Для нас важно, какой себя хочет видеть женщина, и мы знаем, как помочь ей этого достигнуть. Нам важны её мечты и желания — даже если она почти забыла о них за повседневными делами. 
</p>
              <h2 className="ab-sec4-heading2">Специалисты</h2>
              <p className="ab-sec4-p2">В сердце «Фрейя» — команда профессионалов, которые прошли тщательный отбор, прежде чем приступить к работе с нашими клиентами. </p>
                <div className="ab-sec4-allimg">
                    <div>  <RoundImg width="250px" height="250px" img={pic2}/>
                    <p className="ab-sec4-p2 rp-1">Лайф-коуч</p>
                    </div>
                    <div><RoundImg width="250px" height="250px" img={pic1}/>
                    <p className="ab-sec4-p2 rp-1">Диетолог</p></div>
                    <div><RoundImg width="250px" height="250px" img={pic5}/>
                    <p className="ab-sec4-p2 rp-1">Стилист</p>
                    </div>
                    <div>    <RoundImg width="250px" height="250px" img={pic3}/>
                    
                    <p className="ab-sec4-p2 rp-1">Йога-инструктор</p></div> 
                    </div>  
                   
                    <div className="ab4-t-container">
                        <img src={v1} className="v v1" style={{width:"10%"}}/>
                        <img src={v2} className="v v2" style={{width:"10%"}}/>
                        <img src={v3} className="v v3" style={{width:"20%"}}/>
                        <img src={v4} className="v v4" style={{width:"17%"}}/>
                    <p className="ab-sec4-p2 rp-1">Лайф-коуч</p>
                    <p className="ab-sec4-p2 rp-2">Йога-инструктор</p>
                    <div className="ab-sec4-allimg1">
                    <div className="row">
                        <div className="col-3">
                        <RoundImg width="150px" height="150px" img={pic2}/>
                        </div>
                        <div className="col-3">
                        <RoundImg width="150px" height="150px" img={pic1}/>
                        </div>
                        <div className="col-3">
                        <RoundImg width="150px" height="150px" img={pic5}/>
                        </div>
                        <div className="col-3">
                        <RoundImg width="150px" height="150px" img={pic3}/>
                        </div>
                    </div>
                        
                    
                    
              
                   
                    </div>   
                    <p className="ab-sec4-p2 rp-1">Лайф-коуч</p>
                    <p className="ab-sec4-p2 rp-2">Стилист</p>
                        </div>  
                        <button class="ab4-btn" > Записаться </button> 
                </div>
                <div className="ab4footer">
                    
                <Footer color="#0E4952" logo={logo1} paracolor="white" icon1={icon1} icon2={icon2} icon3={icon3} iconwidth="40px" iconheight="40px" margintop="0rem" />
                </div>
                </section>
    )
}