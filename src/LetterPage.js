// src/LetterPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './LetterPage.css';

const LetterPage = () => {
    const { letter } = useParams();

    // Пример содержимого - вы можете заменить это на фактическое содержимое или получить данные динамически
    const letterContent = {
        a: "Это содержимое для буквы A",
        ә: "Это содержимое для буквы Ә",
        б: "Это содержимое для буквы Б",
        в: "Это содержимое для буквы В",
        г: "Это содержимое для буквы Г",
        ғ: "Это содержимое для буквы Ғ",
        д: "Это содержимое для буквы Д",
        е: "Это содержимое для буквы Е",
        ё: "Это содержимое для буквы Ё",
        ж: "Это содержимое для буквы Ж",
        з: "Это содержимое для буквы З",
        и: "Это содержимое для буквы И",
        й: "Это содержимое для буквы Й",
        к: "Это содержимое для буквы К",
        қ: "Это содержимое для буквы Қ",
        л: "Это содержимое для буквы Л",
        м: "Это содержимое для буквы М",
        н: "Это содержимое для буквы Н",
        ң: "Это содержимое для буквы Ң",
        о: "Это содержимое для буквы О",
        ө: "Это содержимое для буквы Ө",
        п: "Это содержимое для буквы П",
        р: "Это содержимое для буквы Р",
        с: "Это содержимое для буквы С",
        т: "Это содержимое для буквы Т",
        у: "Это содержимое для буквы У",
        ұ: "Это содержимое для буквы Ұ",
        ү: "Это содержимое для буквы Ү",
        ф: "Это содержимое для буквы Ф",
        х: "Это содержимое для буквы Х",
        һ: "Это содержимое для буквы Һ",
        ц: "Это содержимое для буквы Ц",
        ч: "Это содержимое для буквы Ч",
        ш: "Это содержимое для буквы Ш",
        щ: "Это содержимое для буквы Щ",
        ъ: "Это содержимое для буквы Ъ",
        ы: "Это содержимое для буквы Ы",
        і: "Это содержимое для буквы І",
        ь: "Это содержимое для буквы Ь",
        э: "Это содержимое для буквы Э",
        ю: "Это содержимое для буквы Ю",
        я: "Это содержимое для буквы Я",
    };

    return (
        <div className='letterpage-container'>
            <h1>Буква: {letter.toUpperCase()}</h1>
            <p>{letterContent[letter] || "Содержимое недоступно"}</p>
        </div>
    );
};

export default LetterPage;