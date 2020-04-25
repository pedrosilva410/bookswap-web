import React from 'react';
import UserPhoto from '../../assets/SVG/account.svg'
import './styles.css'

export default function Profile() {
    return(
        <main>
            <div className='userInfo'>
                <img className='userImg' alt= 'userPhoto' src={UserPhoto}/>
                <div className='userBox'>
                    <div className='userText'>
                        <h3 className='userName'>User Name</h3>
                        <p className='userBio'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor, quos tempora soluta sequi quae perferendis suscipit beatae officia tenetur amet, nobis maxime. Sapiente maxime voluptatum aperiam. Recusandae, in ipsam.</p>
                    </div>
                    <div className='userContact'>
                        <p className='contactText'>Email: user@mail.com</p>
                        <p className='contactText'>Phone: 911111111</p>
                    </div>
                </div>
            </div>

            <h3 className='booksTitle'>Books</h3>

            <div className='userBooks'>
                <div className='Books'></div>
                <div className='Books'></div>
                <div className='Books'></div>
                <div className='Books'></div>
            </div>
        </main>
    )
}