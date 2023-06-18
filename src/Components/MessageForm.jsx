import "../Styles/MessageForm.css";
import CategoryChose from "./CategoryChose.jsx";

import {useNavigate} from 'react-router-dom';

export default function MessageForm() {

    const navigate = useNavigate();

    const navigateSendMessage = () => {
        navigate('/');
    };
    
    const region = [
        {value: "Сергели", label: "Сергели" },
        {value: "Новза", label: "Новза" },
        {value: "Юнусабад", label: "Юнусабад" },
        {value: "Мирабад", label: "Мирабад" },
        {value: "Чиланзар", label: "Чиланзар" },
    ];
    const city = [
        {value: "Ташкент", label: "Ташкент" },
        {value: "Навои", label: "Навои" },
        {value: "Самарканд", label: "Самарканд" },
        {value: "Бухара", label: "Бухара" },
    ];
    const status = [
        {value: "Активный", label: "Активный" },
        {value: "Неактивный", label: "Неактивный" },
    ];

    return(
        <div className="mesForm-wrap">

                <form action="" className="mesForm-Form">

                <div className="mesForm-container">

                    <div className="mesForm-1row">

                    <div className="mesForm-item">
                    <label htmlFor="name">Имя</label>
                    <input type="text" id="name" placeholder="Name"/>
                    </div>

                    <div className="mesForm-item">
                    <label htmlFor="secondname">Фамилия</label>
                    <input type="text" id="secondname" placeholder="Second Name"/>
                    </div>

                    <div className="mesForm-item">
                    <label htmlFor="surname">Отчество</label>
                    <input type="text" id="surname" placeholder="Surname"/>
                    </div>

                    <div className="mesForm-item">
                    <label htmlFor="region">Регион</label>
                    <CategoryChose isMulti options={region}/>
                    </div>

                    <div className="mesForm-item">
                    <label >Город</label>
                    <CategoryChose isMulti options={city}/>
                    </div>

                    <div className="mesForm-item">
                    <label htmlFor="mahalla">Махалля</label>
                    <input type="text" id="mahalla"/>
                    </div>

                    <div className="mesForm-item">
                    <label htmlFor="adress">Адрес</label>
                    <input type="text" id="adress"/>
                    </div>

                    <div className="mesForm-item">
                    <label>Пол</label>
                    <div>
                    <input type="radio" name="sex" id="female"/>
                    <label htmlFor="female">Женшина</label>
                    <input type="radio" name="sex" id="male"/>
                    <label htmlFor="male">Мужчина</label>
                    </div>
                    </div>

                    <div className="mesForm-item">
                    <label htmlFor="dateOfBirth">Дата Рождения</label>
                    <input type="text" id="dateOfBirth" placeholder="09.06.1991"
                    onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}/>
                    </div>
                        
                    </div>

                    <div className="mesForm-2row">

                    <div className="mesForm-item">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email"/>
                    </div>

                    <div className="mesForm-item">
                    <label htmlFor="status">Статус</label>
                    <CategoryChose isMulti options={status}/>
                    </div>  

                    <div className="mesForm-item">
                    <label>Открытость Сообщений</label>
                    <div>
                    <input type="radio" name="openMessage" id="yes"/>
                    <label htmlFor="yes">Да</label>
                    <input type="radio" name="openMessage" id="no"/>
                    <label htmlFor="no">Нет</label>
                    </div>
                    </div>  

                    <div className="mesForm-item">
                    <div>
                    <label htmlFor="employer">Предприниматель</label>
                    <input type="checkbox" id="employer"/>
                    </div>
                    <label >Представляться как субъект предпринимательства, <br/>
                    если Вы действительно отправляете обращение в <br/>
                    качестве субъекта предпринимательства</label>
                    </div>  

                    <input type="button" value="Загрузить файл" className="downloadButton" id="downBut"/>
                    <label htmlFor="downBut" className="downBut-label">Размер одного файла не должен превышать 10мб в количестве 10 файлов</label>   


                    </div>

            </div>

                    <div className="textArea">
                    <p>Текст Обращения</p>
                    <textarea rows="" cols="" className="mesFrom-textarea"></textarea>
                    </div>

            <div className="bottomContent">

                    <div>
                    <input type="checkbox" id="policy"/>
                    <label htmlFor="policy">Я принимаю <a>правила</a> отправки сообщений</label>
                    </div>

                    <input type="reset" value="Назад"/>
                    
                    <input type="submit" onClick={navigateSendMessage}/>

            </div>

                </form>
            
        </div>
    )
}