import React from 'react';
import classes from './UserDiscription.module.scss';


type UserDiscriptionType = {}

const UserDiscription: React.FC<UserDiscriptionType> = () => {


    return <div className={classes.userDiscription}>
        <h3 className={classes.userTitle}>Какойто Челик</h3>
        <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam
            consequuntur ducimus natus obcaecati rem voluptas. Ab autem illum incidunt inventore mollitia repellendus
            sequi veritatis.</p>
        <div className={` ${classes.top}`}>
            <ul className={classes.list}>

                <li className={classes.item}>Пол:</li>
                <li className={classes.item}>День рождения:</li>
                <li className={classes.item}>Город:</li>
                <li className={classes.item}>Место работы:</li>

            </ul>
            <ul className={classes.list}>

                <li className={classes.answer}>мужской</li>
                <li className={classes.answer}>3 сентября 1990</li>
                <li className={classes.answer}>Северодонецк</li>
                <li className={classes.answer}>Магазин "Снабженец"</li>

            </ul>
        </div>

        <div className={classes.table}>
            <div className={classes.lineWrapp}>
                <span className={classes.itemTitle}>
                    Общая информация

                </span>
                <span className={classes.border}>

                    </span>
            </div>
            <div className={classes.separate}>
                <ul className={classes.list}>

                    <li className={classes.item}>Место учебы:</li>
                    <li className={classes.item}>Увлечения:</li>

                </ul>
                <ul className={classes.list}>

                    <li className={classes.answer}>СТИ</li>
                    <li className={classes.answer}>игры, фильмы, музыка</li>

                </ul>
            </div>

        </div>
        <div className={classes.table}>
            <div className={classes.lineWrapp}>
                <span className={classes.itemTitle}>
                    Предпочтения

                </span>
                <span className={classes.border}>

                    </span>
            </div>
            <div className={classes.separate}>
                <ul className={classes.list}>

                    <li className={classes.item}>Полит. взгляды:</li>
                    <li className={classes.item}>Отн. к курениею:</li>
                    <li className={classes.item}>Отн. к алкоголю:</li>
                    <li className={classes.item}>Главное в людях:</li>


                </ul>
                <ul className={classes.list}>

                    <li className={classes.answer}>Пихуй</li>
                    <li className={classes.answer}>Нейтральное</li>
                    <li className={classes.answer}>Негативное</li>
                    <li className={classes.answer}>Честность, пунктуальность, хорошее чувство юмора</li>


                </ul>
            </div>

        </div>
        <div className={classes.table}>
            <div className={classes.lineWrapp}>
                <span className={classes.itemTitle}>
                    Карьера

                </span>
                <span className={classes.border}>

                    </span>
            </div>
            <div className={classes.separate}>
                <ul className={classes.list}>

                    <li className={classes.item}>Места учебы:</li>
                    <li className={classes.item}>Увлечения:</li>

                </ul>
                <ul className={classes.list}>

                    <li className={classes.answer}>СТИ</li>
                    <li className={classes.answer}>игры, фильмы, музыка</li>

                </ul>
            </div>

        </div>

        </div>


}


export default UserDiscription;