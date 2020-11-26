import React from 'react';
import classes from './UserDiscription.module.scss';


type UserDiscriptionType = {}

const UserDiscription: React.FC<UserDiscriptionType> = () => {


    return <div className={classes.userDiscription}>
        <h3 className={classes.userTitle}>Какойто Челик</h3>
        <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam consequuntur ducimus natus obcaecati rem voluptas. Ab autem illum incidunt inventore mollitia repellendus sequi veritatis.</p>
        <ul className={classes.list}>
            <div className={classes.lineWrapp}>
                <span className={classes.itemTitle}>
                    Общая информация

                </span>
                <span className={classes.border}>

                    </span>
            </div>
            <li className={classes.item}>пол: <span className={classes.answer}>муж</span></li>
            <li className={classes.item}>день рождения: <span className={classes.answer}>33года</span></li>
            <li className={classes.item}>места учебы: <span className={classes.answer}>СТИ</span></li>
            <li className={classes.item}>увлечения: <span className={classes.answer}>игры, фильмы, музыка</span></li>
            <li className={classes.item}>место работы: <span className={classes.answer}>магазин Снабженец</span></li>

        </ul>
        <ul className={classes.list}>
            <div className={classes.lineWrapp}>
                <span className={classes.itemTitle}>
                    Общая информация

                </span>
                <span className={classes.border}>

                    </span>
            </div>
            <li className={classes.item}>пол: <span className={classes.answer}>муж</span></li>
            <li className={classes.item}>день рождения: <span className={classes.answer}>33года</span></li>
            <li className={classes.item}>места учебы: <span className={classes.answer}>СТИ</span></li>
            <li className={classes.item}>увлечения: <span className={classes.answer}>игры, фильмы, музыка</span></li>
            <li className={classes.item}>место работы: <span className={classes.answer}>магазин Снабженец</span></li>
        </ul>
        <ul className={classes.list}>
            <div className={classes.lineWrapp}>
                <span className={classes.itemTitle}>
                    Общая информация

                </span>
                <span className={classes.border}>

                    </span>
            </div>
            <li className={classes.item}>пол: <span className={classes.answer}>муж</span></li>
            <li className={classes.item}>день рождения: <span className={classes.answer}>33года</span></li>
            <li className={classes.item}>места учебы: <span className={classes.answer}>СТИ</span></li>
            <li className={classes.item}>увлечения: <span className={classes.answer}>игры, фильмы, музыка</span></li>
            <li className={classes.item}>место работы: <span className={classes.answer}>магазин Снабженец</span></li>
        </ul>
        <ul className={classes.list}>
            <div className={classes.lineWrapp}>
                <span className={classes.itemTitle}>
                    Общая информация

                </span>
                <span className={classes.border}>

                    </span>
            </div>
            <li className={classes.item}>пол: <span className={classes.answer}>муж</span></li>
            <li className={classes.item}>день рождения: <span className={classes.answer}>33года</span></li>
            <li className={classes.item}>места учебы: <span className={classes.answer}>СТИ</span></li>
            <li className={classes.item}>увлечения: <span className={classes.answer}>игры, фильмы, музыка</span></li>
            <li className={classes.item}>место работы: <span className={classes.answer}>магазин Снабженец</span></li>
        </ul>
        <ul className={classes.list}>
            <div className={classes.lineWrapp}>
                <span className={classes.itemTitle}>
                    Общая информация

                </span>
                <span className={classes.border}>

                    </span>
            </div>
            <li className={classes.item}>пол: <span className={classes.answer}>муж</span></li>
            <li className={classes.item}>день рождения: <span className={classes.answer}>33года</span></li>
            <li className={classes.item}>места учебы: <span className={classes.answer}>СТИ</span></li>
            <li className={classes.item}>увлечения: <span className={classes.answer}>игры, фильмы, музыка</span></li>
            <li className={classes.item}>место работы: <span className={classes.answer}>магазин Снабженец</span></li>
        </ul>

    </div>
}


export default UserDiscription;