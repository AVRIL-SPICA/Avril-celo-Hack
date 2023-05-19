import React from 'react'
import "./profile.css"
import Joblist from '../joblist/joblist'
import Nft from '../jobNft/nft'
import Web3 from '../../web3/web3'
import Footer from '../Footer/Footer'

function Profile() {
    return (
        <>
        <section className='p__back'>
            
            <div className='profile'>
               
                <h2 className='headetag'>     Your bio is to showcase your unique qualities and experience let get started</h2>
                    <div className='circle'>

                    </div>
                <form action="">
                    <label htmlFor="email">Paste wallet</label> <br />
                    <input type="text" /> <br />

                    <label htmlFor="Email">Add Email</label> <br />
                    <input  type="text" />  <br />

                    <label htmlFor="professional"> Your Professional</label> <br />
                    <input placeholder='**********' type="text" /> <br/>
                    <label htmlFor="About you "> About you </label> <br />
                    <input placeholder='**********' type="text" />
                    <div>
                    </div>

                    
                </form>


            </div>
            <div className='sec__par'>
            <button>Done</button>
             </div>
            
        </section>
  <Joblist />
  <Nft/>
  <Web3/>
  <Footer/>
  </>
    )
}

export default Profile