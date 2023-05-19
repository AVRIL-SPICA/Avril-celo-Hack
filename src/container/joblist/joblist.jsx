import React from 'react'
import space from "../../assets/Frame 5.png"
import "./joblist.css"

function joblist() {
    return (
        <section className='joblist'>
            <div className='Parent__div'>
                <div className='parent__div__text'>
                    <h2>Find Creatives</h2>
                <br/>
                    <p>So why confine your search for creative talent to your immediate vicinity_ <br />
                        You can use our platform to connect with talented people from all over the world, <br />
                        broaden your horizons,
                        and take your p</p>
                </div>
                <img src={space} alt="" />
            </div>
            <div className='mother__container'>
                <div id='1'>
                    Back-end

                </div>
                <div id='2'>
                    Front-end
                </div>
                <div id='3'>
                    Community manager
                </div>
                <div id='4'>
                    Content Writer
                </div>
            </div>
            <div className='mother__container2'>
                <div id='1'>
                    Back-end 
                </div>
                <div id='2'>
                    Front-end
                </div>
                <div id='3'>
                    Community manager
                </div>
                <div id='4'>
                    Content Writer
                </div>
            </div>
            <div className='mother__container2'>
                <div id='id1'>
                    Back-end
                </div>
                <div id='id2'>
                    Front-end
                </div>
                <div id='id3'>
                    Community manager
                </div>
                <div id='id4'>
                    Content Writer
                </div>
            </div>
            <div className='mother__container2'>
                <div id='1'>
                    Back-end
                </div>
                <div id='2'>
                    Front-end
                </div>
                <div id='3'>
                    Community manager
                </div>
                <div id='4'>
                    Content Writer
                </div>
            </div>
            <div class='more'>
                find more
            </div>

        </section>
    )
}

export default joblist