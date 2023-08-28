import headerImg from '../assets/jhhh.png'
export const Banner = () => {
    return (<>
        <section className="header-section">
            <div className='container'>
                <div className="left-banner">
                    <div classNameName="center-div">
                        <h1 className="font-weight-bold">Fresh <br /><span>2022</span><br />Look</h1>

                    </div>
                    <button className='btn btn-outline-light '>See More</button>
                </div>
                <div className="right-banner">
                    <div className='imgbox'>
                        <img src={headerImg} alt="Header Img" />
                    </div>
                </div>
            </div>
            
            
        </section>

    </>)
}
