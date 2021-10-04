import React, { Component } from 'react';
import pic1 from '../img/Vector7.svg'
import pic2 from '../img/aboutbg.svg'
import pic3 from '../img/girl.png'
export default function AboutSection2(){
    return(
      <>
        <section className="about-section2">
            <div className="aboutsection2-content-container">
                <p className="aboutsection2-sub-p">Узнать больше</p>
                <h1 className="aboutsection2-heading1">Когнитивно-поведенческая терапия <span>поможет</span> </h1>
                <p className="aboutsection2-p">...принять себя и осознать, что отделяет вас от внутренней свободы 
</p>
<p className="aboutsection2-p1">Когнитивно-поведенческая терапия поможет осознать, что отделяет вас от внутренней свободы 

</p>

<div className="aboutsection2-subcontainer">
                    <div className="row">
                        <div className="col-md-7 ab-sc2-para-container">
                            <p className="about-sec2-p1">Наши психологи применяют методы когнитивно-поведенческой терапии. Что это значит? Этот подход изменяет иррациональные суждения о себе</p>
                            <p className="about-sec2-p2">Например, вы считаете, что не достойны успеха. Или, что все думают о вас плохо</p>
                            <p className="about-sec2-p3"> Эти убеждения возникают не просто так: вместе со специалистом вы распознаете причины нерациональных идей и переводите их в нужное русло.</p>
                       <p className="about-sec2-p4"> <span>Пример:</span>  Коллега по работе прошла мимо меня, не поздоровавшись</p>
                       <table class=" ab-sec2-table1">
  <tbody>
    <tr>
     
      <td className="td-1">МОИ МЫСЛИ</td>
      <td className="td-1">ЗДОРОВАЯ АЛЬТЕРНАТИВА</td>
    
    </tr>
    <tr>
    
      <td>Что со мной не так? Она что, злится на меня</td>
      <td>Она меня не заметила. Наверное, она глубоко задумалась о чем-то</td>
     
    </tr>
    <tr>
      
      <td>Чувствую себя обиженной</td>
      <td>Чувствую себя нейтрально</td>
      
    </tr>
    <tr>
        <td>Я не могу перестать думать о том, что случилось. Позже я буду холодно вести себя с этой коллегой</td>
        <td>Пошучу об этом случае в нашем разговоре и буду относиться к ней как обычно</td>
    </tr>
  </tbody>
</table>
                        </div>
                        <div className="col-md-5 ">
                            <div className="about-sec2-imgct">
                            <img src={pic3}/>
                            <p className="ab-sec2-imgpara">“Когнитивно-поведенческая терапия соединяет эмоции,мысли и действия”</p>
                       
                            </div>
                            </div>
                    </div>
                      
                    </div>
                </div> 
               
                           
        </section>
        <p className="about-sec2-p5"> <span>Пример:</span>  Коллега по работе прошла мимо меня, не поздоровавшись</p>
        <table class=" ab-sec2-table2">
  <tbody>
    <tr>
     
      <td className="td-1">МОИ МЫСЛИ</td>
      <td className="td-1">ЗДОРОВАЯ АЛЬТЕРНАТИВА</td>
    
    </tr>
    <tr>
    
      <td>Что со мной не так? Она что, злится на меня</td>
      <td>Она меня не заметила. Наверное, она глубоко задумалась о чем-то</td>
     
    </tr>
    <tr>
      
      <td>Чувствую себя обиженной</td>
      <td>Чувствую себя нейтрально</td>
      
    </tr>
    <tr>
        <td>Я не могу перестать думать о том, что случилось. Позже я буду холодно вести себя с этой коллегой</td>
        <td>Пошучу об этом случае в нашем разговоре и буду относиться к ней как обычно</td>
    </tr>
  </tbody>
</table>
<p className="ab-sec2-imgpara1">“Когнитивно-поведенческая терапия соединяет эмоции,мысли и действия”</p>
                       
        </>
    )
}