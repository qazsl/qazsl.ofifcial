// Alphabet.js
import Words_navigator from './words-nav-comp';
import React, { useState } from 'react';
import './Alphabet.css';
import { Link } from 'react-router-dom';
import a1_jest from './jest/Ә.png';
import g1_jest from './jest/Ғ.jpg';
import d_jest from './jest/Д.jpg';
import e1_jest from './jest/Ё.jpg';
import z_jest from './jest/З.jpg';
import i1_jest from './jest/Й.jpg';
import k_jest from './jest/К.jpg';
import k1_jest from './jest/Қ.jpg';
import n1_jest from './jest/Ң.jpg';
import y2_jest from './jest/Ұ.jpg';
import ts_jest from './jest/Ц.jpg';
import sh1_jest from './jest/Щ.jpg';
import b2_jest from './jest/Ъ.jpg';
import b1_jest from './jest/Ь.jpg';

function Alphabet() {
    const [showImages, setShowImages] = useState(Array(43).fill(false));

    return (
        <div className='kazakh-alphabet'>
            <Words_navigator />
            <div className='alphabets'>
                <Link to="/a" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 1), true, ...images.slice(2)])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 1), false, ...images.slice(2)])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[1] ? <img src="https://avatars.dzeninfra.ru/get-zen_doc/1885679/pub_64ec794f39814150a4a8a48d_64ec7a4dbc3bf63c2e215bbd/scale_1200" alt="A" /> : <span id='letters'>A</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/ә" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 2), true, ...images.slice(3)])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 2), false, ...images.slice(3)])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[2] ? <img src={a1_jest} alt="Ә" /> : <span id='letters'>Ә</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/б" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 3), true])} ы
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 3), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[3] ? <img src="" alt="Б" /> : <span id='letters'>Б</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/в" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 4), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 4), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[4] ? <img src="your-image-url" alt="В" /> : <span id='letters'>В</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/г" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 5), true, ...images.slice(2)])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 5), false, ...images.slice(2)])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[5] ? <img src="" alt="Г" /> : <span id='letters'>Г</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/ғ" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 6), true, ...images.slice(3)])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 6), false, ...images.slice(3)])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[6] ? <img src={g1_jest} alt="Ғ" /> : <span id='letters'>Ғ</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/д" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 7), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 7), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[7] ? <img src={d_jest} alt="Д" /> : <span id='letters'>Д</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/е" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 8), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 8), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[8] ? <img src="your-image-url" alt="Е" /> : <span id='letters'>Е</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/ё" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 9), true, ...images.slice(2)])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 9), false, ...images.slice(2)])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[9] ? <img src={e1_jest} alt="Ё" /> : <span id='letters'>Ё</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/ж" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 10), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 10), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[10] ? <img src="" alt="Ж" /> : <span id='letters'>Ж</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/з" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 11), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 11), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[11] ? <img src={z_jest} alt="З" /> : <span id='letters'>З</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/и" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 12), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 12), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[12] ? <img src="your-image-url" alt="И" /> : <span id='letters'>И</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/й" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 13), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 13), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[13] ? <img src={i1_jest} alt="Й" /> : <span id='letters'>Й</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/к" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 14), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 14), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[14] ? <img src={k_jest} alt="К" /> : <span id='letters'>К</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/қ" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 15), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 15), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[15] ? <img src={k1_jest} alt="Қ" /> : <span id='letters'>Қ</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/л" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 16), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 16), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[16] ? <img src="your-image-url" alt="Л" /> : <span id='letters'>Л</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/м" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 17), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 17), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[17] ? <img src="your-image-url" alt="М" /> : <span id='letters'>М</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/н" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 18), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 18), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[18] ? <img src="your-image-url" alt="Н" /> : <span id='letters'>Н</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/ң" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 19), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 19), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[19] ? <img src={n1_jest} alt="Ң" /> : <span id='letters'>Ң</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/о" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 20), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 20), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[20] ? <img src="your-image-url" alt="О" /> : <span id='letters'>О</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/ө" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 21), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 21), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[21] ? <img src="your-image-url" alt="Ө" /> : <span id='letters'>Ө</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/п" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 22), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 22), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[22] ? <img src="your-image-url" alt="П" /> : <span id='letters'>П</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/р" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 23), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 23), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[23] ? <img src="your-image-url" alt="Р" /> : <span id='letters'>Р</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/с" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 24), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 24), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[24] ? <img src="your-image-url" alt="С" /> : <span id='letters'>С</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/т" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 25), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 25), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[25] ? <img src="your-image-url" alt="Т" /> : <span id='letters'>Т</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/у" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 26), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 26), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[26] ? <img src="your-image-url" alt="У" /> : <span id='letters'>У</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/ұ" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 27), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 27), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[27] ? <img src={y2_jest} alt="Ұ" /> : <span id='letters'>Ұ</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/ү" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 28), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 28), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[28] ? <img src="your-image-url" alt="Ү" /> : <span id='letters'>Ү</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/ф" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 29), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 29), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[29] ? <img src="your-image-url" alt="Ф" /> : <span id='letters'>Ф</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/х" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 30), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 30), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[30] ? <img src="your-image-url" alt="Х" /> : <span id='letters'>Х</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/һ" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 31), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 31), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[31] ? <img src="your-image-url" alt="Һ" /> : <span id='letters'>Һ</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/ц" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 32), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 32), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[32] ? <img src={ts_jest} alt="Ц" /> : <span id='letters'>Ц</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/ч" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 33), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 33), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[33] ? <img src="your-image-url" alt="Ч" /> : <span id='letters'>Ч</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/ш" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 34), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 34), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[34] ? <img src="your-image-url" alt="Ш" /> : <span id='letters'>Ш</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/щ" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 35), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 35), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[35] ? <img src={sh1_jest} alt="Щ" /> : <span id='letters'>Щ</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/ъ" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 36), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 36), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[36] ? <img src={b2_jest} alt="Ъ" /> : <span id='letters'>Ъ</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/ы" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 37), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 37), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[37] ? <img src="your-image-url" alt="Ы" /> : <span id='letters'>Ы</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/і" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 38), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 38), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[38] ? <img src="your-image-url" alt="І" /> : <span id='letters'>І</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/ь" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 39), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 39), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[39] ? <img src={b1_jest} alt="Ь" /> : <span id='letters'>Ь</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/э" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 40), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 40), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[40] ? <img src="your-image-url" alt="Э" /> : <span id='letters'>Э</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/ю" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 41), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 41), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[41] ? <img src="your-image-url" alt="Ю" /> : <span id='letters'>Ю</span>}
                        </div>
                    </div>
                </Link>
                <Link to="/я" className='visit' 
                      onMouseEnter={() => setShowImages(images => [...images.slice(0, 42), true])} 
                      onMouseLeave={() => setShowImages(images => [...images.slice(0, 42), false])}>
                    <div className='border'>
                        <div className='letters'>
                            {showImages[42] ? <img src="your-image-url" alt="Я" /> : <span id='letters'>Я</span>}
                        </div>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Alphabet;
