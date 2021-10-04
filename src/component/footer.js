import React, { Component } from 'react';

const Footer=(props)=>{
    
return(
    <>
<footer style={{background:props.color}} className="footer-large">
    <div className="row">
        <div className="col-md-5 col-lg-5">
            <div className="row">
                <div className="col-md-3 col-lg-4">
                    <img src={props.logo}/>
                </div>
                <div className="col-md-7 col-lg-8">
              {props.page=="program"? "":<p style={{color:props.paracolor}}>  Важно! Мы — не скорая помощь. Если вы находитесь в опасности и что-то (кто-то) угрожает вашей жизни и здоровью, обратитесь к 
              <span> <a href="/free-therapy" style={{textDecoration:"none" ,color:"#51A095"}}>этим организациям.</a> </span>
              </p>}      
                </div>
            </div>
        </div>
        <div className="col-md-7 col-lg-7" id="footer-part2">
        <div className="row">
                <div className="col-md-4">
                    <p className="footer-p1" style={{color:props.paracolor}}>О нас</p>
                    <p className="footer-p2" style={{color:props.paracolor}}>Программы</p>
                    <p style={{color:props.paracolor}}>Особенные клиенты</p>
                </div>
                <div className="col-md-5">
                    <p className="footer-p1"style={{color:props.paracolor}} >Политика конфиденциальности</p>
                    <p className="footer-p2"style={{color:props.paracolor}} >Персональные данные</p>
                    <p style={{color:props.paracolor}}>Вопросы</p>
                </div>
                <div className="col-md-3">
                    <div className="row">
                        <div className="col-4 footer-icon" style={{marginTop:props.margintop}}>
                        <img src={props.icon1} style={{width:props.iconwidth,height:props.iconheight}}/>
                        </div>
                        <div className="col-4 footer-icon" style={{marginTop:props.margintop}}>
                        <img src={props.icon2} style={{width:props.iconwidth,height:props.iconheight}}/>
                        </div>
                        <div className="col-4 footer-icon"style={{marginTop:props.margintop}}>
                        <img src={props.icon3} style={{width:props.iconwidth,height:props.iconheight}}/>
                        </div>
                       <div><p className="footer-lp" style={{color:props.paracolor}}>Не забудьте подписаться на нас!</p></div>
                        
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<footer className="footer-min" style={{background:props.color,paddingTop:props.paddingTop}}>
<div className="row">
                        <div className="col-2 footer-icon" style={{marginTop:props.margintop}}>
                        <img src={props.icon1} style={{width:props.iconwidth,height:props.iconheight}}/>
                        </div>
                        <div className="col-2 footer-icon" style={{marginTop:props.margintop}}>
                        <img src={props.icon2} style={{width:props.iconwidth,height:props.iconheight}}/>
                        </div>
                        <div className="col-2 footer-icon"style={{marginTop:props.margintop}}>
                        <img src={props.icon3} style={{width:props.iconwidth,height:props.iconheight}}/>
                        </div>
                       
                      
                    </div>
                    <p className="footer-p1"style={{color:props.paracolor}} >Не забудьте нас зафолловить!</p>
                    <p className="footer-p1"style={{color:props.paracolor}} >Вопросы-ответы</p>
                    <p style={{color:props.paracolor,paddingLeft:'1.5rem',marginTop:'0.5rem',marginBottom:'5px'}}>  Важно! Мы — не скорая помощь. Если вы находитесь в опасности и что-то (кто-то) угрожает вашей жизни и здоровью, обратитесь к 
              <span> <a href="/free-therapy" style={{textDecoration:"none" ,color:"#51A095"}}>этим организациям.</a> </span>
              </p>
</footer >
</>
)
}
export default Footer