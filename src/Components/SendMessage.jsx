import React from "react"
import "../Styles/SendMessage.css" 
import CheckMessage from "./CheckMessage";
import Instructions from "./Inst"
import Instructions2 from "./inst2"
import {ReactComponent as CheckMark} from "../svg/check-mark-svgrepo-com.svg"

import {useNavigate} from 'react-router-dom';

 export default function SendMessage() {

    const navigate = useNavigate();

    const navigateMessage = () => {
        navigate('/MessageForm');
    };

    return(
        
        <div className="mes-wrap">

            <p className="header-wrap">Способ отправки сообщенинй</p>

        <div className="mes-container">

            <div className="instructions-header">
            <Instructions color = "#0095F6"/>
            <Instructions color = "green"/>
            <Instructions2/>
            </div>

            <div className="body">

            <div className="text">

                <p className="blueHeader">Просим ввести данные, удостоверяющие <br/>
                 Вашу личность</p>

                <p className="redHeader">Введенная персональная информация не будет разглашена и распространена третьим лицам!</p>

                <p className="paragraphHeader">Введенние данных, удостоверяющих личность представляет следующие удобства:</p>

                <div>
                    <CheckMark/>
                    <p>часть формы отправки обращения будет заполнена автоматически</p>
                </div>

                <div>
                    <CheckMark/>
                    <p>отправленное обращение будет сохраненно на Ваше имя и будет доступно в любое время при входе в систему через сервис id.egov.uz</p>
                </div>

                <div>
                    <CheckMark/>
                    <p>предотвращаются случаи необоснованного оставления отобращения без разсмотрения</p>
                </div>

            </div>

            <form action="" className="form" >
                <header>Данные документа, удостоверяющего личность*:</header>

                        <div className="radioButton">
                            <input type="radio" id="option1" name="myradio" value="option1"/>
                            <label htmlFor="option1">Паспорт, ID-карта и загранпаспорт гражданина</label>
                        </div>

                        <div className="radioButton">
                            <input type="radio" id="option2" name="myradio" value="option2"/>
                            <label htmlFor="option2">Свидетельство о рождении</label>
                        </div>
                
                <div>
                    <label htmlFor="seria">Серия</label>
                    <input type="text" id="seria" />
                    
                    <label htmlFor="nomer">Номер</label>
                    <input type="text" id="Nomer"/>
                </div>

                <div>
                    <label htmlFor="data">Дата рождения</label>
                    <input type="text" id="data" placeholder=" день | месяц | год"
                     onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}/>
                </div>

                <div>
                    <label htmlFor="capcha">Введите ответ примера на картинке</label>
                    <input type="text" id="capcha" />
                </div>

                <input type="submit" onClick={navigateMessage}/>

            </form>

            

            </div>

            <CheckMessage/>
            
        </div>

    </div>
    )
 }