import React from 'react'

function ContactMap() {
    return (
        <div className="">
            <div className="container-fluid">
                <div className="contact-map style2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7986035202875!2d79.88807497447544!3d6.89884521866013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259afe22d9e27%3A0x44808a4d5a38662d!2sNugegoda!5e0!3m2!1sen!2slk!4v1"
                        allowFullScreen=""
                        loading="lazy"
                    />
                    <div className="contact-icon">
                        <img src="assets/img/icon/location-dot3.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMap
