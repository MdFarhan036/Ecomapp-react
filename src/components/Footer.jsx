import React from 'react'

export const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="footer-content text-center text-md-start mt-5">

                    <div className="footer-col">
                        <h3 className='footer-name'>Newsletter</h3>
                        <p>Get news about articles and updates
                            in your inbox.</p>
                    </div>
                    <div className="footer-col1">
                        <div class="txtb">
                            <input type="input-text" name="name" placeholder="Name" />
                        </div>
                        <div class="txtb">
                            <input class="input-text" type="email" name="email" placeholder="Email" />
                        </div>
                        <div class="txtb">
                            <input class="input-text" type="text" name="message" placeholder="Message" />

                        </div>
                    </div>

                </div>
                <div className="footer-col2">
                    <h2>GET <br /><span>IN TOUCH</span></h2>
                    <button className='send-button'>Send</button>
                </div>
               <div className='copyright'>Copyright 2022 All Right Reserved By SG</div>
            </footer >

        </>
    )
}
