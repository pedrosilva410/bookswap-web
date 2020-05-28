import React from 'react';
import UserPhoto from '../../assets/SVG/account.svg'
import './styles.css'
import GetAccountApi from '../../js/get-account-api'

export default function Profile() {

    const accountInfo = GetAccountApi.getAccount(localStorage.getItem("userId"))

    return(
        <main>
            <div className='userInfo1'>
                <img className='userImg1' alt= 'userPhoto1' src={UserPhoto}/>
                <div className='userBox1'>
                    <div className='userText1'>
                        <h3 className='userName1'>{Headers.getAccount()}</h3>
                        <p className='userBio1'>{accountInfo.bio}</p>
                    </div>
                    <div className='userContact1'>
                        <p className='contactText1'>Email: user@mail.com</p>
                        <p className='contactText1'>Phone: 911111111</p>
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