import React, { useEffect } from 'react';

function Home() {
    useEffect(() => {
        var countDownDate = new Date("march 17, 2024 00:00:00").getTime();
        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            
            document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
            document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
            document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
            document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

            if (distance < 0) {
                clearInterval(x);
                // You can perform any action when the countdown reaches zero here
            }
        }, 1000);

        return () => clearInterval(x);
    }, []);

    return (
        <div className='container'>
            <div className='outernav'>
                <div className='navbar'>
                    <img src="https://ik.imagekit.io/jaromjery/final/jj.jpeg?updatedAt=1707820609307" className='logo' alt="logo" />
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Contacts</li>
                    </ul>
                </div>
            </div>
            <div className='content-box'>
                <div className='content'>
                    <p>Website Is Under Maintenance</p>
                    <h1>We're <span>Launching</span> soon</h1>
                    <div className='launch-time'>
                        <div>
                            <p id='days'>00</p>
                            <span>Days</span>
                        </div>
                        <div>
                            <p id='hours'>00</p>
                            <span>Hours</span>
                        </div>
                        <div>
                            <p id='minutes'>00</p>
                            <span>Minutes</span>
                        </div>
                        <div>
                            <p id='seconds'>00</p>
                            <span>Seconds</span>
                        </div>
                    </div>
                    <div className='who'>
                        <h1>Who We are ?</h1>
                        <p>We provide A to Z manpower Supply for your Home needs and Company needs.</p>
                    </div>
                    <button type='button'>Learn More</button>
                    {/* Add more content as needed */}
                </div>
            </div>
        </div>
    );
}

export default Home;
